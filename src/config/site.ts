interface SiteConfig {
  name: string;
  title: string;
  description: string;
  githubUrl: string | null;
  documentationUrl: string;
}

export const siteConfig: SiteConfig = {
  name: "TokenClash",
  title: "TokenClash - Switch AI Providers Like Clash",
  description:
    "Local AI gateway for routing multiple AI providers through one OpenAI-compatible endpoint.",
  githubUrl: "https://github.com/webszy/tokenclash.dev",
  documentationUrl: "#developer-experience",
};
