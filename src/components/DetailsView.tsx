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
  } = post;

  return (
    <Container classList="py-5 max-w-3xl mx-auto">
      <div>
        {cover_image && (
          <figure className="mb-6">
            <img
              src={cover_image || "/placeholder.jpg"}
              alt={title}
              className="w-full h-[400px] object-cover bg-light rounded-2xl shadow"
            />
          </figure>
        )}

        <h1 className="text-3xl font-bold my-6">{title}</h1>

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

      <div>
        <h2 className="text-2xl font-bold mt-8 mb-4">Content</h2>
        <HtmlRenderer htmlContent={post.body_html} />
      </div>
    </Container>
  );
};

export default DetailsView;
