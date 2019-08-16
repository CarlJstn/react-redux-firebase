import React from 'react';

const ProjectDetails = props => {
  const id = props.match.params.id;

  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto tempora impedit cumque voluptate aliquam corrupti sint voluptas repudiandae. At sunt provident velit consequatur accusamus, a praesentium unde reprehenderit aliquid ea.</p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted by The Net Ninja</div>
          <div>16th August, 10:43am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
