import Link from 'next/link';

export default function Header() {
  return (
    <header
      className="
        py-4 px-6 
        bg-[var(--card-background)] 
        border 
        border-[var(--border)] 
        rounded-md 
        shadow-lg
        w-[95%]
        max-w-6xl 
        mx-auto
        mt-4
      "
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 text-center sm:text-left">
        <Link
          href="/"
          className="text-lg font-bold tracking-wide hover:text-[var(--border)] transition"
        >
          ♟️ GrandMasters - Wiki
        </Link>
        <nav className="flex justify-center sm:justify-end space-x-6 text-sm">
          <Link href="/grandmasters" className="hover:text-[var(--border)]">
            Explore
          </Link>
          <a
            href="https://www.chess.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--border)]"
          >
            Chess.com
          </a>
        </nav>
      </div>
    </header>
  );
}
