import { Home, Search } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 hero-grid opacity-40" />
      <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl" />
      <Container className="relative text-center">
        <p className="gold-gradient-text font-display text-8xl font-bold sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink-300">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="gold" size="lg">
            <Home className="h-4 w-4" /> Back to home
          </Button>
          <Button href="/lawyers" variant="light" size="lg">
            <Search className="h-4 w-4" /> Find a lawyer
          </Button>
        </div>
      </Container>
    </section>
  );
}
