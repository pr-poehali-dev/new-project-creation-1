import { EMAIL } from "@/lib/contacts";

const SEND_LEAD_URL = "https://functions.poehali.dev/ce303609-fb70-48d8-9abc-3fa6feac3a5b";
const EMAIL_URL = `https://formsubmit.co/ajax/${EMAIL}`;

interface Lead {
  name: string;
  phone: string;
  subject: string;
}

async function sendEmail({ name, phone, subject }: Lead) {
  const res = await fetch(EMAIL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: `Заявка с сайта: ${subject}`,
      _template: "table",
      _captcha: "false",
      "Тип заявки": subject,
      "Имя": name || "не указано",
      "Телефон": phone,
      "Дата": new Date().toLocaleString("ru-RU", { timeZone: "Asia/Kamchatka" }),
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || String(data.success) !== "true") throw new Error("email failed");
}

async function sendTelegram(lead: Lead) {
  const res = await fetch(SEND_LEAD_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  });
  if (!res.ok) throw new Error("telegram failed");
}

export async function sendLead(lead: Lead) {
  const [email, telegram] = await Promise.allSettled([sendEmail(lead), sendTelegram(lead)]);

  if (email.status === "rejected" && telegram.status === "rejected") {
    throw new Error("send failed");
  }
}
