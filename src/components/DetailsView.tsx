import { Container, HtmlRenderer } from ".";
import { Post } from "../types";

interface DetailsViewProps {
  post: Post;
}

const DetailsView = ({ post }: DetailsViewProps) => {
  const {
    title,
    description,
    cover_image,
    user: { username, name, profile_image },
    body_html,
    tags,
  } = post;

  return (
    <Container classList="py-5 max-w-3xl mx-auto">
      <div className="mb-8 border-b border-gray-200 pb-6">
        {cover_image && (
          <figure className="mb-6">
            <img
              src={cover_image || "/placeholder.jpg"}
              alt={title}
              className="w-full h-[400px] object-cover bg-light rounded-2xl shadow"
            />
          </figure>
        )}

        <h1 className="text-3xl font-bold mt-4 mb-2">{title}</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags && tags.length > 0
            ? tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))
            : ""}
        </div>

        <div className="flex items-center mb-6">
          <img
            src={profile_image || "/user.png"}
            alt={name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <p className="text-gray-700 text-sm">
            By{" "}
            <a
              href={`https://dev.to/${username}`}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          </p>
        </div>

        <p className="text-gray-800 text-base leading-relaxed">{description}</p>
      </div>

      <HtmlRenderer htmlContent={body_html} />
    </Container>
  );
};

export default DetailsView;
