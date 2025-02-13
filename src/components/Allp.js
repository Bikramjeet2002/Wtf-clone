import React from 'react'
import { Link } from 'react-router-dom'

const Allp = ({ img, oldprice, newprice, name,id }) => {
  return (
    <div>
      
      <Link to={`/Product/${id}`} className='text-decoration-none '>
        <div className="div  position-relative ">
          <img  style={{ width: "100%", borderRadius: '20px' }} src={img} alt="" />
          <button className='rounded-pill px-3 bg-white position-absolute border-0' style={{ bottom: '10px', left: "10px" }}>Sale</button>
        </div>
        <div className="row"><a href='#' className='mb-0  text-decoration-none text-black fw-bold fs-3' >{name}</a></div>
        <div className="row w-75  fs-5  text-black ">
          <div className="col " style={{ textDecorationLine: 'line-through', opacity: '70%' }}>Rs.{oldprice}</div>
          <div className="col "> Rs.{newprice}</div>

        </div>
      </Link>
    </div>
  )
}

export default Allp
