import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { strapiService } from "@/services/strapi";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const BlogSection = () => {
  const { data: articles = [], isLoading } = useQuery({
    queryKey: ["articles", "homepage"],
    queryFn: () =>
      strapiService.getAllArticles({
        pagination: { page: 1, pageSize: 3 },
      }),
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
    return `${strapiUrl}${imagePath}`;
  };

  const placeholderImage =
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=300&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  if (isLoading) {
    return (
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-64 rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (articles.length === 0) {
    return null;
  }
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Articles</h2>
            <p className="text-gray-600">Stay updated with our latest insights</p>
          </div>
          <Link to="/blog">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => {
            const imageUrl =
              getImageUrl(article.cover?.url) || placeholderImage;

            return (
              <Link
                key={article.documentId}
                to={`/blog/${article.slug}`}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={imageUrl}
                      alt={article.cover?.alternativeText || article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <CardDescription className="text-sm mb-2">
                      {formatDate(article.createdAt)}
                    </CardDescription>
                    <CardTitle className="line-clamp-2 mb-2">
                      {article.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {article.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
