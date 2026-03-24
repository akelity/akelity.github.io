import {Card} from "@/components/Card";
import {formatDate} from "@/lib/formatDate";

function SpeakerCard({title, description, event, cta, href, date}) {
    return (
        <Card as="article">
            <Card.Title as="h3" href={href}>
               {title}
            </Card.Title>
            <Card.Eyebrow>
                {event} - {date}
            </Card.Eyebrow>
            {description !== "" ? <Card.Description>{description}</Card.Description> : ''}
            {cta !== "" ? <Card.Cta>{cta}</Card.Cta> : ''}
        </Card>
    )
}


export default SpeakerCard;