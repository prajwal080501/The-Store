import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
      setModalOpen(!modalOpen);
  }
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home modalOpen={modalOpen} setModalOpen={setModalOpen} handleModal={handleModal} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
