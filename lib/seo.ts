import { SERVICES, type Service, type ServiceFAQ } from "./services";

/**
 * Central business / NAP data used for metadata and JSON-LD structured data.
 *
 * NOTE: `telephone` is a placeholder that matches the rest of the site. Replace
 * it (and add a real street address + Google Business Profile link in `sameAs`)
 * once available — consistent NAP across the site, schema, and GBP is what
 * drives local ranking in Edmonton.
 */
export const BUSINESS = {
  name: "AB Construction Group",
  url: "https://abconstructiongroup.ca",
  logo: "https://abconstructiongroup.ca/logo-red.png",
  email: "abconstructiongroup1@gmail.com",
  telephone: "+1-780-818-5555",
  description:
    "Edmonton-based construction company providing concrete pumping, footings and foundation walls, cribbing and forming, waterproofing and weeping tile, aggregate supply, and excavation across Greater Edmonton and Alberta.",
  streetAddress: "4912 Roper Road",
  city: "Edmonton",
  region: "AB",
  regionName: "Alberta",
  postalCode: "T6B 3T7",
  country: "CA",
  priceRange: "$$",
  /** Add real profiles here (Google Business Profile, Facebook, Instagram). */
  sameAs: [] as string[],
} as const;

const ORG_ID = `${BUSINESS.url}/#organization`;
const WEBSITE_ID = `${BUSINESS.url}/#website`;

/** Greater Edmonton municipalities the crews serve. Drives `areaServed` + the Areas We Serve section. */
export const SERVICE_AREAS = [
  "Edmonton",
  "St. Albert",
  "Sherwood Park",
  "Spruce Grove",
  "Stony Plain",
  "Leduc",
  "Beaumont",
  "Fort Saskatchewan",
  "Red Deer",
  "Smoky Lake",
  "Devon",
  "Nisku",
  "Morinville",
  "Gibbons",
  "Acheson",
  "Strathcona County",
  "Parkland County",
];

/** Edmonton neighbourhoods — long-tail local relevance ("foundation contractor in <area>"). */
export const EDMONTON_COMMUNITIES = [
  "Windermere",
  "Summerside",
  "Terwillegar",
  "Glenora",
  "Riverbend",
  "Rutherford",
  "Laurel",
  "Keswick",
  "Griesbach",
  "Crestwood",
  "The Hamptons",
  "Magrath Heights",
];

type Json = Record<string, unknown>;
type Crumb = { name: string; url?: string };

/** Site-wide LocalBusiness (GeneralContractor) entity. */
export function localBusinessSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": ORG_ID,
    name: BUSINESS.name,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    image: BUSINESS.logo,
    email: BUSINESS.email,
    telephone: BUSINESS.telephone,
    description: BUSINESS.description,
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    areaServed: SERVICE_AREAS.map((name) => ({ "@type": "Place", name })),
    serviceType: SERVICES.map((s) => s.title),
    makesOffer: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
      },
    })),
    ...(BUSINESS.sameAs.length ? { sameAs: BUSINESS.sameAs } : {}),
  };
}

export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: BUSINESS.url,
    name: BUSINESS.name,
    inLanguage: "en-CA",
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(items: Crumb[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.url ? { item: `${BUSINESS.url}${it.url}` } : {}),
    })),
  };
}

export function serviceSchema(service: Service): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} in Edmonton & Alberta`,
    serviceType: service.title,
    description: service.longDescription,
    url: `${BUSINESS.url}/services/${service.slug}`,
    image: `${BUSINESS.url}${service.image}`,
    provider: { "@id": ORG_ID },
    areaServed: SERVICE_AREAS.map((name) => ({ "@type": "Place", name })),
  };
}

export function faqSchema(faqs: ServiceFAQ[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** ItemList of all services — helps the Services index page. */
export function servicesItemListSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${s.title} in Edmonton`,
      url: `${BUSINESS.url}/services/${s.slug}`,
    })),
  };
}
