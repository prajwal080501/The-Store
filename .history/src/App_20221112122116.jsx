import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import { useState } from 'react';
import Register from './pages/Register';
import Navbar from './components/Navbar/Navbar';
import Mobilemenu from './components/Navbar/Mobilemenu';
import Announcement from './components/Announcement/Announcement';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart';
import ProductList from './pages/ProductList';

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
      <Announcement/>
      <Navbar />
      <Mobilemenu />
      <div className="App scrollbar scrollbar-hide">
        <Routes>
          <Route path="/" element={<ProductList modalOpen={modalOpen} setModalOpen={setModalOpen} handleModal={handleModal} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register /
          <Route path="/singleproduct" element={<SingleProduct />} />
        </Routes>
      </div>
      <Footer/>
    </Router>

  );
}

export default App;
