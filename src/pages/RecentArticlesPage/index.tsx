import { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleTile from '~/features/articles/components/ArticleTile';
import ArticleType from '~/types/ArticleType';

import styles from './styles.module.scss';

const RecentArticlesPage = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    axios.get<ArticleType[]>('articles').then((response) => {
      setArticles(response.data);
    });
  }, []);

  return (
    <main>
      <section className={styles.recentArticlesPage}>
        <h1 className={styles.title}>Recent articles</h1>
        <div className={styles.wrapper}>
          {articles.map((article) => (
            <ArticleTile key={article.articleId} article={article} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default RecentArticlesPage;
