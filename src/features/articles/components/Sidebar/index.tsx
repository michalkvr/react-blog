import ArticleType from '~/types/ArticleType';
import slugify from '~/utils/slugify';

import styles from './styles.module.scss';

type ArticleSidebarProps = {
  articles: ArticleType[];
};

const ArticleSidebar = ({ articles }: ArticleSidebarProps) => {
  return (
    <aside>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Related Articles</h2>
        <div className={styles.content}>
          {articles.map((article) => (
            <a
              key={article.articleId}
              href={`/articles/${slugify(article.title)}`}
              className={styles.item}
            >
              <h3 className={styles.article}>{article.title}</h3>
              <p className={styles.perex}>{article.perex}</p>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ArticleSidebar;
