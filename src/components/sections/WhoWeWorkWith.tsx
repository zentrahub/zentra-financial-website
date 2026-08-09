const PROFILES = [
  "Established Business Owners",
  "Entrepreneurs With Growing Complexity",
  "Privately Held Companies",
  "U.S. and International Business Owners",
  "High-Income Professionals With Business Interests",
];

export default function WhoWeWorkWith() {
  return (
    <section className="border-t border-line px-6 py-16 sm:px-10 md:py-20">
      <p className="mb-10 text-center text-[0.62rem] font-light tracking-[0.2em] text-fg-soft uppercase">
        Who We Work With
      </p>
      <ul className="mx-auto flex max-w-3xl flex-col divide-y divide-line">
        {PROFILES.map((profile) => (
          <li
            key={profile}
            className="font-display py-4 text-center text-lg font-extralight sm:text-xl"
          >
            {profile}
          </li>
        ))}
      </ul>
    </section>
  );
}
