 ## Server component

- Server-side data fetching

- Smaller bundle size

- This can enhance performance by decreasing data fetching time and reducing the number of client requests, faster initial page load 

- It also means you don’t have to expose API keys in the browser or worry about CORS
 
- They can also be pre-rendered or cached on the server


## Drawbacks

- More complex
- Higher demand for server resources - Increased Server Load - Increased cost - Scalability and performance


## SSR Server Side Rendering

[SSR Deep Dive for React Developers
](https://www.developerway.com/posts/ssr-deep-dive-for-react-developers?ck_subscriber_id=2397963523&utm_source=convertkit&utm_medium=email&utm_campaign=%E2%9A%9B%EF%B8%8F%20This%20Week%20In%20React%20#226:%20Parcel,%20TanStack,%20Astro,%20React-Scan,%20React-Router%20%7C%20Worklets,%20Enterprise%20Framework,%20Perf,%20Expo%20UI,%20FlatList,%20BackgroundTask%20%7C%20Node.js,%20Oxc%20Minifier,%20Oxlint,%20Valibot%20-%2016983986)


## Files Architecture

https://codelynx.dev/posts/2024-09-03-organisation-fichier-nextjs

## SEO

### Robots.txt

Add a `robots.txt` file in the root of app directory to tell search engine crawlers which URLs they can access on your site. (or `robots.ts`)

### Sitemap.xml

Add a `sitemap.xml` file int the root of app directory to help search engine crawlers crawl your site more efficiently. (or `sitemap.ts`)

### Other

Google Search Console
