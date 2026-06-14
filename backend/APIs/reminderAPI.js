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
      console.log("TWILIO ERROR:");
      console.log(err);
      console.log(err.message);

      res.status(500).json({
        message: err.message,
      });
    }
  }
);