import Container from "./Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white">
      <Container classList={"py-4 border-b border-b-gray-300"}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:underline">
              WECODED 2025
            </Link>

            <Link to="/stories" className="hover:underline">
              Stories
            </Link>

            <Link to="/spotlight" className="hover:underline">
              Spotlight
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
