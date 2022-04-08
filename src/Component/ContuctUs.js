import React from 'react'
import Location from "../img/Locationicon.svg"
import Mail from "../img/mail.svg"
import Call from "../img/call.svg"
import Time from "../img/time.svg"
import contactus from "../img/Contactus1.svg"





function ContuctUs() {
  return (
    <>
      <div className="contactus-section">
        <img  className='contactUsImgLeft' src={contactus} alt="" />
        
        <div className="contactForm">
          <form action="#" autocomplete="on">
            <h4>Get In Touch</h4>
            <input type="text" placeholder='Name' className='inputArea' required />
            <input type="text" placeholder='Phone' className='inputArea' required />
            <input type="email" placeholder='Email' className='inputArea' required />
            <input type="text" placeholder='What you want to Ask? ' className='inputArea' />
            <button type='submit'>Submit</button>
          </form>

        </div>

        <div className="contactInfo">
          <h4>Contact Info </h4>
          <div className="infoItems">
            <div className="infoItem">
              <span> <img src={Location} alt="" />Our Location </span>
              <address>Stable no 7 , Near new Atul engineering works
                , Gogate wadi , Aarey road ,
                Goregaon East ,Mumbai.</address>
            </div>
            <div className="infoItem">
              <span> <img src={Mail} alt="" />Our Email  </span>
              <p><a href="mailto:info.airavata@gmail.com">info.airavata@gmail.com</a></p>
            </div>
            <div className="infoItem">
              <span> <img src={Call} alt="" />Call Us  </span>
              <p><a href="tel:+918000354629">+918000354629</a></p>
            </div>
            <div className="infoItem">
              <span> <img src={Time} alt="" />Working Hours  </span>
              <p>Mon-Fri: 9AM-8PM</p>
            </div>

          </div>


        </div>


      </div>

    </>
  )
}

export default ContuctUs