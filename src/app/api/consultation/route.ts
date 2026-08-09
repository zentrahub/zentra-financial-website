import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = "hello@zentrafinancial.com";

const FIELDS = [
  "name",
  "email",
  "phone",
  "company",
  "revenue",
  "interest",
  "source",
  "description",
] as const;

const LABELS: Record<(typeof FIELDS)[number], string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  company: "Company",
  revenue: "Approximate Annual Revenue",
  interest: "Primary Area of Interest",
  source: "How did you hear about Zentra?",
  description: "Short Description",
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    // Not configured yet — fail loudly in server logs rather than silently
    // pretending the lead was captured.
    console.error(
      "Consultation request received but GMAIL_USER / GMAIL_APP_PASSWORD are not set — email not sent.",
      { name, email },
    );
    return NextResponse.json(
      { error: "Consultation requests are not yet configured. Please try again later." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailAppPassword },
  });

  const lines = FIELDS.map((field) => `${LABELS[field]}: ${body[field] ?? ""}`);

  try {
    await transporter.sendMail({
      from: `Zentra Financial Website <${gmailUser}>`,
      to: TO_EMAIL,
      replyTo: email || undefined,
      subject: `Private Consultation Request — ${name}`,
      text: lines.join("\n"),
    });
  } catch (err) {
    console.error("Failed to send consultation request email:", err);
    return NextResponse.json(
      { error: "Couldn't send your request. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
