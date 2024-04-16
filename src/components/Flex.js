import React from 'react'
import { Link } from 'react-router-dom'

const Flex = () => {
    return (
        <>
            <div>
                <div className="container-fluid " style={{ backgroundColor: "rgb(228 228 228)" ,width:'100%'}} >
                    <div className="container">
                        <div className="row mt-4 justify-content-between ">
                            <div className="col-lg-6 col-md-6 col-sm-12  p-0" >
                                <img style={{ height: '70vh', width: '100%' }} src="https://wtflex.in/cdn/shop/files/352178397_639174921565413_5550562391282319855_n.jpg?v=1701341086&width=750" alt="" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 mt-5 p-5 " >
                                <div className="div  fs-5">
                                    <h1 >We Are What The Flex</h1>
                                    <p className='mb-0' style={{ marginTop: '30px' }}>Our commitment is to provide unparalleled quality because you deserve nothing but the finest.</p>
                                    <p className='mb-0'>Join us on this journey where your style meets our passion, allowing you to keep flexing with the classiest products and services around.</p>
                                    <p className='mb-0'>Discover your next favorite!</p>

                                    <Link to={'/Product'} button   type="button" className="btn btn-dark rounded-pill px-4 py-2 mt-4"> Shop All</Link>
                                    
                                </div>
                            </div>
                            </div> 
                        </div>
                        <div className="row" >
                            <marquee  className='d-flex align-items-center' behavior="scroll" direction="left" style={{backgroundColor:'black',color:'white',height:'10vh'}}>
                            <h1>unuisex hello yellow blue opink</h1>
                            </marquee>
                        </div>
                    
                    </div>
            </div>
            
        </>
    )
}

export default Flex