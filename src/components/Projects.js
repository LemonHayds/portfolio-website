import { Container } from "react-bootstrap";
import ProjectCardRight from "./projects/ProjectCardRight";
import ProjectCardLeft from "./projects/ProjectCardLeft";
import projectData from "./projects/projectData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="projects" id="projects">
      <Container>
        <h2 className="section-title">Featured Projects</h2>
        <div>
          <div data-aos="fade-up">
            <ProjectCardRight
              img={projectData[0].img}
              projectName={projectData[0].projectName}
              projectSummary={projectData[0].projectSummary}
              tech={projectData[0].tech}
              mainURL={projectData[0].mainURL}
              githubURL={projectData[0].githubURL}
              videoURL={projectData[0].videoURL}
            />
          </div>

          <div data-aos="fade-up">
            <ProjectCardLeft
              data-aos="fade-up"
              img={projectData[3].img}
              projectName={projectData[3].projectName}
              projectSummary={projectData[3].projectSummary}
              tech={projectData[3].tech}
              mainURL={projectData[3].mainURL}
              githubURL={projectData[3].githubURL}
              videoURL={projectData[3].videoURL}
            />
          </div>

          <div data-aos="fade-up">
            <ProjectCardRight
              data-aos="fade-up"
              img={projectData[2].img}
              projectName={projectData[2].projectName}
              projectSummary={projectData[2].projectSummary}
              tech={projectData[2].tech}
              mainURL={projectData[2].mainURL}
              githubURL={projectData[2].githubURL}
              videoURL={projectData[2].videoURL}
            />
          </div>

          <div data-aos="fade-up">
            <ProjectCardLeft
              data-aos="fade-up"
              img={projectData[1].img}
              projectName={projectData[1].projectName}
              projectSummary={projectData[1].projectSummary}
              tech={projectData[1].tech}
              mainURL={projectData[1].mainURL}
              githubURL={projectData[1].githubURL}
              videoURL={projectData[1].videoURL}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
