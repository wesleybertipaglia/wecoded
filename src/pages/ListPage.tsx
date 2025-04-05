import { ListView, ListAll } from "../components";
import { Post } from "../types";

const ListPage = () => {
  return (
    <ListAll
      title="Stories"
      apiUrl="/articles?tag=wecoded&per_page=100"
      renderItem={(post: Post) => <ListView key={post.id} post={post} />}
    />
  );
};

export default ListPage;
