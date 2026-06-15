const STRAPI_URL = import.meta.env.VITE_STRAPI_API_URL;
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN;

interface BlockItem {
  __component?: string;
  id?: string;
  [key: string]: any;
}

interface StrapiArticle {
  id: number;
  documentId: string;
  title: string;
  description: string;
  blocks?: BlockItem[];
  slug: string;
  createdAt: string;
//   updatedAt: string;
//   publishedAt?: string;
  cover?: {
    id: number;
    url: string;
    alternativeText?: string;
  };
  author?: {
    id: number;
    name: string;
  };
  category?: {
    id: number;
    name: string;
  };
}

interface StrapiResponse<T> {
  data: T[];
  meta?: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

const fetchFromStrapi = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<any> => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (STRAPI_TOKEN) {
    headers.Authorization = `Bearer ${STRAPI_TOKEN}`;
  }

  const response = await fetch(`${STRAPI_URL}/api${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.statusText}`);
  }

  return response.json();
};

export const strapiService = {
  // Fetch all articles
  getAllArticles: async (params?: {
    sort?: string;
    pagination?: {
      page: number;
      pageSize: number;
    };
  }): Promise<StrapiArticle[]> => {
    const queryParams = new URLSearchParams();
    
    if (params?.sort) {
      queryParams.append("sort", params.sort);
    }
    
    if (params?.pagination) {
      queryParams.append("pagination[page]", params.pagination.page.toString());
      queryParams.append(
        "pagination[pageSize]",
        params.pagination.pageSize.toString()
      );
    }

    // Defaultupdatate cover image if available
    queryParams.append("populate", "*");

    const query = queryParams.toString();
    const response: StrapiResponse<StrapiArticle> = await fetchFromStrapi(
      `/articles?${query}`
    );

    return response.data;
  },

  // Fetch latest article
  getLatestArticle: async (): Promise<StrapiArticle | null> => {
    const articles = await strapiService.getAllArticles({
    //   sort: "-publishedAt",
      pagination: { page: 1, pageSize: 1 },
    });

    return articles.length > 0 ? articles[0] : null;
  },

  // Fetch article by slug
  getArticleBySlug: async (slug: string): Promise<StrapiArticle | null> => {
    const response: StrapiResponse<StrapiArticle> = await fetchFromStrapi(
      `/articles?filters[slug][$eq]=${slug}&populate=*`
    );

    return response.data.length > 0 ? response.data[0] : null;
  },

  // Fetch article by ID
  getArticleById: async (id: string): Promise<StrapiArticle | null> => {
    try {
      const response = await fetchFromStrapi(`/articles/${id}?populate=*`);
      return response.data;
    } catch {
      return null;
    }
  },
};
