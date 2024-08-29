export default function robots() {
  return {
    rules: {
      userAgent: ["*", "Googlebot", "Googlebot-Image"],
      disallow: [],
      allow: ["/"],
    },
    sitemap: `${process.env.NEXT_PUBLIC_DOMAIN}/sitemap.xml`,
  };
}
