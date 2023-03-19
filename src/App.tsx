import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import routes from './constants/routes';
import AboutPage from './pages/AboutPage';
import RecentArticlesPage from './pages/RecentArticlesPage';

import './styles/app.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          path={routes.recentArticles}
          element={<RecentArticlesPage />}
        />
        <Route path={routes.about} element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
