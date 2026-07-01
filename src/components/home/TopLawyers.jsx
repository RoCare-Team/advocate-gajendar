import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import LawyerCard from "@/components/lawyers/LawyerCard";
import { lawyers } from "@/data/lawyers";

export default function TopLawyers() {
  const top = [...lawyers].sort((a, b) => b.rating - a.rating).slice(0, 6);

  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeading
            align="left"
            eyebrow="Top Rated"
            title="Meet our leading advocates"
            subtitle="Hand-picked, verified lawyers with proven track records across India's courts."
            className="max-w-xl"
          />
          <Button href="/lawyers" variant="outline" className="hidden shrink-0 sm:inline-flex">
            Browse all lawyers <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {top.map((lawyer, i) => (
            <Reveal key={lawyer.slug} delay={i * 0.05}>
              <LawyerCard lawyer={lawyer} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Button href="/lawyers" variant="outline">
            Browse all lawyers <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
