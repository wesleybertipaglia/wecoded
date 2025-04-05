import Container from "./Container";

const Footer = () => {
  return (
    <footer>
      <Container classList={"py-6 border-t border-t-gray-300"}>
        <div className="text-center">
          <p>
            &copy;
            <a target="_blank" href="https://wesleybertipaglia.github.io/">
              wesleybertipaglia
            </a>
            <span>2025. All rights reserved</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
