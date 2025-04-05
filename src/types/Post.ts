interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  url: string;
  cover_image?: string;
  user: {
    name: string;
    profile_image: string;
  };
}

export default Post;
