import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Legal from './pages/Legal';

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const isAdmin = pathname === '/admin';
  return (
    <>
      {!isAdmin && <ScrollToHash />}
      {!isAdmin && (
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-solid focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
      )}
      {!isAdmin && <Header />}
      <main id={isAdmin ? undefined : 'main'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/privacy" element={<Legal />} />
          <Route path="/cookies" element={<Legal />} />
          <Route path="/terms" element={<Legal />} />
          <Route path="*" element={<Legal />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
    </>
  );
}
