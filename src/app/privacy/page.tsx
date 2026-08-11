import type { Metadata } from "next";
import LegalPlaceholder from "@/components/LegalPlaceholder";
import { getMessages } from "@/i18n";

const t = getMessages();

export const metadata: Metadata = { title: t.legalPlaceholder.privacyTitle };

export default function PrivacyPage() {
  return <LegalPlaceholder title={t.legalPlaceholder.privacyTitle} />;
}
