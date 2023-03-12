import React from "react";
import { IconExternalLink, IconVideo, IconBrandGithub } from "@tabler/icons";
import Parallax from "react-rellax";

const ProjectCardRight = (props) => {
  return (
    <div className="project-card right">
      <div className="title">
        <Parallax speed={0.1}>
          <h1>{props.projectName}</h1>
        </Parallax>
      </div>
      <div className="project-card-grid">
        <div className="img-container">
          <Parallax speed={0.1}>
            <img src={props.img} />
          </Parallax>
        </div>
        <div className="info-container">
          <div className="content">
            <div className="summary-container">
              <p className="section-summary">{props.projectSummary}</p>
            </div>
            <ul>
              {props.tech.map((tech) => (
                <li key={tech.name}>{tech.name}</li>
              ))}
            </ul>
            <ul>
            <div className="external-links">

              <a
                title="Github Repository"
                className="project-external"
                href={props.githubURL}
                target="_blank"
                >
                <IconBrandGithub />
              </a>

              { props.videoURL &&
              <a
                title="Video/Demo"
                className="project-external"
                href={props.videoURL}
                target="_blank"
              >
                <IconVideo />
              </a>
              } 

              { props.githubURL &&
              <a
                title="Company/Project Website"
                className="project-external"
                href={props.mainURL}
                target="_blank"
              >
                <IconExternalLink />
              </a>
              }
            </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardRight;
