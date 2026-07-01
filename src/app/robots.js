import { SITE } from "@/constants/site";

export default function robots() {
  const base = SITE.url.replace(/\/$/, "");
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
