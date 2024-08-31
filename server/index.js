const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// SendGrid configuration
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Route to send email
app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  const msg = {
    to,
    from: 'your_verified_sendgrid_email',
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email', error);
    res.status(500).json({ error: 'Error sending email' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
