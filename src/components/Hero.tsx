import Container from "./Container";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Container classList="text-center py-20 flex flex-col items-center gap-6 border-b border-gray-200">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Celebrate Every Voice in Tech 🎉
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto h-auto">
          Discover and share inspiring stories from underrepresented voices in
          tech. Powered by real posts from the WeCoded community.
        </p>
        <Link
          to="/#spotlight"
          className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
        >
          See a Story
        </Link>
      </div>
    </Container>
  );
};

export default Hero;
