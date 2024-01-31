import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import me from "../assets/img/me.jpg";
import "animate.css";
import Parallax from "react-rellax";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col className="headshot-container" xs={12} md={12} xl={5}>
            <Parallax speed={1}>
              <div className="headshot-border" id="box">
                <div>
                  <img src={me} alt="Hayden" />
                </div>
              </div>
            </Parallax>
          </Col>
          <Col xs={12} md={12} xl={7}>
            <Parallax speed={0.5}>
              <div
                className="about-info-container animate__animated animate__fadeIn"
                data-aos="zoom-in"
              >
                <h2 className="section-title">About me</h2>
                <p className="section-summary">
                  Fueled by a burning passion for innovation and
                  entrepreneurship, I am a confident technologist with a proven
                  track record of turning complex problems into innovative
                  solutions. My diverse skillset, honed in both financial
                  services and web3 spaces, allows me to tackle any challenge.
                  <br></br> <br></br>I excel in the role of inspiring and
                  leading teams of engineers tackle complex challenges with
                  enthusiasm and efficiency. This was proven as I formulated and
                  led a team of five to win the Polygon Public Good prize at{" "}
                  <a
                    className="section-link"
                    href="https://ethglobal.com/"
                    target="_blank"
                  >
                    EthGlobal
                  </a>{" "}
                  San Francisco 2022.
                  <br></br> <br></br>
                  Currently working as a Fullstack Developer at{" "}
                  <a
                    className="section-link"
                    href="https://intent.uk/"
                    target="_blank"
                  >
                    Intent
                  </a>
                  .<br></br> Here are some technologies I've worked with:
                </p>
                <ul className="skills-list">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>Typescript</li>
                  <li>React</li>
                  <li>TailwindCSS</li>
                  <li>NextJS</li>
                  <li>NestJS</li>
                  <li>Node</li>
                  <li>GraphQL</li>
                  <li>Solidity</li>
                  <li>Firebase</li>
                  <li>Figma</li>
                  <li>Webflow</li>
                  <li>Unity</li>
                </ul>
              </div>
            </Parallax>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
