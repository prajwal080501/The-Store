import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import { useState } from 'react';
import Register from './pages/Register';
import Navbar from './components/Navbar/Navbar';
import Mobilemenu from './components/Navbar/Mobilemenu';
import Announcement from './components/Announcement/Announcement';

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
      {/* show the announcement component for first 5 second on page load */}
      {
        setTimeout(() => {
          <Announcement />
        }, 5000)
      }
      <Navbar />
      <Mobilemenu />
      <div className="App scrollbar scrollbar-hide">
        <Routes>
          <Route path="/" element={<Home modalOpen={modalOpen} setModalOpen={setModalOpen} handleModal={handleModal} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
