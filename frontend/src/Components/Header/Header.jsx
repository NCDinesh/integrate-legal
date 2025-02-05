import React from 'react'
import Navbar from './Navbar'
import Bg from "../../assets/Bg.jpg"

const Header = () => {
  return (
    <>
    <section className='h-[100vh] bg-cover bg- bg-no-repeat'
    style={{backgroundImage: `url(${Bg})`}}>
      <Navbar />
    </section>
    </>
  )
}

export default Header