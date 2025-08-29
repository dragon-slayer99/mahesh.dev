import { lazy, Suspense } from 'react';
import Navbar from './components/Herosetion/NavBar/Navbar'
import Content from './components/Herosetion/Content/Content'
import AboutSection from './components/about/AboutSection'
import Loading from './components/Loading/Loading'

// Lazy load non-critical components
const CustomCursor = lazy(() => import('./components/custom_cursor/CustomCursor'));
const CardSection = lazy(() => import('./components/projects/section/CardSection'));
const FunFacts = lazy(() => import('./components/funfact/FunFacts'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Footer = lazy(() => import('./components/footer/Footer'));

// Remove this - we're using the custom Loading component

function App() {
  return (
    <>
      <Suspense fallback={<Loading message="Loading..." />}>
        <CustomCursor />
      </Suspense>
      <Navbar />
      <Content />

      <Suspense fallback={<Loading message="Loading..." />}>
        <CardSection />
      </Suspense>

      <AboutSection />

      <Suspense fallback={<Loading message="Loading..." />}>
        <FunFacts />
      </Suspense>

      <Suspense fallback={<Loading message="Loading..." />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<Loading message="Loading..." />}>
        <Footer />
      </Suspense>
    </>

  )
}

export default App

