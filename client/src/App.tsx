import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { Header } from './components/Header';
import AboutPage from './pages/About';
import Admin from './pages/Admin';
import ApproachPage from './pages/Approach';
import ContactPage from './pages/Contact';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import RecruitmentPage from './pages/Recruitment';
import SystemsPage from './pages/Systems';

const Legal = lazy(() => import('./pages/Legal'));

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
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
        <Suspense fallback={<div className="mx-auto min-h-[40vh] max-w-3xl px-6 py-24 text-muted" role="status">Loading page…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/systems" element={<SystemsPage />} />
            <Route path="/approach" element={<ApproachPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/recruitment" element={<RecruitmentPage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/privacy" element={<Legal />} />
            <Route path="/cookies" element={<Legal />} />
            <Route path="/terms" element={<Legal />} />
            <Route path="*" element={<Legal />} />
          </Routes>
        </Suspense>
      </main>
      {!isAdmin && <CookieConsent />}
      {!isAdmin && <Footer />}
    </>
  );
}
