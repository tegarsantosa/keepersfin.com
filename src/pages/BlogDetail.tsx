import { useParams, useNavigate, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { marked } from "marked";
import { strapiService } from "@/services/strapi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import NotFound from "./NotFound";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: article, isLoading, isError } = useQuery({
   queryKey: ["article", slug],
   queryFn: () => strapiService.getArticleBySlug(slug || ""),
   enabled: !!slug,
});

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getImageUrl = (imagePath?: string) => {
  if (!imagePath) return null;
  if (imagePath.startsWith("http")) return imagePath;
  const strapiUrl = import.meta.env.VITE_STRAPI_API_URL;
  if (imagePath.startsWith("/uploads/")) return `${strapiUrl}${imagePath}`;
  return `${strapiUrl}/uploads/${imagePath}`;
};

  const renderBlock = (block: any) => {
    if (!block) return null;

    switch (block.__component) {
      case "shared.rich-text":
        return (
            <div
            key={block.id}
            className="prose prose-lg prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-blue-600 prose-blockquote:border-blue-500 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded max-w-none mb-6"
            dangerouslySetInnerHTML={{ __html: marked(block.body || "") }}
            />
        );
      case "shared.quote":
        return (
          <blockquote
            key={block.id}
            className="border-l-4 border-blue-500 pl-4 italic text-lg text-gray-700 my-6"
          >
            <p className="mb-2">{block.body}</p>
            {block.title && <cite className="not-italic font-semibold">— {block.title}</cite>}
          </blockquote>
        );
      case "shared.media":
        if (block.file) {
            const fileUrl = getImageUrl(block.file?.url); 
            return (
            <figure key={block.id} className="my-8">
                <img
                src={fileUrl}
                alt={block.file?.alternativeText || "Article image"}
                className="w-full rounded-lg"
                />
            </figure>
            );
        }
        return null;
      case "shared.slider": {
  const files = Array.isArray(block.files) ? block.files : [];

  if (!files.length) return null;

  return (
    <div key={block.id} className="my-8">
      <div className="flex gap-3 overflow-x-auto pb-2">
        {files.map((file: any, idx: number) => (
          <div key={idx} className="flex-shrink-0 rounded-lg overflow-hidden">
            <img
              src={getImageUrl(file.url)}
              alt={file.alternativeText || `Slide ${idx + 1}`}
              className="h-48 w-auto rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
      default:
        return null;
    }
  };

  if (isError || (!isLoading && !article)) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        {isLoading ? (
          <article className="py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Skeleton className="h-10 w-3/4 mb-4" />
              <Skeleton className="h-6 w-1/4 mb-8" />
              <Skeleton className="h-96 w-full mb-8 rounded-lg" />
              <Skeleton className="h-4 w-full mb-3" />
              <Skeleton className="h-4 w-full mb-3" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </article>
        ) : article ? (
          <article className="py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {article.title}
                </h1>
                <div className="flex flex-wrap gap-4 text-gray-600">
                  <time dateTime={article.createdAt}>
                    {formatDate(article.createdAt)}
                  </time>
                  {article.author?.name && <span>By {article.author.name}</span>}
                  {article.category?.name && (
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {article.category.name}
                    </span>
                  )}
                </div>
              </header>

              {article.cover?.url && (
                <div className="relative mb-8 rounded-lg overflow-hidden bg-gray-200 h-96">
                  <img
                    src={getImageUrl(article.cover.url)}
                    alt={article.cover?.alternativeText || article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {article.description && (
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  {article.description}
                </p>
              )}

              {article.blocks && Array.isArray(article.blocks) && (
                <div className="mb-8">
                  {article.blocks.map((block) => renderBlock(block))}
                </div>
              )}

              <div className="border-t pt-8 mt-12">
                <Link to="/blog">
                  <Button>Back to All Articles</Button>
                </Link>
              </div>
            </div>
          </article>
        ) : null}
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
