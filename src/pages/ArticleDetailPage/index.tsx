import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ArticleDetailType from '~/types/ArticleDetailType';
import ListOfComments from '~/features/articles/components/ListOfComments';
import { getImageUrl } from '~/utils/api';

import styles from './styles.module.scss';
import ArticleType from '~/types/ArticleType';
import ArticleSidebar from '~/features/articles/components/Sidebar';

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
  const [articles, setArticles] = useState<ArticleType[]>([]);

  const { slug } = useParams();

  const fetchArticle = () => {
    axios.get<ArticleDetailType>(`/articles/${slug}`).then((response) => {
      setArticle(response.data);
    });
  };

  const fetchArticles = () => {
    axios.get<ArticleType[]>(`/articles`).then((response) => {
      setArticles(response.data);
    });
  };

  useEffect(() => {
    fetchArticle();
    fetchArticles();
  }, []);

  return (
    <section className="article">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>{article.title}</h1>
          <div className={styles.info}>
            {/* Author is not passed in response */}
            <span>Michal Kovar</span>

            <span className={styles.dot} />
            <span>{new Date(article.lastUpdatedAt).toLocaleDateString()}</span>
          </div>
          <img
            className="img"
            src={article.imageId ?? getImageUrl(article.imageId)}
            alt=""
          />
          <p>{article.content}</p>
          <ListOfComments comments={article.comments} />
        </div>
        <ArticleSidebar articles={articles} />
      </div>
    </section>
  );
};

export default ArticleDetailPage;
