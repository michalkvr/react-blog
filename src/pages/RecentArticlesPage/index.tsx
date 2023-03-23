import { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleTile from '~/features/articles/components/ArticleTile';
import ArticleType from '~/types/ArticleType';

import styles from './styles.module.scss';

const RecentArticlesPage = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  const fetchArticles = () => {
    axios.get<ArticleType[]>('articles').then((response) => {
      setArticles(response.data);
    });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <section className={styles.recentArticlesPage}>
      <h1 className={styles.title}>Recent articles</h1>
      <div className={styles.wrapper}>
        {articles.map((article) => (
          <ArticleTile key={article.articleId} article={article} />
        ))}
      </div>
    </section>
  );
};

export default RecentArticlesPage;
