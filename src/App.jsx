import { lazy, Suspense } from 'react';
import Navbar from './components/Herosetion/NavBar/Navbar'
import Content from './components/Herosetion/Content/Content'
import AboutSection from './components/about/AboutSection'

// Lazy load non-critical components
const CustomCursor = lazy(() => import('./components/custom_cursor/CustomCursor'));
const CardSection = lazy(() => import('./components/projects/section/CardSection'));
const FunFacts = lazy(() => import('./components/funfact/FunFacts'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Footer = lazy(() => import('./components/footer/Footer'));

// Loading component
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
    opacity: 0.6
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
      <Navbar />
      <Content />

      <Suspense fallback={<LoadingSpinner />}>
        <CardSection />
      </Suspense>

      <AboutSection />

      <Suspense fallback={<LoadingSpinner />}>
        <FunFacts />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </>
  )
}

export default App

