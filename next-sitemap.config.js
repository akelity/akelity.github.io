/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://michelmurabito.com',
    generateRobotsTxt: true,
    transform: async (config, path) => {
        const pageConfig = {
            '/': { changefreq: 'monthly', priority: 1.0 },
            '/about-me': { changefreq: 'weekly', priority: 0.9 },
            '/articles': { changefreq: 'weekly', priority: 0.8 },
            '/articles/:slug': { changefreq: 'weekly', priority: 0.7 },
            '/projects': { changefreq: 'monthly', priority: 0.6 },
            '/speaking': { changefreq: 'weekly', priority: 0.8 },
            '/speaking/:slug': { changefreq: 'weekly', priority: 0.8 },
            '/uses': { changefreq: 'yearly', priority: 0.5 },
            '/thank-you': { changefreq: 'yearly', priority: 0 }
        };

        return {
            loc: path,
            changefreq: pageConfig[path]?.changefreq || 'weekly',
            priority: pageConfig[path]?.priority || 0.7,
            lastmod: new Date().toISOString(),
        };
    },
    outDir: "dist",
    generateIndexSitemap: false
}

