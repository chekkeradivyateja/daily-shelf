// Central site + product config. Update `url` after the first Vercel deploy so
// canonical URLs, the sitemap, and robots point at the real domain.
export const site = {
  name: "The Daily Shelf",
  tagline:
    "Free, practical how-to guides — plus done-for-you ebooks, printables " +
    "and courses worth your time.",
  url: "https://daily-shelf.vercel.app",
  author: "The Daily Shelf",
};

export type Product = { id: string; name: string; tagline: string; price: string; url: string };

// Products this site funnels to. Each article carries its own product in
// frontmatter (self-contained, pipeline-generated); these are just the homepage
// picks + a fallback. A broad digital-products shelf: guides, ebooks, printables.
export const products: Record<string, Product> = {
  mealprep: {
    id: "mealprep",
    name: "The 15-Minute Meal Prep Playbook",
    tagline: "Eat well, save time, stress less — without living in the kitchen",
    price: "$19.99",
    url: "https://divyatejareddy.gumroad.com/l/jjruhm",
  },
  kids: {
    id: "kids",
    name: "Paws & Pals: Trace & Find Fun",
    tagline: "A print-and-play activity book kids love",
    price: "$6.00",
    url: "https://divyatejareddy.gumroad.com/l/azohkd",
  },
};

export const DEFAULT_PRODUCT = "mealprep";

export function getProduct(id?: string): Product {
  return products[id ?? DEFAULT_PRODUCT] ?? products[DEFAULT_PRODUCT];
}

// A UTM-tagged product link so Gumroad/Analytics can attribute clicks to the
// article that drove them.
export function productUrl(product: Product, campaign: string): string {
  const u = new URL(product.url);
  u.searchParams.set("utm_source", "daily-shelf");
  u.searchParams.set("utm_medium", "article");
  u.searchParams.set("utm_campaign", campaign);
  return u.toString();
}
