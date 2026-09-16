import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Sales from './pages/Sales';
import About from './pages/About';
import Contact from './pages/Contact';
import PropertyDetails from './pages/PropertyDetails';
import './App.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
