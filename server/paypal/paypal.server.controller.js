var paypal = require('paypal-rest-sdk');
var uuid = require('node-uuid');
var request = require('request');
var config = require('../config/config');

paypal.configure(
  config.paypalConfig
);

var paypalPayment = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {},
    "transactions": [{
      "amount": {
        "currency": "USD"
      }
    }]
};
/**receive payment in this card*/
var card_data = {
  "type": "visa",
  "number": "4417119669820331",
  "expire_month": "11",
  "expire_year": "2018",
  "cvv2": "123",
  "first_name": "Soni",
  "last_name": "Pandey"
};
var order_id = uuid.v4();

exports.paypalPayment = function(req, res){
  paypalPayment.transactions[0].amount.total = 100;
  paypalPayment.redirect_urls.return_url = config.url.basePath+"/orderExecute/?order_id=" + order_id;
  paypalPayment.redirect_urls.cancel_url = config.url.basePath+"/?order_id=" + order_id;
  paypalPayment.transactions[0].description = "This is test payment made by me"
  paypal.payment.create(paypalPayment, {}, function (err, resp) {
    if (err) {
        console.log(err)
    }
    if (resp) {
      var now = (new Date()).toISOString().replace(/\.[\d]{3}Z$/, 'Z ');
      console.log(order_id, resp.id, resp.state, now)
      var link = resp.links;
      for (var i = 0; i < link.length; i++) {
        if (link[i].rel === 'approval_url') {
          var url = link[i].href;
         }
      }
      return res.json({'url': url});
    }
  });
}
exports.orderExecute = function (req, res) {
  var order_id = req.query.order_id
  var paymentId = req.query.paymentId
  var payer = { payer_id : req.query.PayerID };
  paypal.payment.execute(paymentId, payer, {}, function (err, resp) {
    if (err) {
    }
    if (resp) {
      return res.redirect('/#!/');
    }
  });
}
