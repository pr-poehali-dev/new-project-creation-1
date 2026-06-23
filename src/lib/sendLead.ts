import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_ngubj7j";
const EMAILJS_TEMPLATE_ID = "__ejs-test-mail-service_";
const EMAILJS_PUBLIC_KEY = "6XBgBCrsMs5LWl-Kg4o4Y";
const SEND_LEAD_URL = "https://functions.poehali.dev/ce303609-fb70-48d8-9abc-3fa6feac3a5b";

export async function sendLead(phone: string, subject: string, message: string) {
  await Promise.all([
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: subject,
        message,
        reply_to: "legis-pro@outlook.com",
      },
      EMAILJS_PUBLIC_KEY
    ),
    fetch(SEND_LEAD_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, subject }),
    }),
  ]);
}
