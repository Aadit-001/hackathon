import './App.css'
import FeatureSection from './components/FeatureSection'
import Footer from"./components/Footer/Footer"
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'
import About from './components/About'
function App() {

  return (
    <div className=''>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <div className='max-w-7xl mx-auto pt-20 px-6'> 
    
      <FeatureSection></FeatureSection>
      <Testimonials></Testimonials>
    <About ></About>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
