import React,{useRef} from 'react'
import emailjs from '@emailjs/browser'
const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qd6fl0c', 'template_ff9qu19', form.current, 'O6FlSJpBiAYiWJojq')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    };
  return (
    <div className="div">

       
    <form ref={form} onSubmit={sendEmail}>
    <span className='span'> Get In Touch! </span>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  )
}

export default Form

        {/* <div class="wave1">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
          </svg>
        </div> */}

        {/* <Form/> */}