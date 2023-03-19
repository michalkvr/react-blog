import Comment from './CommentType';

type ArticleDetailType = {
  articleId: string;
  title: string;
  perex: string;
  imageId: string;
  createdAt: string;
  lastUpdatedAt: string;
  content: string;
  comments: Comment[];
};

export default ArticleDetailType;
