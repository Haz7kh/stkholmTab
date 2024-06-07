const express = require("express");
const ContactMessage = require("../models/ContactMessage");
const sgMail = require("@sendgrid/mail");

const router = express.Router();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Create a new contact message
  const newMessage = new ContactMessage({ name, email, phone, message });

  try {
    // Save the message to the database
    await newMessage.save();

    // Send an email with the form data
    const msg = {
      to: process.env.BUSINESS_EMAIL, // Your verified business email
      from: "info@stockholmbusinessit.com", // Verified sender email
      subject: `Contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    await sgMail.send(msg);

    res.status(200).send("Message sent and saved successfully");
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    res.status(500).send("Error sending message");
  }
});

module.exports = router;
