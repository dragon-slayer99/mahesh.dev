import { lazy, Suspense } from 'react';
import Navbar from './components/Herosetion/NavBar/Navbar'
import Content from './components/Herosetion/Content/Content'
import AboutSection from './components/about/AboutSection'
import Loading from './components/Loading/Loading'

const CustomCursor = lazy(() => import('./components/custom_cursor/CustomCursor'));
const CardSection = lazy(() => import('./components/projects/section/CardSection'));
const FunFacts = lazy(() => import('./components/funfact/FunFacts'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Footer = lazy(() => import('./components/footer/Footer'));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
      <Navbar />
      <Content />

      <Suspense fallback={<Loading />}>
        <CardSection />
      </Suspense>

      <AboutSection />

      <Suspense fallback={<Loading />}>
        <FunFacts />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </>
  )
}

export default App

