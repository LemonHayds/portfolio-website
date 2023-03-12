import React from "react";
import { IconExternalLink, IconVideo, IconBrandGithub } from "@tabler/icons";

const ProjectCardLeft = (props) => {
  return (
    <div className="project-card left">
      <div className="title">
        <h1>{props.projectName}</h1>
      </div>
      <div className="project-card-grid">
        <div className="img-container">
          <img src={props.img} />
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
            <div className="external-links">
              <a
                title="Company/Project Website"
                className="project-external"
                href={props.mainURL}
                target="_blank"
              >
                <IconExternalLink />
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
                title="Github Repository"
                className="project-external"
                href={props.githubURL}
                target="_blank"
                >
                  <IconBrandGithub />
                </a>
              }


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardLeft;
