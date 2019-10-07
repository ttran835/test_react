require('dotenv').config();
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const CrytoJS = require('crypto-js');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const { UserLogins } = require('../../database/tables/userLogins');

const forgotPassword = {
  post: (req, res) => {
    const { email } = req.body;
    if (email === '') return res.json('Email required');

    UserLogins.findOne({
      where: { email },
    }).then((data) => {
      if (data === null) return res.status(400).json('No information found!');
      const token = crypto.randomBytes(20).toString('hex');
      console.log(token);
      data
        .update(
          {
            resetPasswordToken: token,
            resetPasswordExpires: Date.now() + 180000,
          },
          { returning: true },
        )
        .then((response) => {
          if (response === null) return res.status(400).json('No Data');

          const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
              user: process.env.GMAIL_USER,
              pass: process.env.GMAIL_PASSWORD,
            },
          });

          const mailOptions = {
            from: `${process.env.GMAIL_USER}`,
            to: `${email}`,
            subject: 'Reset Password',
            text:
              `You are receiving this email to reset the password. \n\n` +
              `Please click the link or paste it onto the url to go to password reset \n\n` +
              `http://${process.env.HOST}:${process.env.SERVER_PORT}/reset \n\n` +
              `Please use this temporary password to reset your password: \n\n` +
              `${token} \n\n` +
              `If you did not request this, please contact us.`,
          };

          console.log('Sending Email');

          transporter.sendMail(mailOptions, (err, response) => {
            if (err) console.log(err);
            res.status(200).json('Reset link sent');
          });
        });
    });
  },

  put: (req, res) => {
    const { email, password, resetPasswordToken } = req.body;
    if (resetPasswordToken === undefined) return res.json('Please enter Token.');
    UserLogins.findOne({
      where: { email, resetPasswordToken },
    }).then((user) => {
      /* Check for token info */
      if (resetPasswordToken === null) {
        res.json('Unknown process.');
      } else if (user !== null) {
        user
          .update({
            password,
            resetPasswordToken: null,
            resetPasswordExpires: null,
          })
          .then(() => res.status(200).send({ message: 'password updated' }));
      } else {
        return res
          .status(404)
          .json('Cannot process information. Please make sure your reset token is correct.');
      }
    });
  },
};

module.exports = { forgotPassword };
