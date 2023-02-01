import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import me from "../assets/img/me.jpg";
import 'animate.css';

export const Contact = () => {

  return (
    <section className="contact" id="contact">
          <div className="contact-container">
            <h1>Get In Touch</h1>

            <div className="contact-text">
              <p className="">
                Always looking to get involved with projects that excite me, my inbox is always open. Whether you have a question, need help with building something amazing from scratch, or just want to say hi, hit me up!              
              </p>
            </div>

            <button>Say Hello</button>
          </div>


    </section>
  )
}
