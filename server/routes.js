var paypal = require('./paypal/paypal.server.controller');
// API Server Endpoints
module.exports = function(app){
  app.get('/payment', paypal.paypalPayment);
  app.get('/orderExecute', paypal.orderExecute);
}
