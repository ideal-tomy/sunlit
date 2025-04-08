import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// レイアウトコンポーネントをインポート
import Navbar from './components/Navbar';
import Footer from './layouts/Footer';

// ページコンポーネントをインポート
import Home from './pages/Home';
import Acupuncture from './pages/Acupuncture';
import PrivateTreatment from './pages/PrivateTreatment';
import Insurance from './pages/Insurance';
import Staff from './pages/Staff';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acupuncture" element={<Acupuncture />} />
            <Route path="/private-treatment" element={<PrivateTreatment />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
