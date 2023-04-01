import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
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

  const { id } = useParams();

  const fetchArticle = () => {
    axios.get<ArticleDetailType>(`/articles/${id}`).then((response) => {
      setArticle(response.data);
    });
  };

  const fetchArticles = () => {
    axios.get<{ items: ArticleType[] }>(`/articles`).then((response) => {
      setArticles(response.data.items);
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
          <p data-color-mode="light">
            <MDEditor.Markdown source={article.content} />
          </p>
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
