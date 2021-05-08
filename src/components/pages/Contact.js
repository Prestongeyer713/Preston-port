import React from "react";
import { contact, contactTitle, social } from '../../profile'

const Contact = () => {
    
  return (
      <div className="parallax">
              <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                  <>
              <div className="git-head-div text-center mx-auto">
                      <h1 id="Contact" className="git-head">{contactTitle}</h1>
              </div>
              </>
              <div className="container">
          <div className="git-cont row">
              <div className="col-12 col-sm-6 half">
              <form action="https://formspree.io/f/{form_id}" method="post">
                      <input type="text" id="fname" name="firstname" placeholder="Your name" required></input>
                      <input type="mail" id="mailid" name="Email" placeholder="Email Address" required></input>
                      <input type="text" id="sub" name="Subject" placeholder="Subject" required></input>
                      <textarea id="msg" name="message" placeholder="Message" required></textarea>
                      <button style={{cursor: 'pointer'}} type="submit"><label style={{cursor: 'pointer'}} id="not-dark">Send Message</label></button>
                  </form>
              </div>
              <div className="col-12 col-sm-6 half">
                  <p className="lead">
                             
                  </p>
              <div className="d-flex justify-content-center align-items-center flex-column">
              <div className="inline-block">
                  {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank"  href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                  {social.facebook && <a title="Visit Facebok profile" rel="noopener noreferrer" target="_blank" href={social.facebook}><i className="fab fa-facebook"></i></a>}
                  {social.instagram && <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank" href={social.instagram}><i className="fab fa-instagram"></i></a>}
                  {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}<br/>
              </div>
                  {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download"></i></a>}
              </div>
              </div>
          </div>
          </div>
      </div>
          <p>Phone Number: 4079206172</p>
          <a href="https://www.linkedin.com/in/preston-geyer-96000b201/">Visit My Linkedin</a>
          <p>Email: prestongeyer713@gmail.com</p>
          <a href="https://github.com/Prestongeyer713">Visit My Github</a> 
      </div>
  )
  
}

export default Contact