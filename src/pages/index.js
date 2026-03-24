import {Container} from '@/components/Container'
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    XIcon,
} from '@/components/SocialIcons'
import {getAllArticles} from '@/lib/articles'
import profile from '../data/profile.json';
import Article from "@/components/Article";
import {SocialLinkHome} from "@/lib/utils";
import Photos from "@/components/Photos";
import Resume from "@/components/Resume";
import {Seo} from "@/components/Seo";



export default function Home({data, schema}) {
    const articles = data.articles;
    return (
        <>
            <Seo data={data} schema={schema} />
            <Container className="mt-9">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        {profile.short_intro}
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        {profile.med_intro}
                    </p>
                    <div className="mt-6 flex gap-6">
                        <SocialLinkHome href="#" aria-label="Follow on X" icon={XIcon}/>
                        <SocialLinkHome
                            href="#"
                            aria-label="Follow on Instagram"
                            icon={InstagramIcon}
                        />
                        <SocialLinkHome
                            href="#"
                            aria-label="Follow on GitHub"
                            icon={GitHubIcon}
                        />
                        <SocialLinkHome
                            href="#"
                            aria-label="Follow on LinkedIn"
                            icon={LinkedInIcon}
                        />
                    </div>
                </div>
            </Container>
            <Photos />
            <Container className="mt-24 md:mt-28">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col gap-16">
                        {articles.map((article) => (
                            <Article key={article.slug} article={article}/>
                        ))}
                    </div>
                    <div className="space-y-10 lg:pl-16 xl:pl-24">
                        {/*<Newsletter/>*/}
                        <Resume />
                    </div>
                </div>
            </Container>
        </>
    )
}

export async function getStaticProps() {
    let articles = (await getAllArticles()).slice(0, 4)

    const data = {
        pageTitle: "Michel Murabito - Developer Advocate and CNCF Ambassador",
        pageDescription: "Welcome to the personal website of Michel Murabito, a Developer Advocate, CNCF Ambassador and KCD Italy organizer. Explore blog, projects, and speaking engagements on platform engineering, cloud native, sustainability and developer community engagement",
        pageLink: "https://michelmurabito.com",
        pageImage: "https://michelmurabito.com/michel-murabito-profile.jpg",
        articles: articles
    };

    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name" : "Michel Murabito WebSite",
        "alternateName" : "Mich's WebSite",
        "url" : "https://michelmurabito.com"
    };

    return {
        props: {
            data,
            schema
        },
    };
}
