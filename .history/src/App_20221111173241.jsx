import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import { useState } from 'react';
import Register from './pages/Register';

function App() {
  const [loginModalOpen, setModalOpen] = useState(false);
  const handleLoginModal = () => {
      setModalOpen(!modalOpen);
  }
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home modalOpen={modalOpen} setModalOpen={setModalOpen} handleModal={handleModal} />} />
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
