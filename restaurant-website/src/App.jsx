import About from "./components/About"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import Quote from "./components/Quote"
import Reservation from "./components/Reservation"
import Testimonials from "./components/Testimonials"

function App(){
  return (
    <>
   <Navbar/>
   <Hero/>
   <About/>
   <Quote/>
   <Menu/>
   <Testimonials/>
   <Gallery/>
   <Reservation/>
   <Banner/>
   <Footer/>

    </>
  )
}

export default App