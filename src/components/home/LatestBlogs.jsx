import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import BlogCard from "@/components/blogs/BlogCard";
import { blogs } from "@/data/blogs";

export default function LatestBlogs() {
  const latest = blogs.slice(0, 3);

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeading
            align="left"
            eyebrow="Legal Insights"
            title="From our legal blog"
            subtitle="Practical, plain-English guides to help you understand your rights and options."
            className="max-w-xl"
          />
          <Button href="/blogs" variant="outline" className="hidden shrink-0 sm:inline-flex">
            View all articles <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((blog, i) => (
            <Reveal key={blog.slug} delay={i * 0.05}>
              <BlogCard blog={blog} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
