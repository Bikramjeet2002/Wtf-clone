import React from 'react'
import Products from './Products'
import Bproducts from './Bproducts'
import Flex from './Flex'
// import Navbar from './Navbar'
import Insta from './Insta'
import Footer from './Footer'
import { Header } from './Header'
import Allproducts from './Allproducts'

const Home = () => {
  return (
    <>
    {/* <Navbar/> */}
      <Header/>
      <Products/>
      <Flex/>
      <Bproducts/>
      <Insta/>
      <Footer/>
      
    </>
  )
}

export default Home
