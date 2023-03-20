import slugify from '~/utils/slugify';
import ArticleType from '~/types/ArticleType';

import styles from './styles.module.scss';

import cat from '~/assets/cat.png';

type ArticleTileProps = {
  article: ArticleType;
};

// Notes for Code Reviewer:
// -> in api, there isn't an author, so should be discussed with BE team / api provider
// -> object comming from /articles endpoint doesn't have comments, so "O commennts" are there
//    temporary till discussed with BE team / api provider

const name = 'Elisabeth Strain';
const comments = [];

const ArticleTile = ({ article }: ArticleTileProps) => {
  return (
    <article className={styles.articleTile}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={cat} alt="Cat pls" />
        <div className={styles.content}>
          <h2 className={styles.title}>{article.title}</h2>
          <div className={styles.info}>
            <span>{name}</span>
            <span className={styles.dot} />
            <span>{new Date(article.lastUpdatedAt).toLocaleDateString()}</span>
          </div>
          <p className={styles.perex}>{article.perex}</p>
          <div className={styles.actions}>
            <a
              className={styles.link}
              href={`articles/${slugify(article.title)}`}
            >
              Read whole article
            </a>
            <div className={styles.comments}>{comments.length} comments</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleTile;
