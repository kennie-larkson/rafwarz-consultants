import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

console.log("Transporter created with:", {
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  user: process.env.EMAIL_USER,
});

export const sendInviteEmail = async (email: string, token: string) => {
  const signupLink = `${process.env.BASE_URL}/signup?token=${token}`;

  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "You're Invited to Sign Up",
      text: `You have been invited to sign up. Click the link below to complete your registration:\n\n${signupLink}`,
      html: `<p>You have been invited to sign up. Click the link below to complete your registration:</p><p><a href="${signupLink}">${signupLink}</a></p>`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("sendInviteEmail: ", error);
  }
};
