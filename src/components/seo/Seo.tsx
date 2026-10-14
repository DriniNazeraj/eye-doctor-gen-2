import { Helmet } from "react-helmet-async"

import { site } from "../../config/site.ts"

export function Seo({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}) {
  const fullTitle = path === "/" ? title : `${title} | ${site.name}`
  const url = new URL(path, site.url).href

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content={site.name} />
    </Helmet>
  )
}
