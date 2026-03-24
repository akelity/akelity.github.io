import {Section} from "@/components/Section";
import SpeakerCard from "@/components/SpeakerCard";
import {formatDate} from "@/lib/formatDate";
import {convertLocation} from "@/lib/utils";

function SpeakingSection({children, ...props}) {
    return (
        <Section {...props}>
            <div className="space-y-16">
                {
                    props.events.map((d, i) => {
                        return <SpeakerCard
                            key={`talk-${i}`}
                            href={`${props.basePath}/${d.slug}`}
                            title={d.metadata.performanceName}
                            description={convertLocation(d.metadata)}
                            event={`${d.metadata.event}`}
                            date={`${formatDate(d.metadata.startDate)}`}
                            cta={props.cta}
                        />
                    })
                }
            </div>
        </Section>
    )
}

export default SpeakingSection;