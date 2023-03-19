import Comment from './Comment';

type Article = {
  articleId: string;
  title: string;
  perex: string;
  imageId: string;
  createdAt: string;
  lastUpdatedAt: string;
  content: string;
  comments: Comment[];
};

export default Article;
