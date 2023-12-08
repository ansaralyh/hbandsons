import React from 'react'
import './Services.css'


const Services = () => {
  

  return (
    <>   
      <div className="service-head">
        <h1>Our Services</h1>
        <p>Explore how our offerings go beyond expectations, delivering quality, reliability, and innovation.</p>
        <button>Get In Touch</button>
      </div>
      <div className="service-cards container">
        <div className="card-1">
          <img src="/Images/yellow.png" alt="" />
          <div className="card-body">
            <h3>Fuel Transport</h3>
            <p>Our core service revolves around the seamless transport of fuel. </p>
          </div>
        </div>
        <div className="card-1">
        <img src="/Images/petrol.png" alt="" />
          <div className="card-body">
            <h3>On-Demand Delivery</h3>
            <p>Experience the convenience of on-demand fuel delivery tailored to your schedule</p>
          </div>
        </div>
        <div className="card-1">
        <img src="/Images/petro.png" alt="" />
          <div className="card-body">
            <h3>Fleet Fueling Solutions</h3>
            <p>Optimize your fleet's efficiency with our tailored fueling solutions.</p>
          </div>
        </div>
        <div className="card-1">
        <img src="/Images/measure.png" alt="" />
          <div className="card-body">
            <h3>Quality Assurance</h3>
            <p>Guarantee that every drop of fuel meets industry standards.</p>
          </div>
        </div>
        <div className="card-1">
        <img src="/Images/helper.png" alt="" />
          <div className="card-body">
            <h3>Consultation Services</h3>
            <p>Benefit from our industry expertise through our consultation services.</p>
          </div>
        </div>
        <div className="card-1">
        <img src="/Images/solution.png" alt="" />
          <div className="card-body">
            <h3>Customized Solutions</h3>
            <p>Recognizing that each client is unique, we offer customized solutions to your request.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services