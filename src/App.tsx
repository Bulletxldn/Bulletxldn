import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import ForBusinesses from './pages/ForBusinesses';
import Contact from './pages/Contact';

// Placeholder components for remaining pages
const ForCreators = () => (
  <div className="min-h-screen pt-20 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">For Creators</h1>
      <p className="text-gray-600">Coming soon - Creator application and onboarding</p>
    </div>
  </div>
);

const About = () => (
  <div className="min-h-screen pt-24">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-3">About Us</h1>
        <p className="text-blue-100">Meet our co-founders</p>
      </div>

      <div className="space-y-10">
        {/* Reece Forbes */}
        <section className="bg-white/10 backdrop-blur rounded-xl p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-40 h-40 rounded-xl bg-white/20 flex items-center justify-center text-white text-sm">
                Image Placeholder
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-white">Co‑founder: Reece Forbes</h2>
              <p className="mt-3 text-blue-100">
                Short bio goes here. Add a brief paragraph about Reece’s background, focus,
                and what he brings to Bulletxldn.
              </p>
            </div>
          </div>
        </section>

        {/* Scott Lee */}
        <section className="bg-white/10 backdrop-blur rounded-xl p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-40 h-40 rounded-xl bg-white/20 flex items-center justify-center text-white text-sm">
                Image Placeholder
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-white">Co‑founder: Scott Lee</h2>
              <p className="mt-3 text-blue-100">
                With extensive experience in social media growth, I’ve built and managed multiple
                large pages from the ground up while developing a formidable network across online
                communities. My content now reaches hundreds of millions of users each month, giving
                me a unique edge in driving engagement and brand impact at scale.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
);

const Privacy = () => (
  <div className="min-h-screen pt-20 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
      <p className="text-gray-600">Coming soon - Privacy policy and data handling</p>
    </div>
  </div>
);

const Terms = () => (
  <div className="min-h-screen pt-20 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
      <p className="text-gray-600">Coming soon - Terms and conditions</p>
    </div>
  </div>
);

const NotFound = () => (
  <div className="min-h-screen pt-20 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-accent-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
      <a 
        href="/" 
        className="inline-flex items-center px-6 py-3 bg-accent-600 text-white font-medium rounded-lg hover:bg-accent-700 transition-colors"
      >
        Back to Home
      </a>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/for-businesses" element={<ForBusinesses />} />
              <Route path="/for-creators" element={<ForCreators />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;