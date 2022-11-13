import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import { useState } from 'react';
import Register from './pages/Register';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
      setModalOpen(!modalOpen);
  }
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
