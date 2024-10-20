import './App.css'
import Footer from"./components/Footer/Footer"
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'
function App() {

  return (
    <div className=''>
      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto pt-20 px-6'> 
      <Testimonials></Testimonials>
      
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
