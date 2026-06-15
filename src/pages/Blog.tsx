import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { strapiService } from "@/services/strapi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const { data: articles = [], isLoading } = useQuery({
    queryKey: ["articles", currentPage],
    queryFn: () =>
      strapiService.getAllArticles({
        // sort: "-updatedAt",
        pagination: { page: currentPage, pageSize },
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
    "https://images.unsplash.com/photo-1516321318423-f06e28ca7dba?w=500&h=300&fit=crop";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="py-12 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-gray-600">
              Insights and articles about finance, business, and growth
            </p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <Skeleton className="h-48 w-full" />
                    <CardContent className="p-6">
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-full mb-4" />
                      <Skeleton className="h-4 w-5/6" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : articles.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">No articles found</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                              {formatDate(article.updatedAt || article.createdAt)}
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

                {/* Simple Pagination */}
                <div className="flex justify-center gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <Button variant="outline" disabled>
                    Page {currentPage}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={articles.length < pageSize}
                  >
                    Next
                  </Button>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
