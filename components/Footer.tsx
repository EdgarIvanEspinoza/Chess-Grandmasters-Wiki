export default function Footer() {
  return (
    <footer className="border-t py-2 mt-12 text-sm text-muted-foreground bg-[var(--card-background)]">
      <div className="flex flex-col justify-center items-center  text-center">
        <p>
          Built by <strong>Edgar Iván Espinoza</strong>
        </p>
        <p>
          using the{' '}
          <a
            href="https://www.chess.com/news/view/published-data-api"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Chess.com API
          </a>
        </p>
      </div>
    </footer>
  );
}
