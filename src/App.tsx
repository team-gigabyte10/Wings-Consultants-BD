import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { PureLayout } from './layouts/PureLayout';
import { WingsLayout } from './layouts/WingsLayout';

const PureHome = lazy(() => import('./pages/pure/HomePage'));
const PureAbout = lazy(() => import('./pages/pure/AboutPage'));
const PureProducts = lazy(() => import('./pages/pure/ProductsPage'));
const PureProductDetail = lazy(() => import('./pages/pure/ProductDetailPage'));
const PureDealership = lazy(() => import('./pages/pure/DealershipPage'));
const PureFaq = lazy(() => import('./pages/pure/FaqPage'));
const PureContact = lazy(() => import('./pages/pure/ContactPage'));

const WingsHome = lazy(() => import('./pages/wings/HomePage'));
const WingsAbout = lazy(() => import('./pages/wings/AboutPage'));
const WingsServices = lazy(() => import('./pages/wings/ServicesPage'));
const WingsServiceDetail = lazy(() => import('./pages/wings/ServiceDetailPage'));
const WingsIndustries = lazy(() => import('./pages/wings/IndustriesPage'));
const WingsCaseStudies = lazy(() => import('./pages/wings/CaseStudiesPage'));
const WingsInsights = lazy(() => import('./pages/wings/InsightsPage'));
const WingsFaq = lazy(() => import('./pages/wings/FaqPage'));
const WingsContact = lazy(() => import('./pages/wings/ContactPage'));

const NotFound = lazy(() => import('./pages/NotFoundPage'));

// Old links used `/#wings-consultants` to open the Wings site.
const LegacyHashRedirect: React.FC<{ children: React.ReactNode }> = ({ children }) =>
  window.location.hash === '#wings-consultants' ? <Navigate to="/wings" replace /> : <>{children}</>;

const PageFallback = () => <div className="min-h-[60vh]" aria-busy="true" />;

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<PureLayout />}>
            <Route index element={<LegacyHashRedirect><PureHome /></LegacyHashRedirect>} />
            <Route path="about" element={<PureAbout />} />
            <Route path="products" element={<PureProducts />} />
            <Route path="products/:slug" element={<PureProductDetail />} />
            <Route path="dealership" element={<PureDealership />} />
            <Route path="faq" element={<PureFaq />} />
            <Route path="contact" element={<PureContact />} />
          </Route>

          <Route path="wings" element={<WingsLayout />}>
            <Route index element={<WingsHome />} />
            <Route path="about" element={<WingsAbout />} />
            <Route path="services" element={<WingsServices />} />
            <Route path="services/:slug" element={<WingsServiceDetail />} />
            <Route path="industries" element={<WingsIndustries />} />
            <Route path="case-studies" element={<WingsCaseStudies />} />
            <Route path="insights" element={<WingsInsights />} />
            <Route path="faq" element={<WingsFaq />} />
            <Route path="contact" element={<WingsContact />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
