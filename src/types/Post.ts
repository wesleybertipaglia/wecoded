interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  url: string;
  cover_image?: string;
  user: {
    username: string;
    github_username: string;
    name: string;
    profile_image: string;
  };
  tags: string[];
  body_html: string;
}

export default Post;
