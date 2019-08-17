import React from 'react';

import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  return (
    <div className='project-list section'>
      {projects &&
        projects.map((project, index) => {
          return <ProjectSummary key={index} project={project} />;
        })}
    </div>
  );
};

export default ProjectList;
