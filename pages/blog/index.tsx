import Link from "next/link";
import { blogPosts } from "../../cache/blogPosts";

export async function getStaticProps() {
  return {
    props: {
      posts: blogPosts,
    },
  };
}

export default function Blog({ posts }: { posts: { oldSlug: string; title: string; url: string }[] }) {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(({ title, url, oldSlug }) => (
          <li key={url}>
            <Link href={`blog/${url}`}>{title}</Link>
            <div>{oldSlug}</div>
            <div>{title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
