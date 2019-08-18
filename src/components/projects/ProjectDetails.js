import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class ProjectDetails extends Component {
   state = {
    project: {}
  }

componentWilMount( ){
  
}


  render() {
    const id = this.props.match.params.id;
    console.log("ad",this.props);

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
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestoreConnect;
  const project = projects ? projects[id] : null;
  return {
    project: project
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'projects'
    }
  ])
)(ProjectDetails);
