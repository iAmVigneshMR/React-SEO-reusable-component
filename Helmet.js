import React from "react";
import Head from "react-helmet";

const PAGE_TITLE = 'List Self Storage | ';
const DOMAIN = "https://www.listselfstorage.com";
const MAIN_KEYWORDS = "listselfstorage, Self Storage, List Self Storage, Storage List, Listing"; //most searched or important words in website
const DEFAULT_TITLE = "List Self Storage";
const DEFAULT_DESCRIPTION = "List Self Storage is uniquely qualified to serve as an outsourced acquisitions and capital deployment solution for established buyers and investors within the list self storage industry.";
const FAVICON_SOURCE = "https://www.listselfstorage.com/favicon.ico";

export default function Helmet({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  link,
  keywords = "",
  addPostfixTitle = false,
  noIndex = false,
  children = null,
}) {

  let metaTitle
  if (addPostfixTitle) {
    metaTitle = PAGE_TITLE + title;
  } else {
    metaTitle = DEFAULT_TITLE;
  }

  const metaDesc = description ? description : DEFAULT_DESCRIPTION;
  const metaLink = DOMAIN + link;  //ex: https://www.listselfstorage.com/about ,here "about" is "link"
  const metaKeywords = keywords.length > 0 ? MAIN_KEYWORDS + ", " + keywords : MAIN_KEYWORDS;
  const metaRobots = noIndex ? "noindex, nofollow" : "index, follow"; //refer : https://seo-hacker.com/what-meta-robots-tag-are-for/#:~:text=Meta%20robots%20tag%20is%20a,to%20index%20and%20look%20at.

  return (
    <Head>
      <html lang="en" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={metaLink} />   {/*canonical is uesd to tell the search engine  which link is real and duplicate for real link put it in "href" attribute*/}
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content={metaRobots} />
      <link rel="icon" content={FAVICON_SOURCE} />

      {/* https://moz.com/blog/meta-referrer-tag */}
      <meta name="referrer" content="origin-when-crossorigin" />

      {children}
    </Head>
  )
}
