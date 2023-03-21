import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ArticleDetailType from '~/types/ArticleDetailType';

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
  const { slug } = useParams();

  useEffect(() => {
    axios.get<ArticleDetailType>(`articles/${slug}`).then((response) => {
      setArticle(response.data);
    });
  }, []);

  return (
    <section>
      <h1>Example fetch</h1>
      {/* Placholder for json fetch preview */}
      <pre>{JSON.stringify(article, undefined, 2)}</pre>
      <br />
      <a
        href="https://github.com/michalkvr/react-blog-legacy/blob/dev/src/pages/article/article.component.tsx"
        target="_blank"
        rel="noreferrer"
      >
        Code I wrote for this app few months ago
      </a>
    </section>
  );
};

export default ArticleDetailPage;
