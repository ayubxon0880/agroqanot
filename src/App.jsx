import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { PUBLIC_ROUTES } from './env';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div>
        <Routes>
          {isAuthenticated && (
            <>
              {
                PUBLIC_ROUTES.map(item => (
                  <Route key={item.path} path={item.path} element={item.element} />
                ))
              }
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </div>
      <Footer/>
    </div>
  </Router>
  
  );
}

export default App;
