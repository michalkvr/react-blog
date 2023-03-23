import Comment from './CommentType';

type ArticleDetailType = {
  articleId?: string;
  title: string;
  perex: string;
  imageId?: string;
  content: string;
  createdAt?: string;
  lastUpdatedAt?: string;
  comments?: Comment[];
};

export default ArticleDetailType;
