import { sendMail } from "../utils/mailer.js";

export const sendContactMail = async (req, res) => {
  const { from, subject, message } = req.body;
  try {
    await sendMail(from, subject, message);
    res.status(200).json({ message: "Mail sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
