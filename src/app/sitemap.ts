import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { services } from "@/data/services";
import { samples } from "@/data/samples";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "about", "experience", "services", "work", "resources", "opportunities", "contact"];
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}/${p ? p + "/" : ""}`, priority: p === "" ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${SITE_URL}/services/${s.slug}/`, priority: 0.8 })),
    ...samples.map((s) => ({ url: `${SITE_URL}/work/${s.slug}/`, priority: 0.5 })),
  ];
}
