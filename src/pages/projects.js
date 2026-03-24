import Image from 'next/image'

import {Card} from '@/components/Card'
import {SimpleLayout} from '@/components/SimpleLayout'
import logoTagSustainability from '@/images/logos/tag-en-sustainability_logo.svg';
import {Seo} from "@/components/Seo";
import {LinkIcon} from "@/lib/utils";

export default function Projects({data, schema}) {
    return (
        <>
            <Seo data={data} schema={schema} />
            <SimpleLayout
                title="Explore Projects, Activities and Groups I am Proud to Contribute To"
                intro="Discover a variety of projects, activities and groups that I am proud to contribute to. Learn about the initiatives that drive innovation and foster community engagement."
            >
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {data.projects.map((project) => (
                        <Card as="li" key={project.name}>
                            <div
                                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                <Image
                                    src={project.logo}
                                    alt=""
                                    className="h-8 w-8"
                                    unoptimized
                                />
                            </div>
                            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                                <Card.Link href={project.link.href}>{project.name}</Card.Link>
                            </h2>
                            <Card.Description>{project.description}</Card.Description>
                            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                                <LinkIcon className="h-6 w-6 flex-none"/>
                                <span className="ml-2">{project.link.label}</span>
                            </p>
                        </Card>
                    ))}
                </ul>
            </SimpleLayout>
        </>
    )
}

export async function getStaticProps() {
    const data = {
        "pageTitle": "Projects - Michel Murabito",
        "pageDescription": "Explore the projects, groups, and activities that Michel Murabito loves to work on. Discover his passion for platform engineering, cloud native and sustainability.",
        "pageLink": "https://michelmurabito.com/projects",
        "pageImage": "https://michelmurabito.com/michel_murabito_personal_website.png",
        projects: [
            {
                name: 'CNCF TAG Env Sustainability',
                description: 'I am a proud member of the CNCF TAG Environmental Sustainability, dedicated to promoting sustainable practices in the tech industry.',
                link: {
                    href: 'https://tag-env-sustainability.cncf.io/',
                    label: 'tag-env-sustainability.cncf.io'
                },
                logo: logoTagSustainability,
            }
        ],
    }

    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Michel Murabito",
        "image": "https://michelmurabito.com/assets/img/michel-murabito/profile_1.jpeg",
        "jobTitle": "Developer Advocate",
        "worksFor": {
            "@type": "Organization",
            "name": "Mia-Platform",
            "url": "https://www.mia-platform.eu"
        },
        "url": "https://www.michelmurabito.com",
        "description": "I am a Developer Advocate at Mia-Platform and a proud member of the CNCF TAG Environmental Sustainability. I am passionate about platform engineering, cloud native technologies, and sustainability. This page showcases the projects, groups, and activities I love to work on.",
        "knowsAbout": [
            "Platform Engineering",
            "Cloud-Native",
            "Developer Experience",
            "Cloud Sustainability",
            "Open Source",
            "Community Building"
        ],
        "memberOf": [
            {
                "@type": "Organization",
                "name": "GDG Italia"
            },
            {
                "@type": "Organization",
                "name": "Cloud Native Milano"
            }
        ]
    };


    return {
        props: {
            data,
            schema
        }
    };
}
