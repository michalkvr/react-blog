import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ListOfComments from '~/features/articles/components/ListOfComments';
import { getImageUrl } from '~/utils/api';

import styles from './styles.module.scss';
import ArticleSidebar from '~/features/articles/components/Sidebar';
import {
  fetchArticleById,
  fetchArticles,
  selectArticles,
  selectCurrentArticle,
} from '~/features/articles/articlesSlice';
import { useAppSelector, useAppDispatch } from '~/hooks';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const article = useAppSelector(selectCurrentArticle);
  const articles = useAppSelector(selectArticles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id));
    }
    dispatch(fetchArticles());
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
            <span>
              {article.lastUpdatedAt &&
                new Date(article.lastUpdatedAt).toLocaleDateString()}
            </span>
          </div>
          <img
            className="img"
            src={article.imageId && getImageUrl(article.imageId)}
            alt=""
          />
          <p>{article.content}</p>
          <ListOfComments comments={article.comments ?? []} />
        </div>
        <ArticleSidebar
          articles={articles.filter(
            (item) => article.articleId !== item.articleId
          )}
        />
      </div>
    </section>
  );
};

export default ArticleDetailPage;
