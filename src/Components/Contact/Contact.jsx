import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from'../../assets/white-arrow.png'


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e705181d-6b9f-4309-9172-dab965f648d7");

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
    <div>
      <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
            <p>Feel free to contact with us anytime you want or fillup the form below to contact with us directly</p>
            <ul>
                <li><img src={mail_icon} alt="" />rezwanraad@gmail.com</li>
                <li><img src={phone_icon} alt="" />+01724244323</li>
                <li><img src={location_icon} alt="" />69/1 Rk Mission Road <br/>Mymensingh</li>
            </ul>
        
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number: ' required />
                <label > Enter your messages here</label>
                <textarea name="messages" rows='6' placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
                 </form>
                 <span>{result}</span>
        </div>
      </div>
    </div>
  )
}

export default Contact
