import axios from 'axios'
import React, {createContext, useEffect, useState } from 'react'
export const DataContext = createContext();

const ApiProducts = ({children}) => {
  const[data,setData]=useState()
  useEffect(()=> {
    

       axios.get('https://mocki.io/v1/2b17ec18-0e21-4ec4-bc46-ae7d5509a764 ').then((res)=>{
        setData(res.data)
      })
    
   },[])

   let [dataa,setdataa] = useState([])
  return (
   <>
    <DataContext.Provider value={{data,dataa,setdataa}}>
      {children}
    </DataContext.Provider>
    </>
  )
}

export default ApiProducts
