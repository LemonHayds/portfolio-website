import { Container, Row, Col } from "react-bootstrap";
import ProjectCardRight from './projects/ProjectCardRight'
import ProjectCardLeft from './projects/ProjectCardLeft'
import projectData from "./projects/projectData";

export const Projects = () => {

  return (
    <section className="projects" id="projects">
      <Container>
        <h2 className="section-title">
          Featured Projects
        </h2>
        <div>
          <ProjectCardRight 
            img={projectData[0].img}
            projectName={projectData[0].projectName}
            projectSummary={projectData[0].projectSummary}
            tech={projectData[0].tech}
            mainURL={projectData[0].mainURL}
            githubURL={projectData[0].githubURL}
          />
          <ProjectCardLeft 
            img={projectData[1].img}
            projectName={projectData[1].projectName}
            projectSummary={projectData[1].projectSummary}
            tech={projectData[1].tech}
            mainURL={projectData[1].mainURL}
            githubURL={projectData[1].githubURL}
          />
          <ProjectCardRight 
            img={projectData[2].img}
            projectName={projectData[2].projectName}
            projectSummary={projectData[2].projectSummary}
            tech={projectData[2].tech}
            mainURL={projectData[2].mainURL}
            githubURL={projectData[2].githubURL}
          />
        </div>

      </Container>
    </section>
  )
}
