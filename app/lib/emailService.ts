import nodemailer from "nodemailer";

interface EmailTemplate {
  subject: string;
  text: string;
  html: string;
}

interface SubscriptionData {
  company_name: string;
  contact_person: string;
  email: string;
  phone: string;
  business_sector: string;
  annual_revenue: string;
  message?: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Email template functions
const getAdminInviteTemplate = (signupLink: string): EmailTemplate => ({
  subject: "RAFWARZ ADMIN SIGNUP",
  text: `You have been invited to sign up. Click the link below to complete your registration:\n\n${signupLink}`,
  html: `<p>You have been invited to sign up. Click the link below to complete your registration:</p><p><a href="${signupLink}">${signupLink}</a></p>`,
});

const getSubscriptionRequestTemplate = (
  data: SubscriptionData
): EmailTemplate => ({
  subject: "RAFWARZ INNOVATIVE MANAGEMENT CONSULTANTS",
  text: `
    New subscription request received:
    
    Company: ${data.company_name}
    Contact Person: ${data.contact_person}
    Email: ${data.email}
    Phone: ${data.phone}
    Business Sector: ${data.business_sector}
    Annual Revenue: ${data.annual_revenue}
    Message: ${data.message || "No message provided"}
    
    Please check your admin dashboard for more details.
  `,
  html: `
    <h2>New subscription request received</h2>
    <table style="border-collapse: collapse; width: 100%;">
      <tr>
        <td style="padding: 8px;"><strong>Company:</strong></td>
        <td style="padding: 8px;">${data.company_name}</td>
      </tr>
      <tr>
        <td style="padding: 8px;"><strong>Contact Person:</strong></td>
        <td style="padding: 8px;">${data.contact_person}</td>
      </tr>
      <tr>
        <td style="padding: 8px;"><strong>Email:</strong></td>
        <td style="padding: 8px;">${data.email}</td>
      </tr>
      <tr>
        <td style="padding: 8px;"><strong>Phone:</strong></td>
        <td style="padding: 8px;">${data.phone}</td>
      </tr>
      <tr>
        <td style="padding: 8px;"><strong>Business Sector:</strong></td>
        <td style="padding: 8px;">${data.business_sector}</td>
      </tr>
      <tr>
        <td style="padding: 8px;"><strong>Annual Revenue:</strong></td>
        <td style="padding: 8px;">${data.annual_revenue}</td>
      </tr>
      <tr>
        <td style="padding: 8px;"><strong>Message:</strong></td>
        <td style="padding: 8px;">${data.message || "No message provided"}</td>
      </tr>
    </table>
    <p>Please check your admin dashboard for more details.</p>
  `,
});

// Generic send email function
export const sendEmail = async (
  to: string,
  template: EmailTemplate
): Promise<void> => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to,
      ...template,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${to}`);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

// Specific email functions
export const sendInviteEmail = async (
  email: string,
  token: string
): Promise<void> => {
  const signupLink = `${process.env.BASE_URL}/signup?token=${token}`;
  const template = getAdminInviteTemplate(signupLink);
  await sendEmail(email, template);
};

export const sendSubscriptionNotification = async (
  adminEmail: string,
  subscriptionData: SubscriptionData
): Promise<void> => {
  const template = getSubscriptionRequestTemplate(subscriptionData);
  await sendEmail(adminEmail, template);
};
