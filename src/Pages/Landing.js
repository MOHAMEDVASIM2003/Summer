import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import Concapps from '../Pages/Concapps'
import Contact from '../Pages/Contact'
import Ontdek from '../Pages/Ontdek'
import Image from '../Pages/Image'

function Landing() {
  return (
    <div>
      <Header/>
      <Image/>
      <Ontdek/>
      <Concapps/>
      <Contact/> 
      <Footer/> 
    </div>
  )
}

export default Landing