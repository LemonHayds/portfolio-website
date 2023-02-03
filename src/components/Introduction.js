import { useState, Suspense, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import { Typewriter } from "react-simple-typewriter";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lemon from "../assets/obj/Lemon";
import Parallax from "react-rellax";
import AOS from "aos";
import "aos/dist/aos.css";

export const Introduction = () => {
  const [bannerTypeEnabled, setBannerTypeEnabled] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleDone = () => {
    setBannerTypeEnabled(false);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={12} xl={7}>
            <div className={"animate__animated animate__fadeIn"}>
              <div className="banner-container" data-aos="zoom-in">
                <h1>
                  <Parallax speed={-3}>
                    Lemon <br></br>
                  </Parallax>
                  <Parallax speed={-4}>
                    <Typewriter
                      words={["Squ"]}
                      loop={1}
                      typeSpeed={150}
                      deleteSpeed={150}
                      delaySpeed={2000}
                    />
                    <Typewriter
                      words={["", "eezy?", ""]}
                      loop={1}
                      typeSpeed={150}
                      deleteSpeed={150}
                      delaySpeed={1000}
                    />
                    <span style={{ color: "green" }}>
                      <Typewriter
                        words={["", "", "", "easy!"]}
                        loop={1}
                        typeSpeed={150}
                        deleteSpeed={150}
                        delaySpeed={1500}
                        onLoopDone={handleDone}
                      />
                    </span>
                    <span style={{ color: "whitesmoke" }}>
                      <Typewriter
                        words={[]}
                        cursor={bannerTypeEnabled}
                        typeSpeed={150}
                        deleteSpeed={150}
                        delaySpeed={1500}
                        onLoopDone={handleDone}
                      />
                    </span>
                  </Parallax>
                </h1>
                <Parallax speed={-4}>
                  <div className="banner-summary-container">
                    <p className="">
                      Hi, my name is Hayden Sherwood, and this is my portfolio.
                    </p>
                  </div>
                </Parallax>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} xl={5}>
            <Parallax speed={-5}>
              <div className="canvas-container">
                <Canvas className="canvas">
                  <Suspense fallback={null}>
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[0, 10, 5]} intensity={0.5} />
                    <directionalLight position={[0, 10, 0]} intensity={0.5} />
                    <spotLight
                      intensity={0.5}
                      angle={0.1}
                      penumbra={1}
                      position={[1000, 0, 0]}
                      castShadow
                    />
                    <Lemon />
                    <OrbitControls enableZoom={false} enableRotate={false} />
                  </Suspense>
                </Canvas>
              </div>
            </Parallax>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
