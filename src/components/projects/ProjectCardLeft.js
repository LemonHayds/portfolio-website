import React from "react";
import { IconExternalLink } from "@tabler/icons";

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
            <a
              title="Company Website"
              className="project-external"
              href={props.mainURL}
              target="_blank"
            >
              <IconExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardLeft;
