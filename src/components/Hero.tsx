import Container from "./Container";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: "url('/background.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/30 z-0" />

      <Container classList="relative z-10 text-center py-32 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto text-gray-100">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
            Celebrate Every Voice in Tech 🎉
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-200 max-w-2xl drop-shadow-sm">
            Discover and share inspiring stories from underrepresented voices in
            tech. Powered by real posts from the WeCoded community.
          </p>
          <Link
            to="/spotlight"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-200"
          >
            Spotlight Stories
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
