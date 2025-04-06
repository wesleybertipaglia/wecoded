import { ArrowCircleUpRight } from "@phosphor-icons/react";
import { Container, HtmlRenderer } from ".";
import { Post } from "../types";
import Share from "./Share";

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
    <Container classList="py-6 max-w-3xl mx-auto">
      <div className="border-b border-gray-200 flex flex-col gap-4 pb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Spotlight</h2>
          <a href="/stories" className="text-blue-500 hover:underline text-sm">
            See all stories
          </a>
        </div>

        {cover_image && (
          <figure>
            <img
              src={cover_image || "/placeholder.jpg"}
              alt={title}
              className="w-full h-[400px] object-cover bg-light rounded-2xl shadow"
              loading="lazy"
            />
          </figure>
        )}

        <div className="flex items-center">
          <img
            src={profile_image || "/user.png"}
            alt={name}
            className="w-10 h-10 rounded-full mr-2"
            loading="lazy"
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

        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-800 text-base leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags && tags.length > 0
            ? tags.map((tag) => (
                <a
                  key={tag}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                  href={`https://dev.to/t/${tag}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tag}
                </a>
              ))
            : ""}
        </div>

        <a
          href={`https://dev.to/${username}/${post.slug}`}
          className="hover:text-blue-500 hover:underline inline-flex items-center gap-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the Original Post on Dev.to
          <ArrowCircleUpRight />
        </a>
      </div>

      <div className="my-4">
        <Share title={title} description={description} />
      </div>

      <HtmlRenderer htmlContent={body_html} />
    </Container>
  );
};

export default DetailsView;
