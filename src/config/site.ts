interface SiteConfig {
  name: string;
  title: string;
  description: string;
  siteUrl: string;
  githubUrl: string | null;
  xUrl: string;
  documentationUrl: string;
}

export const siteConfig: SiteConfig = {
  name: "TokenClash",
  title: "TokenClash - Switch AI Providers Like Clash",
  description:
    "Local AI gateway for routing multiple AI providers through one OpenAI-compatible endpoint.",
  siteUrl: "https://tokenclash.dev",
  githubUrl: "https://github.com/webszy/tokenclash",
  xUrl: "https://x.com/WalterAIBuilder",
  documentationUrl: "#developer-experience",
};
