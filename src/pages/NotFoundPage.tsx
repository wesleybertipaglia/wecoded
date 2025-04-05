import { Container } from "../components";
import { useRandomFun } from "../hooks";

const NotFoundPage = () => {
  const { quote, content } = useRandomFun();

  const renderContent = () => {
    switch (content.type) {
      case "ascii":
        return (
          <pre className="text-9xl text-gray-700 whitespace-pre">
            {content.value}
          </pre>
        );
      case "gif":
        return (
          <img
            src={content.value}
            alt="Funny gif"
            className="w-xl h-auto aspect-video object-cover object-center mx-auto shadow"
            loading="eager"
          />
        );
      default:
        return null;
    }
  };

  return (
    <Container classList="text-center py-20">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        404 - Page Not Found
      </h1>

      <p className="text-gray-500 italic text-xl mb-6">"{quote}"</p>

      <div className="mb-8">{renderContent()}</div>

      <a
        href="/spotlight"
        className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Spotlight Stories
      </a>
    </Container>
  );
};

export default NotFoundPage;
