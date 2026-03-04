import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, canonical }) {
  const fullTitle = `${title} | Arushi Solutions`;
  const url = canonical || window.location.href;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
