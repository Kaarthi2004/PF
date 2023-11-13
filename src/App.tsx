// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Certificate from './pages/Certificate';
import MachineLearning from './pages/ProjectWorks/MachineLearning';
import IoT from './pages/ProjectWorks/IoT';
import CyberSecurity from './pages/ProjectWorks/CyberSecurity';

const App = () => {
  return (
    <div>
      <div>
          <Routes>
            <Route index path="/Home" element={<Home />} />
            <Route path="Contact" element={<Contact />} /> {/* Use 'Projects' with uppercase */}
            <Route path="Certificates" element={ <Certificate/> }/> {/* upload certificate photos with description */}
            <Route path="MachineLearning" element={ <MachineLearning/> } />
            <Route path="IoT" element={ <IoT/> } />
            <Route path="CyberSecurity" element={<CyberSecurity/>} />
          </Routes>
      </div>
    </div>
  );
};

export default App;
