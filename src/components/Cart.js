import React, { useContext, useEffect } from 'react'
import { DataContext } from '../Context/ApiProducts'

const Cart = ({id,img,name,newprice,quantity}) => {
    const {dataa,setdataa}=useContext(DataContext)

    function handledel(){
      const data = dataa.filter(e => e.id !== id)
      setdataa(data)
    }

    function handledec(){
      let indexx = dataa.findIndex(e => e.id === id)
      const jam = dataa.find(e => e.id === id)
      if(jam.quantity>1){
        const data = [...dataa]
        data[indexx].quantity-=1
        setdataa(data)
      }
    }
    function handleinc(){
      let indexx = dataa.findIndex(e => e.id === id)
      const data = [...dataa]
      data[indexx].quantity+=1
      setdataa(data)
    }
  return (
    <>
      <div className="container-fluid mt-2">
          <div className="row bg-light py-4 px-3 rounded-4">
            <div className="col-3 p-0">
              <img src={`${img}`} width={"100%"} alt="" />
            </div>
            <div className="col-6 ps-3 p-0">
              <h5 className="div fw-bold w-100" style={{fontSize: "15px"}}>{name}</h5>
              <p className="col mb-0" style={{fontSize: "14px"}}>Size: XS</p>
              <div className="div mt-3 d-flex justify-content-start align-items-end">
                <div className='border border-1 border-black py-2 col-9 rounded-pill d-flex justify-content-around'><button onClick={handledec} className='border-0 bg-transparent'>-</button><p className='mb-0'>{quantity}</p><button onClick={handleinc} className='border-0 bg-transparent'>+</button></div>
              </div>
            </div>
            <div className="col-3 d-flex flex-column align-items-end justify-content-between">
              <div className="p-0 d-flex flex-column align-items-end" style={{fontSize: "16px"}}><p className='mb-0'>{newprice}</p></div>
              <button onClick={handledel} className='border border-1 bg-transparent border-black col-8 d-flex justify-content-center py-3 rounded-pill'><i class="fa-regular fa-trash-can" style={{color: "#091015"}}></i></button>
            </div>
          </div>  
        </div>
    </>
  )
}

export default Cart