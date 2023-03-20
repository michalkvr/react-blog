import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import routes from './constants/routes';
import AboutPage from './pages/AboutPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ArticleFormPage from './pages/ArticleFormPage';
import MyArticlesPage from './pages/MyArticlesPage';
import RecentArticlesPage from './pages/RecentArticlesPage';

import './styles/app.scss';

const user = {
  firstName: 'John',
  lastName: 'Doe',
  loggedIn: true,
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout user={user} />}>
        <Route
          index
          path={routes.recentArticles}
          element={<RecentArticlesPage />}
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
