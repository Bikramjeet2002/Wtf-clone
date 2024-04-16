import React, { useContext } from 'react'
import Card from './Card'
import { DataContext } from '../Context/ApiProducts'
import Bottom from './Bottom'

const Products = () => {
 const {data}=useContext(DataContext)
 

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <h1>Featured Products</h1>
          </div>
          <div className="row">
          {data ? data.filter(e => e.category == "feature_products").map(r => <div className="col-lg-3 col-md-6 col-sm-12 "><Card img={r.image} id={r.id} name={r.title} oldprice={r.old_price} newprice={r.new_price} /></div>
            ) : <li>pending</li>}

          </div>
          

        </div>
      </div>


    </>
  )
}

export default Products
