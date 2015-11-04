module.exports = {
    server: {
            host: '0.0.0.0',
            port: process.env.PORT || 3000
    },
    paypalConfig: {
        "host" : "api.sandbox.paypal.com",
        "port" : "",
        "client_id" : "EBWKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM",
        "client_secret" : "EO422dn3gQLgDbuwqTjzrFgFtaRLRR5BdHEESmha49TM"
    },
    url: {
        basePath: 'http://localhost:3000'
    },
};
