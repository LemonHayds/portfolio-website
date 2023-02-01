import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import me from "../assets/img/me.jpg";
import 'animate.css';

export const About = () => {

  const [bannerTypeEnabled, setBannerTypeEnabled] = useState(true)

  const handleDone = () => {
    console.log(`Done !`)
    setBannerTypeEnabled(false)
  };

  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col className="headshot-container" xs={12} md={12} xl={5}>
            <div className="headshot-border" id="box">
              <div>
                <img src={me} alt="Hayden"/>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} xl={7}>
              <div className="about-info-container animate__animated animate__fadeIn">
                <h2 className="section-title">
                  About me
                </h2>
                  <p className="section-summary">
                    Fueled by a burning passion for innovation and entrepreneurship, I am a visionary technologist with a proven track record of turning complex problems into innovative solutions. My diverse skillset, honed in both financial services and web3 spaces, allows me to tackle any challenge.
                    <br></br> <br></br> 
                    Currently the CTO of my own co-founded start-up, <a className="section-link" href="https://www.betterverse.app/" target="_blank">Betterverse</a>, where I'm pushing the boundaries of what's possible in the web3 space by creating new incentives for charitable giving. 
                    <br></br> <br></br> 
                    I am driven to continuously push boundaries and create innovative solutions that make a real difference in the world.
                    <br></br> <br></br>
                    Here are some technologies I've worked with:
                  </p>
                  <ul className="skills-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>ReactNative</li>
                    <li>TailwindCSS</li>
                    <li>NextJS</li>
                    <li>Node.js</li>
                    <li>web3.js</li>
                    <li>Solidity</li>
                    <li>C-Sharp</li>
                    <li>Firebase</li>
                    <li>Figma</li>
                    <li>Webflow</li>
                    <li>Unity</li>
                  </ul>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
