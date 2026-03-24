import Head from "next/head";

export function Seo({data, schema}) {
    return (
        <Head>
            <title>{data.pageTitle}</title>
            {/* Structured Data */}
                {schema && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(schema)
                        }}
                    />
                )}


            <meta name="description" content={data.pageDescription} />

            {/* Canonical Link */}
            <link rel="canonical" href={`https://www.michelmurabito.com${data.pageLink}`} />

            {/* Open Graph Tags */}
            <meta property="og:title" content={`${data.pageTitle}`} />
            <meta property="og:description" content={data.pageDescription} />
            <meta property="og:url" content={`https://www.michelmurabito.com${data.pageLink}`} />
            <meta property="og:image" content={data.pageImage} />
            <meta property="og:type" content="article" />

            {/* Twitter Cards */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${data.pageTitle}`} />
            <meta name="twitter:description" content={data.pageDescription} />
            <meta name="twitter:image" content={data.pageImage} />

            {/* Viewport Meta Tag */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Favicon */}
            <link rel="icon" href="/images/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      </Head>
    );
}
