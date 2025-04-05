import { Link } from "react-router-dom";
import { Container } from "../components";

const NotFoundPage = () => {
  return (
    <Container classList={"py-5"}>
      <h1>404 - Page Not Found</h1>
      <p>
        The page you are trying to access does not exist. Please go back to the{" "}
        <Link to="/" className="underline text-blue-600">
          home page
        </Link>
        .
      </p>
    </Container>
  );
};

export default NotFoundPage;
