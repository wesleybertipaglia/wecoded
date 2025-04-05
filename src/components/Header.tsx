import Container from "./Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white">
      <Container classList={"py-4 border-b border-b-gray-300"}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:underline">
              <img src="/logo.webp" alt="WECODED 2025" className="h-8" />
            </Link>
          </div>

          <nav className="flex items-center gap-6">
            <Link to="/stories" className="hover:underline">
              Stories
            </Link>
            <Link to="/spotlight" className="hover:underline">
              Spotlight
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
