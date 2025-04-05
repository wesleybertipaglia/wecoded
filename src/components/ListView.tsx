import { Link } from "react-router-dom";
import { Post } from "../types";

interface ListViewProps {
  post: Post;
}

const ListView = ({ post }: ListViewProps) => {
  const {
    slug,
    title,
    description,
    user: { username, name, profile_image },
  } = post;

  return (
    <Link
      to={`/stories/${username}/${slug}`}
      className="block bg-white rounded-xl shadow hover:shadow-lg transition p-4"
    >
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600">
        {description.length > 80
          ? `${description.substring(0, 80)}...`
          : description}
      </p>

      <div className="flex items-center mt-4">
        <img
          src={profile_image}
          alt={name}
          className="w-8 h-8 rounded-full mr-2"
          loading="lazy"
        />
        <span className="text-sm text-gray-700">{name}</span>
      </div>
    </Link>
  );
};

export default ListView;
