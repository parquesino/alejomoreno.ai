import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import AIOProposal from './AIOProposal';
import ExitProposal from './ExitProposal';
import AgencyProposal from './AgencyProposal';
import ColombianPassportCase from './ColombianPassportCase';

// Wrapper para usar el hook useLocation dentro del Router y hacer scroll arriba
const ScrollToTopWrapper = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTopWrapper />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propuesta-aio" element={<AIOProposal />} />
        <Route path="/mentoria-exit" element={<ExitProposal />} />
        <Route path="/fractional-ai" element={<AgencyProposal />} />
        <Route path="/caso-colombian-passport" element={<ColombianPassportCase />} />
      </Routes>
    </Router>
  );
}

export default App;
