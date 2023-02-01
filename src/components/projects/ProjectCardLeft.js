import React from 'react'
import { IconExternalLink } from "@tabler/icons";

const ProjectCardRight = (props) => {

    return (
      <div className="project-card left">
        <div className='title'>
          <h1>{props.projectName}</h1>
        </div>
        <div className="project-card-grid">
          <div className="img-container">
            <img src={props.img} />
          </div>
          <div className='info-container'>
            <div className='content'>
              <div className='summary-container'>
                <p className='section-summary'>
                  {props.projectSummary}
                </p>
              </div>
              <ul>
                {props.tech.map(tech => (
                <li>{tech.name}</li>
                ))}
              </ul>
              <ul>
                <a className='project-external' href={props.mainURL} target="_blank">
                  <span>
                  <IconExternalLink/> 
                    <div className='external-text-container'>
                      <p className='external-text'>Website</p>
                    </div>
                  </span>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProjectCardRight
