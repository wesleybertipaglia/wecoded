import Container from "./Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-20 shadow">
      <Container classList={"py-4 border-b border-b-gray-300"}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:underline">
              <img src="/logo.webp" alt="WECODED 2025" className="h-8" />
            </Link>
          </div>

          <nav className="flex items-center gap-6">
            <Link
              to="/stories"
              className="hover:underline inline-flex items-center gap-2"
            >
              <img
                src="/abstract_2.webp"
                alt="WECODED 2025"
                className="h-8 w-auto aspect-square object-cover object-center rounded-full"
                style={{ backgroundColor: "#4933f1" }}
                loading="lazy"
              />
              <span>Stories</span>
            </Link>
            <Link
              to="/spotlight"
              className="hover:underline inline-flex items-center gap-2"
            >
              <img
                src="/abstract_2.webp"
                alt="WECODED 2025"
                className="h-8 w-auto aspect-square object-cover object-center rounded-full invert border border-gray-500"
                loading="lazy"
              />
              <span>Spotlight</span>
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
