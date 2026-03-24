
import { useContext } from 'react'
import { useRouter } from 'next/navigation'

import { AppContext } from '@/components/providers'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import {formatDate, formatYear} from '@/lib/formatDate'
import path from "path";
import fs from "fs";
import {Seo} from "@/components/Seo";
import Image from "next/image";
import {getResource, getResources} from "@/lib/markdown";
import {convertLocation, extractVideoId} from "@/lib/utils";
import {remark} from "remark";
import html from "remark-html";

function ArrowLeftIcon(props) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default function ArticleLayout({ data, schema }) {
    let router = useRouter()
    let { previousPathname } = useContext(AppContext)

    return (
        <>
            <Seo data={data} schema={schema} />
            <Container className="mt-16 lg:mt-32">
                <div className="xl:relative">
                    <div className="mx-auto max-w-2xl">
                        {previousPathname && (
                            <button
                                type="button"
                                onClick={() => router.back()}
                                aria-label="Go back to articles"
                                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
                            >
                                <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
                            </button>
                        )}
                        <article>
                            <header className="flex flex-col">
                                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                                    {data.article.title}
                                </h1>
                                <time
                                    dateTime={data.article.date}
                                    className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                                >
                                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                                    <span className="ml-3">{formatDate(data.article.date)}</span>
                                </time>
                            </header>
                            <Prose className="mt-8" data-mdx-content>
                                {data.article.image && data.article.image !== "" && (
                                    <Image
                                        src={data.article.image}
                                        alt={`Michel Murabito at ${data.article.title}`}
                                        width={400}  // Specifica la larghezza dell'immagine
                                        height={400} // Specifica l'altezza dell'immagine
                                        sizes="(min-width: 1024px) 32rem, 20rem"
                                        className="max-w-[600px] w-full h-auto rounded-2xl bg-zinc-100 object-contain dark:bg-zinc-800"
                                    />
                                )}
                                <div dangerouslySetInnerHTML={{__html: data.children}}/>
                                {data.article.contentUrl && data.article.contentUrl !== "" && (
                                    <iframe
                                        height="515"
                                        src={`https://www.youtube.com/embed/${extractVideoId(data.article.contentUrl)}`}
                                        title={data.article.title}
                                        className="max-w-[600px] w-full h-[350px] rounded-2xl bg-zinc-100 object-contain dark:bg-zinc-800"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>


                                )}
                            </Prose>
                        </article>
                    </div>
                </div>
            </Container>
        </>
    )
}


export async function getStaticProps({ params }) {
    const { slug } = params;
    const filePath = path.join('src/data/speaking/', `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return {
            notFound: true,
        };
    }

    const data = getResource('src/data/speaking/', `${slug}.mdx`);

    const processedContent = await remark()
        .use(html)
        .process(data.content);

    const pageData = {
        "pageTitle": `${data.metadata.event} ${formatYear(data.metadata.startDate)} - Michel Murabito`,
        "pageDescription": `Michel Murabito talk's: ${data.metadata.performanceName}`,
        "pageLink": `https://michelmurabito.com/speaking/${slug}`,
        "pageImage": data.metadata.image,
        children: processedContent.toString(),
        article: {
            title: data.metadata.event + " " + formatYear(data.metadata.startDate),
            date: data.metadata.startDate,
            image: data.metadata.image,
            contentUrl: data.metadata.contentUrl
        },
    }
    /*
    const schema = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name":  data.metadata.event + " " + formatYear(data.metadata.startDate),
        "startDate": data.metadata.startDate,
        "endDate": data.metadata.endDate,
        "eventAttendanceMode": data.metadata.eventAttendanceMode,
        "location": convertLocation(data.metadata),
        "image": data.metadata.image,
        "description": `At ${data.metadata.event} ${formatYear(data.metadata.startDate)}, Michel Murabito delivered an insightful talk on ${data.metadata.performanceName}`,
        "performer": {
            "@type": "Person",
            "name": "Michel Murabito",
            "url": "https://michelmurabito.com/about-me"
        },
        "organizer": {
            "@type": data.metadata.organizerType,
            "name": data.metadata.organizer,
            "url": data.metadata.organizerUrl
        }
    */

    const schema = {};



    return {
        props: {
            data: pageData,
            schema
        },
    };
}


export async function getStaticPaths() {
    const { resources } = getResources('src/data/speaking/', 200000);
    const paths = resources.map(resource => {
        return {
            params: {
                slug: resource.slug
            }
        };
    });

    return {
        paths,
        fallback: false,
    };
}
