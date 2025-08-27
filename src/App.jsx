import Navbar from './components/Herosetion/Navbar/Navbar'
import Content from './components/Herosetion/Content/Content'
import CardSection from './components/projects/section/CardSection'
import AboutSection from './components/about/AboutSection'
import Education from './components/about/Eduaction'
import FunFacts from './components/funfact/FunFacts'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import './App.css'

function App() {


  return (
    <>
      
      <Navbar />
      <Content />
      <CardSection />
      <AboutSection /> 
      <Education/>
      <FunFacts/>
      <Contact/>

      <Footer/>

    </>
  )
}

export default App

