import React, { useContext } from 'react'
import Cart from './Cart'
import { DataContext } from '../Context/ApiProducts'
// import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import Products from './Products'

const Navbar = () => {
  let { dataa } = useContext(DataContext)
  console.log(dataa)
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="container-fluid d-flex justify-content-center">
          <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarj" aria-controls="offcanvasNavbarj">
            <img src="../img/hamburger.png" height={"25px"} width={"25px"} alt="" />
          </button>
          <div className="offcanvas offcanvas-start bg-black text-white" tabindex="-1" id="offcanvasNavbarj" aria-labelledby="offcanvasNavbarLabelj">
            <div className="offcanvas-header">
              <button type="button" className="btn-close btn-close-white ms-0 shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
            </div>
          </div>
          <Link to={`/`} className="div fw-bold m-auto">
          
          <img  src='../img/Umntitled-2.avif' className='fw-bold m-auto' alt='...' height={"60px"} width={"60px"} />
      
          </Link>
          <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <img src='../img/shopping-cart (1).png' className='fw-bold m-auto' alt='...' height={"30px"} width={"30px"} />
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              {dataa.length > 0 ? <div><h2 className='text-center mb-3'>Your Cart</h2>{dataa.map(e => <Cart id={e.id} name={e.title} img={e.image} quantity={e.quantity} newprice={e.new_price} />)}</div> : <h3 className='text-center'>Your cart is empty</h3>}
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="jagroop"> */}
      {/* <marquee behavior="slide" direction="right">jagroop did it with rattan's </marquee> */}
      {/* <Marquee direction='right'>jagroop did it with rattan's</Marquee>
        </div>*/}
    </div>

  )
}

export default Navbar