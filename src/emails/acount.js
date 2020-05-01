const sgMail = require("@sendgrid/mail");
// const sendGridApiKey =
//   "";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "chinmay@taskmanage.com",
    subject: "Thanks for Joining In!",
    text: `Welcome to the app ${name}! Let me know how it gets along.`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "chinmay@taskmanage.com",
    subject: "Sorry to see you go!",
    text: `Hi ${name}! Your account has been deleted`,
  });
};
module.exports = { sendWelcomeEmail, sendCancellationEmail };
