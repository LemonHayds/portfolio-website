import "animate.css";
import Parallax from "react-rellax";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="contact-container" data-aos="zoom-in">
        <h1>Get In Touch</h1>
        <div className="contact-text">
          <p className="section-summary">
            Always looking to get involved with projects that excite me, my
            inbox is always open. Whether you have a question, need help with
            building something amazing from scratch, or just want to say hi, hit
            me up!
          </p>
        </div>
        <Parallax speed={-0.01}>
          <a href="mailto:hayden@lemonsqueasy.dev">
            <button>Say Hello</button>
          </a>
        </Parallax>
      </div>
    </section>
  );
};
