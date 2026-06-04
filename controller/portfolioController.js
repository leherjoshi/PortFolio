const { Resend } = require("resend");

const sendEmailController = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return res.status(500).send({
        success: false,
        message: "Email service is not configured.",
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "leherjoshi9@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact Message from ${name}`,
      html:
        '<div style="padding:10px; border:1px solid #ccc; border-radius:5px;">' +
        `<h2 style="color:#333;">You have a new contact message from your portfolio website</h2>` +
        `<p style="font-size:16px; color:#555;"><strong>Name:</strong> ${name}</p>` +
        `<p style="font-size:16px; color:#555;"><strong>Email:</strong> ${email}</p>` +
        `<p style="font-size:16px; color:#555;"><strong>Message:</strong><br>${message}</p>` +
        '</div>',
    });

    return res.status(200).send({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Error sending email",
      error: error.message,
    });
  }
};

module.exports = { sendEmailController };