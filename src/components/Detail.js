import { useContext } from 'react'
import './Detail.css'
import { useParams } from 'react-router-dom'
// import { contxt } from './Apicontxt'
import { DataContext } from '../Context/ApiProducts'
const Detail = () => {
  const { data, dataa, setdataa } = useContext(DataContext)
  const { id } = useParams()
  const jam = data ? data.find((e) => e.id == id) : ""

  function handlecart() {
    if (dataa.length > 0) {
      let indexx = dataa.findIndex(e => e.id === id)
      if (indexx !== -1) {
        let data = [...dataa]
        data[indexx].quantity += 1
        setdataa(data)
      }
      else {
        setdataa([...dataa, { ...jam, quantity: 1 }])
      }
    }
    else {
      setdataa([...dataa, { ...jam, quantity: 1 }])
    }
  }

  return (
    <div className='container-fluid' style={{ backgroundColor: "rgb(228,228,228)" }}>
      <div className="row">
        <div className="col-lg-5 px-0 col-md-5 col-12 d-flex flex-column align-items-lg-end align-items-md-end align-items-center">
          <div className="imgry mt-5" style={{ backgroundImage: `url(${jam.image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", height: "490px", width: "95%", borderRadius: "30px" }}>


            <button className="james rounded-circle d-flex justify-content-center align-items-center ms-2 mt-2 bg-light opacity-75" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ height: "40px", width: "40px" }}>
              <i class="fa-solid fa-magnifying-glass-plus" style={{ color: "#788397" }}></i>
            </button>
          </div>
          {/* <div className="home-demo">
            <div class="owl-carousel owl-theme">
                <div class="item"><img src="../pics/box.png" alt="" /></div>
                <div class="item"><h4>2</h4></div>
                <div class="item"><h4>3</h4></div>
                <div class="item"><h4>4</h4></div>
                <div class="item"><h4>5</h4></div>
                <div class="item"><h4>6</h4></div>
            </div>
          </div> */}
        </div>
        <div className="col-lg-7 mt-lg-0 mt-md-0 mt-3 col-md-7 col-12 p-lg-5 p-md-5 p-3 ps-3">
          <h1 className='fw-bold'>{jam.title}</h1>
          <div className="pricing d-flex mt-4">
            <del className='opacity-75'>{jam.old_price}</del>
            <ins className='text-decoration-none ms-3'>{jam.new_price}</ins>
            <div className="sale ms-3 px-3 rounded-pill opacity-75" style={{ border: "1px solid gray" }}>
              <p className='mb-0' style={{ fontSize: "13px" }}>Sale</p>
            </div>
          </div>
          <p className='opacity-75 mt-2' style={{ fontSize: "13px", wordSpacing: "2px" }}><a href="/home" className='text-black'>shipping</a> calculated at checkout.</p>
          <p className='fw-bold mb-0'>Size</p>
          <div className="sizes col-lg-12 col-md-9 col-8 d-flex flex-wrap">
            <div id='jj' className="col-lg-1  px-lg-4 mt-2 col-md-2 col-sm-2 col-3 d-flex justify-content-center border border-1 border-black py-2 rounded-pill">
              <input style={{appearance:'none',display:"none"}}  type="radio" name="radio" id="radio1"/>
                <label class="form-check-label"  htmlFor='radio1'>
                  XS
                </label>
                {/* <h6 className='mb-0'>XS</h6> */}
            </div>
            <div id='jk' className="col-lg-1 px-lg-4 mt-2 col-md-2 col-sm-2 col-3 d-flex justify-content-center border border-1 ms-2 opacity-75 border-black py-2 rounded-pill">
            <input style={{appearance:'none',display:"none"}} type="radio" name="radio" id="radio2"/>
                <label class="form-check-label"  htmlFor='radio2'>
                  S
                </label>
              {/* <h6 className='mb-0'>S</h6> */}
            </div>
            <div id='jl' className="col-lg-1 px-lg-4 mt-2 col-md-2 col-sm-2 col-3 d-flex justify-content-center border border-1 ms-2 opacity-75 border-black py-2 rounded-pill">
            <input style={{appearance:'none',display:"none"}} type="radio" name="radio" id="radio3"/>
                <label class="form-check-label"  htmlFor='radio3'>
                  M
                </label>

              {/* <h6 className='mb-0'>M</h6> */}
            </div>
            <div id='jm' className="col-lg-1 px-lg-4 mt-2 col-md-2 col-sm-2 col-3 d-flex justify-content-center border border-1 ms-2 opacity-75 border-black py-2 rounded-pill">
              {/* <h6 className='mb-0'>L</h6> */}
              <input style={{appearance:'none',display:"none"}} type="radio" name="radio" id="radio4"/>
                <label class="form-check-label"  htmlFor='radio4'>
                  L
                </label>
            </div>
            <div id='jn' className="col-lg-1 px-lg-4 mt-2 col-md-2 col-sm-2 col-3 d-flex justify-content-center border border-1 ms-2 opacity-75 border-black py-2 rounded-pill">
              {/* <h6 className='mb-0'>XL</h6> */}
              <input style={{appearance:'none',display:"none"}} type="radio" name="radio" id="radio5"/>
                <label class="form-check-label"  htmlFor='radio5'>
                  XL
                </label>
            </div>
            <div id='jo' className="col-lg-1 px-lg-4 mt-2 col-md-2 col-sm-2 col-3 d-flex justify-content-center border border-1 ms-2 opacity-75 border-black py-2 rounded-pill">
              {/* <h6 className='mb-0'>XLL</h6> */}
              <input style={{appearance:'none',display:"none"}}  type="radio" name="radio" id="radio6"/>
                <label class="form-check-label" for="flexRadioDefault1" htmlFor='radio6'>
                  XL
                </label>
            </div>
          </div>
          <button onClick={handlecart} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" className='rott col-lg-9 col-md-11 col-sm-10 col-12 bg-black text-white mt-4 mb-4 rounded-pill border-0' style={{ padding: "10px 0" }}><span style={{ opacity: "0.9" }}>Add to cart</span></button>
          <div class="accordion accordion-flush m-1" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" style={{ borderTop: "1px solid #CEC8C7" }}>
                <button class="accordion-button collapsed shadow-none text-black fw-bold" style={{ backgroundColor: "rgb(228,228,228)" }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <img className='me-2' src="../img/t-shirt.png" height={"20px"} width={"20px"} alt="" />Description
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body" style={{ backgroundColor: "rgb(228,228,228)" }}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" style={{ borderTop: "1px solid #CEC8C7" }}>
                <button class="accordion-button collapsed shadow-none text-black fw-bold" style={{ backgroundColor: "rgb(228,228,228)" }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  <img className='me-2' src="../img/3d-cube.png" height={"20px"} width={"20px"} alt="" />Details
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body" style={{ backgroundColor: "rgb(228,228,228)" }}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" style={{ borderTop: "1px solid #CEC8C7" }}>
                <button class="accordion-button collapsed shadow-none text-black fw-bold" style={{ backgroundColor: "rgb(228,228,228)" }} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  <img className='me-2' src="../img/wash.png" height={"20px"} width={"20px"} alt="" />Care Instructions
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body" style={{ backgroundColor: "rgb(228,228,228)" }}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>
            <hr className='mt-0 text-secondary' />
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-3 text-center">
          <img src="../img/cod_1.png" height={"40px"} width={"40px"} alt="" />
          <p>COD Available</p>
        </div>
        <div className="col-3 text-center">
          <img src="../img/in-transit--v1.png" height={"40px"} width={"60px"} alt="...." className='img' />
          <p>Delivery in 4-6 data</p>
        </div>
        <div className="col-3 text-center">
          <img src="../img/exchange.png" height={"40px"} width={"40px"} alt="" />
          <p className='mt-1'>Easy Exchange</p>
        </div>
      </div>
      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" style={{ maxWidth: '90vw' }}>
          <div class="modal-content">
            <div class="modal-header">
              {/* <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" >
              <img src={`${jam.image}`} style={{ width: '100%' }} alt="" />
            </div>
            {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Detail