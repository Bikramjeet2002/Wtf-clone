import React, { useContext } from 'react'
import { DataContext } from '../Context/ApiProducts'
import Allp from './Allp'

const Allproducts = () => {
    const {data}= useContext(DataContext)
  return (
    <>
    <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-center align-items-center my-3">
            <h1>All Products</h1>
          </div>
          <div className="row">
          {data ? data.map(r => <div className="col-lg-3 col-md-6 col-sm-12 "><Allp img={r.image} id={r.id} name={r.title} oldprice={r.old_price} newprice={r.new_price} /></div>
            ) : <li>pending</li>}

          </div>
          

        </div>
      </div>

    </>
  )
}

export default Allproducts
