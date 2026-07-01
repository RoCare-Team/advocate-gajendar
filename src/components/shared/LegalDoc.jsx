import Container from "@/components/ui/Container";

// Renders a legal document from structured sections: [{ heading, body: [paragraphs] }].
export default function LegalDoc({ updated, sections }) {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container className="max-w-3xl">
        <div className="rounded-3xl border border-ink-100 bg-white p-8 sm:p-10">
          <p className="text-sm text-ink-400">Last updated: {updated}</p>
          <div className="mt-6 space-y-8">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="font-display text-xl font-bold text-ink-900">
                  {i + 1}. {s.heading}
                </h2>
                {s.body.map((p, j) => (
                  <p key={j} className="mt-3 text-sm leading-relaxed text-ink-600">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
