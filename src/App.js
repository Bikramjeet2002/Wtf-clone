import './App.css';
import Products from './components/Products';
import Bottom from './components/Bottom';
import Flex from './components/Flex';
import Bproducts from './components/Bproducts';
// import {Provider} from React
import { DataContext } from './Context/ApiProducts';
import React, { useContext } from 'react';
import Detail from './components/Detail';
import { Route , Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Insta from './components/Insta';
import Footer from './components/Footer';
import Allproducts from './components/Allproducts';




function App() {
  const {data} = useContext(DataContext)

  return (
    <>
    
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/' element={<Products/>}/>
      <Route path='/' element={<Bproducts/>}/> */}
      <Route path='/Product/:id' element={<Detail/>}/>
      <Route path='/Product' element={<Allproducts/>}></Route>
      
    </Routes>
    
    {/* <Insta/> */}
    {/* <Footer/> */}
    
    {/* <Routes>
      <Route path='/' element={<Bproducts/>}></Route>
      <Route path='/product/:id' element={<Detail/>}/>

      
    </Routes> */}
    {/* <Products/> */}
    {/* <Products/>
    <div className="div">
      
    {/* <Bottom  img='https://wtflex.in/cdn/shop/files/IMG_7304.png?v=1706097417&width=1000' name='newhood' oldprice='2000' newprice='1500'/> */}
    {/* </div> */} 
    
    {/* <Bproducts/>
    <Detail/>
       */}
    
    </>
  );
}

export default App;
