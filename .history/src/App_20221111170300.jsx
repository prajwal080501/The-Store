import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Home />
    </div>
    </Router>
    
  );
}

export default App;
