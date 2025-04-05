import { useNavigate, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks";
import { Container } from ".";
import { JSX, useMemo } from "react";

interface ListAllProps<T> {
  apiUrl: string;
  title: string;
  renderItem: (item: T) => JSX.Element;
}

function ListAll<T extends { slug?: string; title?: string }>({
  apiUrl,
  title,
  renderItem,
}: ListAllProps<T>) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const page = Math.max(parseInt(searchParams.get("page") || "0", 10), 0);
  const size = parseInt(searchParams.get("size") || "12", 10);
  const navigate = useNavigate();

  const { data, loading } = useFetch<T[]>(apiUrl);

  const items: T[] = data ?? [];

  const filteredData = useMemo(() => {
    if (!query) return items;
    return items.filter((item) =>
      item.title?.toLowerCase().includes(query.toLowerCase())
    );
  }, [items, query]);

  const totalPages = Math.ceil(filteredData.length / size);
  const paginatedData = filteredData.slice(page * size, (page + 1) * size);

  const goToPage = (newPage: number) => {
    if (newPage < 0 || newPage >= totalPages) return;
    navigate(
      `?query=${encodeURIComponent(query)}&page=${newPage}&size=${size}`
    );
  };

  return (
    <Container classList="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          {query ? `Results for: "${query}"` : title}
        </h2>
        <p className="text-sm text-gray-600">{filteredData.length} results</p>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : paginatedData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginatedData.map((item) => (
            <div key={item.slug ?? JSON.stringify(item)}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No results found.</p>
      )}

      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page === 0}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="text-sm text-gray-700">
            Page {page + 1} of {totalPages}
          </span>

          <button
            onClick={() => goToPage(page + 1)}
            disabled={page + 1 >= totalPages}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </Container>
  );
}

export default ListAll;
