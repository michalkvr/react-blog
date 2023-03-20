import styles from './styles.module.scss';

import cat from '~/assets/cat.png';
import slugify from '~/utils/slugify';

const article = {
  title: 'How to make a cat happy',
  lastUpdatedAt: new Date(),
  perex:
    'Cats are the best pets. They are cute, cuddly and they are always there for you. But how to make a cat happy? Here are some tips. Cats are the best pets. They are cute, cuddly and they are always there for you. But how to make a cat happy? Here are some tips. Cats are the best pets. They are cute, cuddly and they are always there for you. But how to make a cat happy? Here are some tips. Cats are the best pets. They are cute, cuddly and they are always there for you. But how to make a cat happy? Here are some tips.',
  comments: [],
};

const ArticleTile = () => {
  return (
    <article className={styles.articleTile}>
      <div className={styles.wrapper}>
        <img className={styles.img} src={cat} alt="Cat pls" />
        <div className={styles.content}>
          <h2 className={styles.title}>{article.title}</h2>
          <div className={styles.info}>
            <span>Elisabeth Strain</span>
            <span className={styles.dot} />
            <span>{article.lastUpdatedAt.toLocaleDateString()}</span>
          </div>
          <p className={styles.perex}>{article.perex}</p>
          <div className={styles.actions}>
            <a
              className={styles.link}
              href={`articles/${slugify(article.title)}`}
            >
              Read whole article
            </a>
            <div className={styles.comments}>
              {article.comments.length} comments
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleTile;
