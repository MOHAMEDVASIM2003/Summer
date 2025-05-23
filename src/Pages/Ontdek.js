import React from 'react'
import Forest from '../assets/Forest.png'
import Baby2 from '../assets/Baby2.png'
function Ontdek() {
  return (
    <div className="container">
      <div className="container-item1">
        <div className="container-text1">
          <h1 className="container-title1">Ontdek de <br></br>wereld</h1>
          <p className="container-des2">
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </p>
          <button className="con-btn1">CONCAPPS</button>
        </div>
        <div className="container-image2">
          <img
            src={Forest}
            alt="Placeholder"
            className="container-image1"
          />
        </div>
      </div>
      <div className="container-item2">
        <div className="container-image2">
          <img
            src={Baby2}
            alt="Placeholder"
            className="container-image2"
          />
        </div>
        <div className="container-text2">
          <h1 className="container-title2">Onderzoek de <br></br>toekomst</h1>
          <p className="container-des2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </p>
          <button className="con-btn2">CONCAPPS</button>
        </div>
      </div>
    </div>
  )
}

export default Ontdek