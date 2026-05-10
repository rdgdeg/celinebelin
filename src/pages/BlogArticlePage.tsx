import { useEffect } from "react";
import { Navigate, useParams } from "react-router";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getBlogPost } from "@/data/blogPosts";
import { articleBodies } from "@/content/blog/registry";

const SITE_TITLE = "Céline Belin — Psychologue & Bien-Être";
const DEFAULT_DESCRIPTION =
  "Céline Belin, psychologue agréée et coach de vie à Silly, Mons, Péruwelz et Bernissart. Psychothérapie (TCC, ACT), hypnose, EMDR, coaching, soins énergétiques pour animaux.";

export default function BlogArticlePage() {
  const { slug } = useParams();
  const meta = getBlogPost(slug);
  const Body = slug ? articleBodies[slug] : undefined;

  useEffect(() => {
    if (!meta) return;
    const prevTitle = document.title;
    const metaEl = document.querySelector('meta[name="description"]');
    const prevDesc = metaEl?.getAttribute("content") ?? "";

    document.title = `${meta.title} | Blog — Céline Belin`;
    if (metaEl) metaEl.setAttribute("content", meta.metaDescription);

    return () => {
      document.title = prevTitle || SITE_TITLE;
      if (metaEl) metaEl.setAttribute("content", prevDesc || DEFAULT_DESCRIPTION);
    };
  }, [meta]);

  if (!meta || !Body) {
    return <Navigate to="/" replace />;
  }

  return (
    <BlogArticleLayout meta={meta}>
      <Body />
    </BlogArticleLayout>
  );
}
