import type { Metadata } from "next";
import LegalPlaceholder from "@/components/LegalPlaceholder";
import { getMessages } from "@/i18n";

const t = getMessages();

export const metadata: Metadata = { title: t.legalPlaceholder.termsTitle };

export default function TermsPage() {
  return <LegalPlaceholder title={t.legalPlaceholder.termsTitle} />;
}
