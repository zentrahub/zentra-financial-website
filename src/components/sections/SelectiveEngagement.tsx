import ConsultationButton from "../ConsultationButton";

export default function SelectiveEngagement() {
  return (
    <section className="border-t border-line px-6 py-20 text-center sm:px-10">
      <h2 className="font-display text-3xl font-thin sm:text-4xl">
        Not every client needs Zentra.
      </h2>
      <p className="mx-auto mt-5 max-w-md text-sm font-light text-fg-soft">
        Our work is most valuable when a business has reached a level where
        tax decisions, financial structure and entity strategy can
        materially affect the owner&rsquo;s outcome.
      </p>
      <div className="mt-8">
        <ConsultationButton className="bg-accent px-8 py-4 text-xs font-normal tracking-[0.12em] text-white uppercase">
          Request a Private Consultation
        </ConsultationButton>
      </div>
      <p className="mx-auto mt-6 max-w-sm text-sm font-light text-fg-soft italic">
        Most new relationships begin through referral, introduction or a
        private consultation request.
      </p>
    </section>
  );
}
