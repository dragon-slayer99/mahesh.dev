import Navbar from './components/Herosetion/NavBar/Navbar'
import Content from './components/Herosetion/Content/Content'
import CardSection from './components/projects/section/CardSection'
import AboutSection from './components/about/AboutSection'

import FunFacts from './components/funfact/FunFacts'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import CustomCursor from './components/custom_cursor/CustomCursor'


import './App.css'

function App() {


  return (
    <>
      <CustomCursor/>
      <Navbar />
      <Content />
      <CardSection />
      <AboutSection /> 
      <FunFacts/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App

