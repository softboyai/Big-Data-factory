import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Home from './pages/Home.jsx';
import Courses from './pages/Courses.jsx';

function App() {
  return (
    <div className="min-h-screen bg-graphite">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

