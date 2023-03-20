import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ArticleDetailType from '~/types/ArticleDetailType';

const intialValues: ArticleDetailType = {
  articleId: '',
  title: '',
  perex: '',
  imageId: '',
  createdAt: '',
  lastUpdatedAt: '',
  content: '',
  comments: [],
};

const ArticleDetailPage = () => {
  const [article, setArticle] = useState<ArticleDetailType>(intialValues);
  const { slug } = useParams();

  useEffect(() => {
    axios.get<ArticleDetailType>(`articles/${slug}`).then((response) => {
      setArticle(response.data);
    });
  }, []);

  return <main>{article.title}</main>;
};

export default ArticleDetailPage;
