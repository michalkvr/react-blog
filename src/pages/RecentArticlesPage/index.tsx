import ArticleTile from '~/features/articles/components/ArticleTile';

import styles from './styles.module.scss';

const RecentArticlesPage = () => {
  return (
    <main>
      <section className={styles.recentArticlesPage}>
        <h1 className={styles.title}>Recent articles</h1>
        <div className={styles.wrapper}>
          <ArticleTile />
        </div>
      </section>
    </main>
  );
};

export default RecentArticlesPage;
