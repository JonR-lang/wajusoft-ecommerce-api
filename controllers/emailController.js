const nodemailer = require("nodemailer");

const sendEmail = async (data, req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, //For Port 465, secure should always be true.
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.MAIL_ID,
      pass: process.env.MAIL_PASSWORD, //I got this password from app password given to me by google.
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Burger Alchemist🍔" <abc@gmail.com>', // sender address
    bcc: data.to, // list of receivers
    subject: data.subject, // Subject line
    text: data.text, // plain text body
    html: data.html, // html body
  });

  console.log("Message sent: %s", info.messageId);
};

module.exports = sendEmail;
