export default function sitemap() {
  const base = "https://sanjeewa.dev";
  return [
    { url: base + "/", changeFrequency: "weekly", priority: 1 },
    { url: base + "/contact", changeFrequency: "monthly", priority: 0.8 },
    { url: base + "/dj-christerna-case-study", changeFrequency: "monthly", priority: 0.8 },
    { url: base + "/elinapix-case-study", changeFrequency: "monthly", priority: 0.8 },
    { url: base + "/coming-soon", changeFrequency: "monthly", priority: 0.3 },
  ];
}
