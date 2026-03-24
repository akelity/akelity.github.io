import glob from 'fast-glob';
import path from "path";
import fs from "fs";
import matter from "gray-matter";

async function importArticle(articleFilename) {
  let { article } = await import(`../data/articles/${articleFilename}`)

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles() {
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

  return allPosts.sort((a,b) => new Date(b.metadata.date) - new Date(a.metadata.date))
}
