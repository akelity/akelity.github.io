import path from "path";
import fs from "fs";
import matter from "gray-matter";

const getResource = (basePath, filename) => {
    const filePath = path.join(process.cwd(), basePath, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');

    const { data, content } = matter(fileContents);
    const slug = filename.replace(/\.md$/, '').replace(/\.mdx$/, '');

    return {
        slug,
        content,
        metadata: data
    };
}

const getResources = (directory, POSTS_PER_PAGE) => {
    const directoryPath = path.join(process.cwd(), directory);
    const filenames = fs.readdirSync(directoryPath);


    const allResources = filenames.map(filename => {
        const filePath = path.join(directoryPath, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');

        const { data, content } = matter(fileContents);
        const slug = filename.replace(/\.md$/, '').replace(/\.mdx$/, '');

        return {
            slug,
            content,
            metadata: data
        };
    });

    const totalPages = Math.ceil(allResources.length / POSTS_PER_PAGE);

    const resources = allResources.map(e => {
        return {
            slug: e.slug,
            metadata: e.metadata,
            content: e.content
        }
    })
        .sort((a,b) => new Date(b.metadata.startDate) - new Date(a.metadata.startDate))
        .slice(0, POSTS_PER_PAGE);

    return {
        resources,
        totalPages
    }
}

export {
    getResource,
    getResources
};