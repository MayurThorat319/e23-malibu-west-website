import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
};

const SITE_NAME = "EV23 Malibu West";
const DEFAULT_IMAGE = "/images/Malibu_logo.png";

const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//i.test(path)) return path;
  const origin = window.location.origin;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
};

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const upsertLink = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const SEO = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  keywords = [],
  structuredData,
}: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = getAbsoluteUrl(path);
    const imageUrl = getAbsoluteUrl(image);

    document.title = title;
    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });

    if (keywords.length > 0) {
      upsertMeta('meta[name="keywords"]', {
        name: "keywords",
        content: keywords.join(", "),
      });
    }

    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: SITE_NAME,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: imageUrl,
    });
    upsertLink("canonical", canonicalUrl);

    const existingSchema = document.getElementById("route-schema");
    existingSchema?.remove();

    if (structuredData) {
      const script = document.createElement("script");
      script.id = "route-schema";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [description, image, keywords, path, structuredData, title]);

  return null;
};

export default SEO;
