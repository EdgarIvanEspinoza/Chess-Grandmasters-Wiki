export default function Home() {
  return (
    <>
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          🧠 Chess Grandmasters Wiki
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Discover the world&#39;s top chess Grandmasters, explore their stats,
          profiles, and activity. All powered by the Chess.com API.
        </p>
      </section>

      <section className="py-10">
        <div className="grid sm:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold">🧑‍💻 Real Data</h3>
            <p className="text-muted-foreground text-sm">
              Sourced directly from <strong>Chess.com&#39;s</strong> public API.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">📊 Player Insights</h3>
            <p className="text-muted-foreground text-sm">
              See detailed profiles and activity history.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">⚡ Live Experience</h3>
            <p className="text-muted-foreground text-sm">
              Dynamic UI with real-time “last online” updates.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 text-center">
        <a
          href="/grandmasters"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
        >
          🚀 Start Exploring Grandmasters
        </a>
      </section>
    </>
  );
}
