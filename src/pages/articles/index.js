import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_PER_PAGE = 10;

import { SimpleLayout } from '@/components/SimpleLayout'
import {Seo} from "@/components/Seo";
import Article from "@/components/Article";

export default function ArticlesIndex({data, schema}) {
    return (
        <>
            <Seo data={data} schema={schema} />
            <SimpleLayout
                title="Writing on Community, Platform Engineering, Developer Experience and Cloud Native."
                intro="All of my long-form thoughts on communities, programming, leadership, product design and much more. Collected in chronological order."
            >
                <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                    <div className="flex max-w-3xl flex-col space-y-16">
                        {data.articles.map((article) => (
                            <Article key={article.slug} article={article} />
                        ))}
                    </div>
                </div>
            </SimpleLayout>
        </>
    )
}



export async function getStaticProps() {
    const postsDirectory = path.join(process.cwd(), 'src/data/articles/');
    const filenames = fs.readdirSync(postsDirectory);

    const allPosts = filenames.map(filename => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');

        const { data, content } = matter(fileContents);
        const slug = filename.replace(/\.md$/, '').replace(/\.mdx$/, '');

        return {
            slug,
            content,
            metadata: data
        };
    });

    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
    const posts = allPosts
        .sort((a,b) => new Date(b.metadata.date) - new Date(a.metadata.date))
        .slice(0, POSTS_PER_PAGE);

    const pageData = {
        "pageTitle": "Blog Articles by Michel Murabito",
        "pageDescription": "Explore a collection of blog articles written by Michel Murabito, sharing insights, experiences, and knowledge on various topics. Dive into the world of platform engineering, cloud-native technologies, and more.",
        "pageLink": "http://michelmurabito.com/articles",
        "pageImage": "https://michelmurabito.com/michel_murabito_personal_website.png",
        articles: posts,
        totalPages,
    }

    const schema = null

    return {
        props: {
            data: pageData,
            schema
        },
    };
}
