import { useEffect } from 'react';
import Tile from '~/features/articles/components/Tile';

import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '~/hooks';
import {
  fetchArticles,
  selectArticles,
} from '~/features/articles/articlesSlice';

const RecentArticlesPage = () => {
  const articles = useAppSelector(selectArticles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <section className={styles.recentArticlesPage}>
      <h1 className={styles.title}>Recent articles</h1>
      <div className={styles.wrapper}>
        {articles.map((article) => (
          <Tile key={article.articleId} article={article} />
        ))}
      </div>
    </section>
  );
};

export default RecentArticlesPage;
