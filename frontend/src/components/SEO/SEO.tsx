import { FC, useEffect } from 'react'
import { SITE_NAME, SITE_URL } from 'src/helpers'

interface ISEO {
  title: string,
  description: string,
  path: string,
  image?: string,
  type?: 'website' | 'article',
  jsonLd?: object | object[],
}

const JSON_LD_ID = 'seo-jsonld';

const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

const upsertLink = (rel: string, href: string) => {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const setJsonLd = (data?: object | object[]) => {
  const existing = document.getElementById(JSON_LD_ID);
  if (!data) {
    existing?.remove();
    return;
  }
  const script = existing ?? document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.id = JSON_LD_ID;
  script.textContent = JSON.stringify(data);
  if (!existing) document.head.appendChild(script);
}

export const SEO: FC<ISEO> = ({ title, description, path, image, type = 'website', jsonLd }) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const resolvedImage = image ?? `${SITE_URL}/og-image.png`;

    document.title = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
    upsertMeta('name', 'description', description);
    upsertLink('canonical', url);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', resolvedImage);
    upsertMeta('property', 'og:type', type);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', resolvedImage);
    setJsonLd(jsonLd);

    return () => setJsonLd(undefined);
  }, [title, description, path, image, type, jsonLd]);

  return null;
}
