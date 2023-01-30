import { Route, Routes } from 'react-router';
import './App.scss';
import LandingPage from './views/LandingPage';
import PrivacyPolicy from './views/PrivacyPolicy';
import TermsAndConditions from './views/TermsAndConditions';

function App() {
  return (
  <Routes>
    <Route path ='/' element={<LandingPage />} />
    <Route path ='/privacy-policy' element={<PrivacyPolicy />} />
    <Route path ='/terms-and-conditions' element={<TermsAndConditions />} />
  </Routes>
  );
}

export default App;
