import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export const sendMail = async (from, subject, html) => {
  html = html + `<br><p>From: ${from}</p>`;
  const info = await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: process.env.MAIL_TO.split(","),
    subject,
    html,
  });
};
