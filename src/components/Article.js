import {Card} from "@/components/Card";
import {formatDate} from "@/lib/formatDate";

function Article({ article }) {
    return (
        <article className="md:grid md:grid-cols-4 md:items-baseline">
            <Card className="md:col-span-3">
                <Card.Title href={`/articles/${article.slug}`}>
                    {article.metadata.title}
                </Card.Title>
                <Card.Eyebrow
                    as="time"
                    dateTime={article.metadata.date}
                    className="md:hidden"
                    decorate
                >
                    {formatDate(article.metadata.date)}
                </Card.Eyebrow>
                <Card.Description>{article.metadata.description}</Card.Description>
                <Card.Cta>Read article</Card.Cta>
            </Card>
            <Card.Eyebrow
                as="time"
                dateTime={article.metadata.date}
                className="mt-1 hidden md:block"
            >
                {formatDate(article.metadata.date)}
            </Card.Eyebrow>
        </article>
    )
}

export default Article;