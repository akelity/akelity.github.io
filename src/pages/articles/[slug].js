
import { useContext } from 'react'
import { useRouter } from 'next/navigation'

import { AppContext } from '@/components/providers'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import {formatDate, formatStandardDate} from '@/lib/formatDate'
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from 'remark';
import html from 'remark-html';
import {Seo} from "@/components/Seo";

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
                                    className="order-first flex items-center text-base text-zinc-500 dark:text-zinc-400"
                                >
                                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                                    <span className="ml-3">{formatDate(data.article.date)}</span>
                                </time>
                            </header>
                            <Prose className="mt-8" data-mdx-content>
                                <div dangerouslySetInnerHTML={{__html: data.children}}/>
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
    const filePathMD = path.join(process.cwd(), 'src/data/articles/', `${slug}.md`);
    const filePathMDX = path.join(process.cwd(), 'src/data/articles/', `${slug}.mdx`);

    let filePath;
    if (fs.existsSync(filePathMD)) {
        filePath = filePathMD;
    } else if (fs.existsSync(filePathMDX)) {
        filePath = filePathMDX;
    } else {
        return {
            notFoundX: true,
        };
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(content);
    const contentHtml = processedContent.toString();

    const pageData = {
        article: {
            title: data.title,
            date: data.date,
        },
        children: contentHtml,
        "pageTitle": `${data.title} - by Michel Murabito`,
        "pageDescription": `${data.title} - by Michel Murabito`,
        "pageLink": `https://michelmurabito.com/articles/${slug}`,
        "pageImage": "https://michelmurabito.com/michel_murabito_personal_website.png"
    }

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": data.title,
        "datePublished": formatStandardDate(data.date),
        "dateModified": formatStandardDate(data.date),
        "author": [{
            "@type": "Person",
            "name": "Michel Murabito",
            "url": "https://michelmurabito.com/about-me"
        }]
    }

    return {
        props: {
            data: pageData,
            schema
        },
    };

}


export async function getStaticPaths() {
    const postsDirectory = path.join(process.cwd(), 'src/data/articles/');
    const filenames = fs.readdirSync(postsDirectory);

    const allPosts = filenames.map(filename => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');

        const { data, content } = matter(fileContents);
        const slug = filename.replace(/\.md$/, '').replace(/\.mdx$/, '');

        return {
            slug,
            title: data.title,
            excerpt: data.excerpt
        };
    })


    const paths = allPosts.map(post => ({
        params: { slug: post.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}
