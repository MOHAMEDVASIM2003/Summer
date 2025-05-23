import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
// import '../Style.css'

function Concapps() {
  return (
    <div class="overall" >
      <div class="total">
        <div class="row1">
          <img src={img1} alt="" class="img1" />
          <img src={img2} alt="" class="img2" style={{ height: "263px", width: "268px" }} />
          <img src={img3} alt="" class="img3" style={{ height: "263px", width: "268px" }} />
        </div>
        <div class="row2">
          <img src={img4} alt="" class="img4"  style={{ marginLeft:"240px",gap: "2px" }}/>
          <img src={img5} alt="" class="img5" />
          <img src={img6} alt="" class="img6"/> 
        </div>
      </div>
    </div>
  )
}

export default Concapps