const nodemailer=require("nodemailer");
const sendEmailController = async(req, res) => {
  try {
    const {name,email,message}=req.body;
     const transporter=nodemailer.createTransport({
      service:"gmail",
      auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS,
      },
     });
     const mailoptions={
      from:process.env.EMAIL_USER,
      to:process.env.EMAIL_USER,
      replyTo:email,
      subject:`Portfolio Contact Message from ${name}`,
      html:'<div style="padding:10px; border:1px solid #ccc; border-radius:5px;">'+
      `<h2 style="color:#333;">You have a new contact message from your portfolio website</h2>`+
      `<p style="font-size:16px; color:#555;"><strong>Name:</strong> ${name}</p>`+
      `<p style="font-size:16px; color:#555;"><strong>Email:</strong> ${email}</p>`+
      `<p style="font-size:16px; color:#555;"><strong>Message:</strong><br>${message}</p>`+
      '</div>',
     };
     await transporter.sendMail(mailoptions);


    return res.status(200).send({
      success: true,
      message: "Email sent successfully"
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in sending email",
      error: error.message
    });
  }
};

module.exports = { sendEmailController };