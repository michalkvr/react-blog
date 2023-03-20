import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import routes from './constants/routes';
import AboutPage from './pages/AboutPage';
import CreateArticlePage from './pages/CreateArticlePage';
import MyArticlesPage from './pages/MyArticlesPage';
import RecentArticlesPage from './pages/RecentArticlesPage';

import './styles/app.scss';

const user = {
  firstName: 'John',
  lastName: 'Doe',
  loggedIn: true,
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout user={user} />}>
        <Route
          index
          path={routes.recentArticles}
          element={<RecentArticlesPage />}
        />
        <Route path={routes.about} element={<AboutPage />} />
        <Route path={routes.createArticle} element={<CreateArticlePage />} />
        <Route path={routes.myArticles} element={<MyArticlesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
