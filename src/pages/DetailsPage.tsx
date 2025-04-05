import { useParams } from "react-router-dom";
import { Container, DetailsView } from "../components";
import { useFetch } from "../hooks";
import { Post } from "../types";

const DetailsPage = () => {
  const { username, slug } = useParams<{ username: string; slug: string }>();

  const { data: post, loading } = useFetch<Post>(
    `/articles/${username}/${slug}`
  );

  if (!username || !slug) {
    return (
      <Container classList="py-5">
        <p className="text-red-500">Invalid username or slug.</p>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container classList="py-5">
        <p className="text-gray-600">Loading...</p>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container classList="py-5">
        <p className="text-gray-600">Post not found.</p>
      </Container>
    );
  }

  return <DetailsView post={post} />;
};

export default DetailsPage;
