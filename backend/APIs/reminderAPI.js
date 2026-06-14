import exp from "express";
import twilio from "twilio";
import { verifyToken } from "../middleware/verifyToken.js";

export const reminderApp = exp.Router();
const client = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH_TOKEN
);

reminderApp.post("/send",verifyToken,async (req, res) => {
    try {

      console.log("BODY:", req.body);
      const {phone,name,balance,} = req.body;
      console.log("PHONE:", phone);
console.log("TO:", `+91${phone}`);
console.log("TWILIO_PHONE:", process.env.TWILIO_PHONE);
console.log("SID EXISTS:", !!process.env.TWILIO_SID);
console.log("TOKEN EXISTS:", !!process.env.TWILIO_AUTH_TOKEN);
      const message =await client.messages.create({
          body: `Hello ${name}, your pending balance is ₹${balance}. Kindly clear your dues.`,
          from: process.env.TWILIO_PHONE,
          to: `+91${phone}`,
        });
      console.log("SUCCESS:", message.sid);
      res.status(200).json({
        message: "Reminder Sent",
      });
    } catch (err) {
      console.log("TWILIO ERROR:", err);

if (err.code) {
  console.log("Error Code:", err.code);
}

if (err.status) {
  console.log("Status:", err.status);
}

console.log("Message:", err.message);
      res.status(500).json({
        message: err.message,
      });
    }
  }
);