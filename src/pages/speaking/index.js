import {SimpleLayout} from '@/components/SimpleLayout'
import {Seo} from "@/components/Seo";
import SpeakerSection from "@/components/SpeakerSection";
import {getResources} from "@/lib/markdown";

const POSTS_PER_PAGE = 2000;



export default function Speaking({data, schema}) {
    return (
        <>
            <Seo data={data} schema={schema} />
            <SimpleLayout
                title="Speaking Engagements: Events, Videos and Podcasts"
                intro="Explore a comprehensive collection of events, videos, and podcasts where I have shared my knowledge and insights. Dive into my speaking engagements and discover the topics I am passionate about."
            >
                <div className="space-y-20">
                    <SpeakerSection title="Talks" cta="" basePath="/speaking" events={data.events.resources} />
                </div>
            </SimpleLayout>
        </>
    )
}


export async function getStaticProps() {
    /*
    const getResourcess = (directory) => {
        const eventsDirectory = path.join(process.cwd(), directory);
        const filenames = fs.readdirSync(eventsDirectory);

        const allResources = filenames.map(filename => {
            const filePath = path.join(eventsDirectory, filename);
            return {
                path: filePath,
                filename: filename,
                data: fs.readFileSync(filePath, 'utf8')
            }
        });

        const totalPages = Math.ceil(allResources.length / POSTS_PER_PAGE);
        const resources = allResources
            .map(e => {

                const raw = JSON.parse(e.data);

                switch(raw['@type']) {
                    case 'Event':
                        const locality = raw.eventAttendanceMode === "OnlineEventAttendanceMode" ? "Online" : raw.location.address.addressLocality + ", " + raw.location.address.addressCountry
                        return {
                            raw,
                            href: "speaking/"+e.filename.replace('.json', ''),
                            title: raw.workPerformed.map(d => d.name).join("<br />"),
                            description: locality,
                            event: raw.name,
                            date: formatDate(raw.startDate),
                            cta: "",
                        };
                        break;
                    case 'Article':
                        return {
                            raw,
                            href: raw.publisher.url,
                            title: raw.headline,
                            description: raw.description,
                            event: raw.publisher.name,
                            date: formatYear(raw.datePublished + "-01-01"),
                            cta: "You can read it here",
                        };
                        break;
                    default:
                        return null
                }


            })
            .sort((a,b) => new Date(b.date) - new Date(a.date))
            .slice(0, POSTS_PER_PAGE);

        return {resources, totalPages}
    }
    */
    const events = getResources('src/data/speaking/', POSTS_PER_PAGE);

    const data = {
        "pageTitle": "Talks and Articles by Michel Murabito",
        "pageDescription": "Discover a collection of articles and talks by Michel Murabito",
        "pageLink": "https://michelmurabito.com/articles",
        "pageImage": "https://michelmurabito.com/michel_murabito_personal_website.png",
        events: events
    }
    const schema = null

    return {
        props: {
            data,
            schema
        },
    };
}
