import { SITE } from "@/constants/site";
import { practiceAreas } from "@/data/practiceAreas";
import { lawyers } from "@/data/lawyers";
import { blogs } from "@/data/blogs";
import { getCityServiceParams } from "@/data/cities";

// Generates the sitemap from data — add cities/services/lawyers and they appear here.
export default function sitemap() {
  const base = SITE.url.replace(/\/$/, "");
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/consultation",
    "/lawyers",
    "/legal-services",
    "/cities",
    "/blogs",
    "/faq",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({ url: `${base}${path}`, changeFrequency: "weekly", priority: path === "" ? 1 : 0.7 }));

  const areaRoutes = practiceAreas.map((p) => ({
    url: `${base}/legal-services/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const lawyerRoutes = lawyers.map((l) => ({
    url: `${base}/lawyers/${l.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogRoutes = blogs.map((b) => ({
    url: `${base}/blogs/${b.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const cityRoutes = getCityServiceParams().map(({ service, city }) => ({
    url: `${base}/${service}/${city}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...areaRoutes, ...lawyerRoutes, ...blogRoutes, ...cityRoutes];
}
