import React from "react";
import "./styles.css";

const Contact = () => {
  return (
    <div className="contact ">
      <div className="conatct-cc container">
        <div className="contact-form">
          <h2>
            <span>Contact</span> Hb & SONS LLC
          </h2>
          <p className="form-p">
            Thank you for considering Hb & SONS LLC. We're here to assist you
            with any inquiries or information you may need.
          </p>
          <input type="text" placeholder="Name*" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone number" />
          <select name="" id="" className="c-drop1">
            <option value="">How did you find us ?</option>
          </select>
          <button className="c-btn">Send</button>
          
          <div className="lastpart-contact">
            <div className="conatct-p">
              <img src="/Images/Frame 831.png " alt="" />
              <div className="phone-information">
                <h6>phone</h6>
                <p>03 5432 1234</p>
              </div>
            </div>
            <div className="conatct-p">
              <img src="/Images/Frame 835.png " alt="" />
              <div className="phone-information">
                <h6>fax</h6>
                <p>03 5432 1234</p>
              </div>
            </div>
            <div className="conatct-p">
              <img src="/Images/Frame 833.png " alt="" />
              <div className="phone-information">
                <h6>email</h6>
                <p>hbandsonsllc@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <img src="/Images/Rectangle 31.png" alt="" className="rectangle" />
          <img src="/Images/lmap.png" alt="" className="i2" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
