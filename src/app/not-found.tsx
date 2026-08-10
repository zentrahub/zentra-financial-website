import Link from "next/link";
import WordMark from "@/components/marks/WordMark";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Link href="/" aria-label="Zentra Financial home" className="mb-12">
        <WordMark className="h-4 w-auto text-fg" />
      </Link>
      <p className="mb-4 text-[0.68rem] font-light tracking-[0.2em] text-fg-soft uppercase">
        404
      </p>
      <h1 className="font-display max-w-md text-3xl font-thin text-balance sm:text-4xl">
        This page doesn&rsquo;t exist.
      </h1>
      <p className="mt-4 max-w-sm text-sm font-light text-fg-soft">
        The page you&rsquo;re looking for may have moved, or the link may be
        out of date.
      </p>
      <Link
        href="/"
        className="mt-10 border border-fg px-6 py-3 text-xs font-normal tracking-[0.14em] text-fg uppercase transition hover:bg-fg hover:text-bg"
      >
        Return Home
      </Link>
    </div>
  );
}
