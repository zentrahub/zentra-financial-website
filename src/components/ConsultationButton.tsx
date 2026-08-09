"use client";

import type { ReactNode } from "react";
import { useConsultation } from "./ConsultationProvider";

type ConsultationButtonProps = {
  children: ReactNode;
  className?: string;
};

export default function ConsultationButton({
  children,
  className,
}: ConsultationButtonProps) {
  const { open } = useConsultation();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
