
import './App.css'
import Home from './Home'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TermsOfService from './TermsOfService';
import Policy from './Policy';
import Support from './Support';


function App() {
  return (
    <div className="app">
      <Router>  {/* ✅ Wrap everything inside Router */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/support" element={<Support />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
