const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  secure: false,
  auth: {
    user: "coolalan2016@gmail.com",
    pass: "FVcafrgJKyB8ndzA",
  },
});

module.exports = transporter;
