import { Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Details from './Components/Pages/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
