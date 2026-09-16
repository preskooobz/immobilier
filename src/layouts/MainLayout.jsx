import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './MainLayout.css';

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="layout-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
