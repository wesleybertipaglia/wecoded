import { useFetch } from "../hooks";
import { Link } from "react-router-dom";
import { Container } from ".";
import { JSX } from "react";

interface ListGridProps<T> {
  title: string;
  linkToAll: string;
  apiUrl: string;
  renderItem: (item: T) => JSX.Element;
}

function ListGrid<T>({
  title,
  linkToAll,
  apiUrl,
  renderItem,
}: ListGridProps<T>): JSX.Element {
  const { data = [], loading } = useFetch(apiUrl);

  return (
    <Container classList="py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link to={linkToAll} className="text-blue-500 hover:underline">
          View all
        </Link>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : data && data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={index}>{renderItem(item)}</div>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </Container>
  );
}

export default ListGrid;
