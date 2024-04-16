import React from 'react'

const Footer = () => {
  return (
    <>
      <hr />
      <div className="container-fluid">
        <div className="container">
        <div className="row py-3">
          <div className="col-11     my-3">
            <h4 className='fw-bold'>Subscribe to our emails</h4>
            <div className="col-lg-5 col-md-6 col-sm-6 rounded-pill bg-warning mt-3" style={{ border: '3px solid black'}}>
              <input type="email" className="form-control rounded-pill py-2 shadow-none" id="floatingInput" placeholder="Email  " />
              
            </div>
          </div>
          <div className="col  d-flex justify-content-center align-items-center justify-content-lg-end">
            <div className="div" style={{ fontSize: '30px' }}>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>  
        </div>
        </div>

      </div>

    </>
  )
}

export default Footer
