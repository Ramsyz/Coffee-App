import React from 'react'
import Coffee from './components/coffee/Coffee'
import Hero from './components/hero/Hero'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'


// import images
import img from './assests/img.jpg'
import img1 from './assests/img1.jpg'
import main1 from './assests/main1.jpg'
import main2 from './assests/main2.jpg'
// import main3 from './assests/main3.jpg'


function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Coffee bgImg1={img} bgImg2={img1}/>
      <Coffee bgImg={main1}/>
      <Coffee bgImg={main2}/>
      <Footer/>
    </div>
  )
}

export default App
