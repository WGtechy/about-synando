import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import './App.scss';
import AppTemplatePage from './views/AppTemplatePage';
import Comment from './views/Comment';
import DownloadPage from './views/DownloadPage';
import Features from './views/Features';
import IntroPage from './views/IntroPage';
import LandingPage from './views/LandingPage';
import SocialInteraction from './views/SocialInteraction';

function App() {
  return (
  <Routes>
    <Route path ='/' element={<LandingPage />} />
  </Routes>
  );
}

export default App;
