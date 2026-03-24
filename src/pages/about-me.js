// pages/about.js
import Head from 'next/head';
import {Container} from "@/components/Container";
import Image from "next/image";

import {GitHubIcon, InstagramIcon, LinkedInIcon, XIcon} from "@/components/SocialIcons";

import profile from "@/data/profile.json";
import portraitImage from '@/images/portrait.jpg'
import {Seo} from "@/components/Seo";
import {MailIcon, SocialLink} from "@/lib/utils";



export default function AboutMe({data, schema}) {
    return (
        <>
            <Seo data={data} schema={schema} />
            <Container className="mt-16 sm:mt-32">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <Image
                                src={portraitImage}
                                alt=""
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                            />
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                            {profile.short_intro}
                        </h1>
                        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                            {
                                profile.long_intro.map((d, i) => {
                                    return <p key={`intro-${i + 1}`}>
                                        {d}
                                    </p>
                                })
                            }
                        </div>
                    </div>
                    <div className="lg:pl-20">
                        <ul role="list">
                            <SocialLink href="https://www.linkedin.com/in/mich-murabito/" icon={LinkedInIcon}
                                        className="mt-4">
                                Follow on LinkedIn
                            </SocialLink>
                            <SocialLink href="https://github.com/akelity" icon={GitHubIcon} className="mt-4">
                                Follow on GitHub
                            </SocialLink>
                            <SocialLink href="https://x.com/michelmurabito" icon={XIcon} className="mt-4">
                                Follow on X
                            </SocialLink>
                            <SocialLink href="https://www.instagram.com/michel_murabito/" icon={InstagramIcon}
                                        className="mt-4">
                                Follow on Instagram
                            </SocialLink>
                            <SocialLink
                                href="mailto:michel@akelity.com"
                                icon={MailIcon}
                                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                            >
                                michel[at]akelity[dot]com
                            </SocialLink>
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    );
}

export async function getStaticProps() {
    const data = {
        "pageTitle": "About Michel Murabito - Developer Advocate and CNCF Ambassador",
        "pageDescription": "Learn more about Michel Murabito, a Developer Advocate at Mia-Platform, CNCF Ambassador and KCD Italy organizer. Discover his expertise in platform engineering, cloud native, sustainability, and developer community engagement.",
        "pageLink": "https://michelmurabito.com/about-me",
        "pageImage": "https://michelmurabito.com/michel_murabito_personal_website.png"
    };

    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "dateCreated": "2024-07-01T12:34:00+02:00",
        "dateModified": "2024-07-18T14:53:00+02:00",
        "mainEntity": {
            "@type": "Person",
            "name": "Michel Murabito",
            "alternateName": "Mich Murabito",
            "description": "Michel Murabito is a passionate Developer Advocate at Mia-Platform, a CNCF Ambassador and a KCD Italy organizer, specializing in Platform Engineering, Cloud Native, Sustainability and developer community engagement. He is actively involved in tech communities, contributing to open-source projects and speaking at conferences worldwide.",
            "image": [
                "https://michelmurabito.com/michel-murabito-profile.jpg"
            ],
            "sameAs": [
                "https://www.linkedin.com/in/mich-murabito",
                "https://github.com/akelity",
                "https://community.cncf.io/u/mwnwvg/",
                "https://www.crunchbase.com/person/michel-murabito",
                "https://sessionize.com/mich/",
                "https://twitter.com/michelmurabito",
                "https://thenewstack.io/author/michelmurabito/",
                "https://devops.com/author/michel-murabito/",
                "https://www.threads.net/@michel_murabito",
                "https://techspective.net/author/mmurabito/",
                "https://sdtimes.com/author/michaelmu/"
            ],
            "familyName": "Murabito",
            "givenName": "Michel",
            "birthDate": "1986-04-27",
            "birthPlace": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Turin, Italy",
                    "postalCode": "10100"
                }
            },
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Milan, Italy",
                "postalCode": "20100",
                "addressCountry": "Italy"
            },
            "jobTitle": "Developer Advocate",
            "worksFor": {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Mia-Platform",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Milan, Italy",
                    "postalCode": "20100",
                    "addressCountry": "Italy"
                }
            },
            "affiliation": [
                {
                    "@type": "Organization",
                    "name": "Cloud Native Computing Foundation"
                },
                {
                    "@type": "Organization",
                    "name": "DevNetwork"
                },
                {
                    "@type": "Organization",
                    "name": "Kubernetes Community Days Italy"
                }
            ],
            "brand": {
                "@type": "Brand",
                "name": "Akelity",
                "url": "https://github.com/Akelity"
            },
            "gender": "Male",
            "nationality": {
                "@type": "Country",
                "name": "Italy"
            },
            "memberOf": [
                {
                    "@type": "Organization",
                    "name": "KCD Italy"
                },
                {
                    "@type": "Organization",
                    "name": "CNCF"
                }
            ],
            "knowsAbout": [
                "Platform Engineering",
                "Cloud-Native",
                "Developer Relations",
                "Developer Experience",
                "Software Development",
                "Cloud Sustainability",
                "Developer Advocacy",
                "Public Speaking",
                "Open Source"
            ]
        }
    }

    return {
        props: {
            data,
            schema
        },
    };
}
