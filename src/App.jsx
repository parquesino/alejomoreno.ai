import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import AIOProposal from './AIOProposal';
import ExitProposal from './ExitProposal';
import AgencyProposal from './AgencyProposal';
import ColombianPassportCase from './ColombianPassportCase';
import EstrategiaAYR from './EstrategiaAYR'; // Importamos la nueva propuesta
import EstrategiaKalacibi from './EstrategiaKalacibi';
import EstrategiaEncimera from './EstrategiaEncimera';

// Wrapper para hacer scroll al inicio cada vez que cambia la ruta
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
        
        {/* Nueva ruta para la propuesta de AYR */}
        <Route path="/estrategia-ayr" element={<EstrategiaAYR />} />
        <Route path="/estrategia-kalacibi" element={<EstrategiaKalacibi />} />
        <Route path="/estrategia-encimera" element={<EstrategiaEncimera />} />
      </Routes>
    </Router>
  );
}

export default App;
