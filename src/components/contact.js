import React from 'react'
import emailjs from 'emailjs-com'

import PropTypes from 'prop-types'

import './contact.css'

const Contact = (props) => {

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zuuiu8t', 'template_z545vbr', e.target, '6lp0t8A3W0fKeKuN_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div id="Work" className="contact-contact">
      <div className="contact-lets-talk">
        <form onSubmit={sendEmail}>
          <h1 className="contact-text">{props.heading}</h1>
          <input
            type="text"
            name="name"
            placeholder={props.textinput_placeholder}
            className="contact-textinput input"
          />
          <input
            type="text"
            name="email"
            placeholder={props.textinput_placeholder1}
            className="contact-textinput1 input"
          />
          <textarea
            name="message"
            placeholder={props.textinput_placeholder2}
            className="contact-textinput2 input"
          />
          <button type="submit" className="contact-button button">
            {props.button}
          </button>
        </form>
      </div>
      <div className="contact-signature">
        <img
          alt={props.BLACKSIGNPNG1_alt}
          src={props.BLACKSIGNPNG1_src}
          className="contact-b-l-a-c-k-s-i-g-n-p-n-g1"
        />
        <h1 className="contact-text1">
          <span className="contact-text2">YOGENDRA</span>
          <br></br>
          <span>MANAWAT</span>
          <br></br>
        </h1>
      </div>
    </div>
  )
}

Contact.defaultProps = {
  heading: "Let's Talk",
  textinput_placeholder: 'Name',
  textinput_placeholder1: 'Email here...',
  textinput_placeholder2: 'Message',
  button: 'Send',
  BLACKSIGNPNG1_src: '/playground_assets/blacksignpng1113-o6g9.svg',
  BLACKSIGNPNG1_alt: 'BLACKSIGNPNG1113',
}

Contact.propTypes = {
  heading: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  button: PropTypes.string,
  BLACKSIGNPNG1_src: PropTypes.string,
  BLACKSIGNPNG1_alt: PropTypes.string,
}

export default Contact
