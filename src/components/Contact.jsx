import React from 'react'

const Contact = () => {
  return (
    <div className='container contact'>
    <div className='contact-form'>
      <h2><span>Contact</span> Hb & SONS LLC</h2>
      <p className='form-p'>
      Thank you for considering Hb & SONS LLC. We're here to assist you with any inquiries or information you may need.
      </p>
      <input type="text" placeholder='Name*' />
      <input type="email" placeholder='Email' />
      <input type="number" placeholder='Phone number' />
      <select name="" id="" className='c-drop'>
        <option value="">How did you find us</option>
      </select><br />
      <button className='c-btn'>Send</button>
    </div>
    <div className='contact-map'>
    <img src="/Images/Rectangle 31.png" alt="" />
    <img src="/Images/lmap.png" alt="" className='i2'/>
    </div>
    </div>
  )
}

export default Contact
