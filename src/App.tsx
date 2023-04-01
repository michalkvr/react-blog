import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import routes from './constants/routes';
import AboutPage from './pages/AboutPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ArticleFormPage from './pages/ArticleFormPage';
import MyArticlesPage from './pages/MyArticlesPage';
import RecentArticlesPage from './pages/RecentArticlesPage';

import './styles/app.scss';
import LoginPage from './pages/LoginPage';
import { initAxios } from './utils/api';
import { useAppDispatch } from './hooks';
import { setUser, UserSliceType } from './features/user/userSlice';
import storage from './utils/storage';

initAxios();

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = storage.retrieveUser() as UserSliceType;
    if (user) dispatch(setUser(user));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          path={routes.recentArticles}
          element={<RecentArticlesPage />}
        />
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.about} element={<AboutPage />} />
        <Route path={routes.createArticle} element={<ArticleFormPage />} />
        <Route path={routes.myArticles} element={<MyArticlesPage />} />
        <Route path={routes.articleDetail} element={<ArticleDetailPage />} />
      </Route>
    </Routes>
  );
};

export default App;
