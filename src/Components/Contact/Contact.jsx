import React from 'react'
import './Contact.css'
import msgIcon from '../../assets/msgIcon.png'
import mailicon from '../../assets/mailicon.png'
import phoneicon from '../../assets/phoneicon.png'
import locationicon from '../../assets/locationicon.png'
import whiteArrow  from '../../assets/whiteArrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d3d542f4-421b-4beb-8e72-b655352df26e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div  className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msgIcon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact <br/>
            information below .Your feedbackquestions , and suggestions <br/> are 
            important to us aswe strive to provide exceptional service to our clients.
        </p>
        <ul>
            <li><img src={mailicon} alt="" />Ronaldzulu.tz@gmail.com</li>
            <li><img src={phoneicon} alt="" />+263 776 549 264</li>
            <li><img src={locationicon} alt="" />Corner Effiel flats <br/> Bulawayo Road</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type='text' name='name' placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type= 'tel' name='phone'  placeholder='Enter your phone number' required/>
          <label>Write your message here</label>
          <textarea name="message" rows='6' placeholder='Enter our message' required ></textarea>
          
          <button type="submit" className='btn'  >Submit now <img src={whiteArrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
