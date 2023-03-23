import MDEditor from '@uiw/react-md-editor';
import axios, { AxiosResponse } from 'axios';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '~/features/ui/components/Button';
import ImageInput from '~/features/ui/components/ImageInput';
import Input from '~/features/ui/components/Input';
import ArticleDetailType from '~/types/ArticleDetailType';

import styles from './styles.module.scss';
import routes from '~/constants/routes';
import showAlert from '~/utils/swal';

const initialValues: ArticleDetailType = {
  title: '',
  perex: '',
  content: '',
};

const ArticleFormPage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<ArticleDetailType>(initialValues);
  const navigate = useNavigate();

  const fetchArticle = async () => {
    axios
      .get<ArticleDetailType>(`/articles/${id}`)
      .then((response: AxiosResponse) => {
        setArticle(response.data);
      });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Image should be posted first then saved into article element
    // setArticle({
    //   ...article,
    //   imageId: 'newly created image id',
    // });

    // Should be error checked, only 401 and 404 is handled in axios middleware

    axios
      .post<ArticleDetailType>(`/articles`, JSON.stringify(article), {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then((response) => {
        showAlert('Article successfully created', 'success');
        navigate(`${routes.articles}/${response.data.articleId}`);
      });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [event.target.name]: event.target.value,
    });
  };

  // Change handler for MD Editor
  const handleContentChange = (value?: string) => {
    setArticle({
      ...article,
      content: value || '',
    });
  };

  useEffect(() => {
    if (id) fetchArticle();
  }, []);

  return (
    <section>
      <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              {id ? 'Edit article' : 'Create new article'}
            </h1>
            <Button type="submit">Publish Article</Button>
          </div>
          <Input
            required
            id="title"
            label="Article title"
            placeholder="My First Article"
            variant="large"
            value={article.title}
            onChange={handleChange}
          />

          {/* 
            Image Input below should have handle change aswell and id of newly created image
            should be saved in article.imageId

            If old image exists it should be deleted from the server on submit

            I will save a bit of time and won't implement this feature although it's
            not complicated at all.
          */}
          <ImageInput id="image" label="Featured image" value="" />

          <MDEditor
            value={article.content}
            onChange={handleContentChange}
            placeholder="Supports markdown. Yay!"
            style={{ width: '100%' }}
          />
        </form>
      </div>
    </section>
  );
};

export default ArticleFormPage;
