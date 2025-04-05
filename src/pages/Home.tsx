import { Container, Hero, ListGrid, ListView } from "../components";
import { Post } from "../types";

const Home = () => {
  return (
    <>
      <Hero />

      <Container classList="py-5">
        <ListGrid
          title="Stories"
          linkToAll="/stories"
          apiUrl="/articles?tag=wecoded&page=1&per_page=12&top=10"
          renderItem={(post: Post) => <ListView key={post.id} post={post} />}
        />
      </Container>
    </>
  );
};

export default Home;
