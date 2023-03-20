import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import routes from './constants/routes';
import AboutPage from './pages/AboutPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ArticleFormPage from './pages/ArticleFormPage';
import MyArticlesPage from './pages/MyArticlesPage';
import RecentArticlesPage from './pages/RecentArticlesPage';

import './styles/app.scss';
import UserType from './types/UserType';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';

export const initialUserValues = {
  firstName: '',
  lastName: '',
  loggedIn: false,
};

// Axios setup - should be moved to a separate file
axios.defaults.baseURL = import.meta.env.VITE_SERVER_API;
axios.defaults.headers.common['X-API-KEY'] = import.meta.env.VITE_X_API_KEY;
axios.defaults.headers.common.Authorization =
  localStorage.getItem('access_token');

const App = () => {
  const [user, setUser] = useState<UserType>(initialUserValues);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      // some logic to get name
      setUser({ ...user, loggedIn: true });
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout user={user} />}>
        <Route
          index
          path={routes.recentArticles}
          element={<RecentArticlesPage />}
        />
        <Route
          path={routes.login}
          element={<LoginPage user={user} setUser={setUser} />}
        />
        <Route
          path={routes.logout}
          element={<LogoutPage setUser={setUser} />}
        />
        <Route path={routes.about} element={<AboutPage />} />
        <Route path={routes.articleForm} element={<ArticleFormPage />} />
        <Route path={routes.myArticles} element={<MyArticlesPage />} />
        <Route path={routes.articleDetail} element={<ArticleDetailPage />} />
      </Route>
    </Routes>
  );
};

export default App;
