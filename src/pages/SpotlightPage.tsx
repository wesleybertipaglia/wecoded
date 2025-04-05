import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../components";
import { useRandomPost } from "../hooks";

const SpotlightPage = () => {
  const { path, loading } = useRandomPost();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && path) {
      navigate(path);
    }
  }, [loading, path, navigate]);

  return (
    <Container classList="py-5">
      <p className="text-gray-600">Finding something awesome for you...</p>
    </Container>
  );
};

export default SpotlightPage;
