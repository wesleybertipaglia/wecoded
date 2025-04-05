import Container from "./Container";

const Footer = () => {
  return (
    <footer>
      <Container classList={"py-6 border-t border-t-gray-300"}>
        <div className="text-center">
          <p className="text-center py-6 text-gray-500">
            Built with 💙 by{" "}
            <a
              target="_blank"
              href="https://wesleybertipaglia.github.io/"
              rel="noopener"
              className="text-blue-500 hover:underline"
            >
              wesleybertipaglia
            </a>{" "}
            for the{" "}
            <a
              href="https://dev.to/t/wecoded"
              target="_blank"
              rel="noopener"
              className="text-blue-500 hover:underline"
            >
              #wecoded
            </a>{" "}
            community on <span className="font-semibold">dev.to</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
