import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import TrainersList from './components/TrainerList';
import TrainerDetail from './components/TrainerDetail';
import TrainersMock from './TrainersMock';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <h1>My Academy Trainers App</h1>
        <nav className="navbar">
          <Link to="/">Home</Link> |
          <Link to="/Trainers">Show Trainers</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Trainers" element={<TrainersList trainers={TrainersMock} />} />
          <Route path="/Trainer/:id" element={<TrainerDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
