import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import { useState } from 'react';
import Register from './pages/Register';

function App() {
  const [modalOpen, setModalOpen] = useState(true);
  const [modalOpen2, setModalOpen2] = useState(false);


  const handleModal = () => {
    setModalOpen(!modalOpen);
  }

  const handleModal2 = () => {

    setModalOpen2(!modalOpen2);
  }
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home modalOpen={modalOpen} setModalOpen={setModalOpen} handleModal={handleModal} />} />
          <Route path="/login" element={<Login/>}
        </Routes>
      </div>
    </Router>

  );
}

export default App;
