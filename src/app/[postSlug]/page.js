import React from 'react';

import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';

import { loadBlogPost } from '@/helpers/file-helpers';
import MDXWrapper from '@/components/MDXWrapper';

const getBlogPost = React.cache( async (slug) => {
  return await loadBlogPost(slug);
});


export async function generateMetadata ({ params }) {
  const { postSlug } = params;
  const blogPost = await getBlogPost(postSlug);
  const { frontmatter, content } = blogPost;

  return {
    title: frontmatter.title,
    description: frontmatter.abstract,
    publishedOn: frontmatter.publishedOn,
  };
}

export default async function BlogPost({ params }) {
  const { postSlug } = params;
  const blogPost = await getBlogPost(postSlug);
  const { frontmatter, content } = blogPost;

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXWrapper content={content} />
      </div>
    </article>
  );
}