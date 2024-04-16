import React, { useContext } from 'react'
import Bottom from './Bottom'
import { DataContext } from '../Context/ApiProducts'
const Bproducts = () => {
  const {data} = useContext(DataContext)
  let product;


  // console.log(product)
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <h1>Bottom wear</h1>
          </div>
          <div className="row">
            {data ? data.filter(e => e.category == "bottom_trends").map(r => <div className="col-lg-3 col-md-6 col-sm-12"><Bottom img={r.image} name={r.title} oldprice={r.old_price} id={r.id} newprice={r.new_price} /></div>
            ) : <li>pending</li>}
          </div>
          {/* <div className="row justify-content-between justify-content-sm-center align-items-center " >
              <div className="col-lg col-md-6 col-sm-12"><Bottom img={image} name='newhood' oldprice='2000' newprice='1500'/></div>
              <div className="col-lg col-md-6 col-sm-12"><Bottom img='https://wtflex.in/cdn/shop/files/IMG_7304.png?v=1706097417&width=1000' name='newhood' oldprice='2000' newprice='1500'/></div>
              <div className="col-lg col-md-6 col-sm-12"><Bottom img='https://wtflex.in/cdn/shop/files/IMG_7304.png?v=1706097417&width=1000' name='newhood' oldprice='2000' newprice='1500'/></div>
              <div className="col-lg col-md-6 col-sm-12"><Bottom img='https://wtflex.in/cdn/shop/files/IMG_7304.png?v=1706097417&width=1000' name='newhood' oldprice='2000' newprice='1500'/></div>
             
            </div>
            */}

        </div>
      </div>

    </>
  )
}

export default Bproducts
