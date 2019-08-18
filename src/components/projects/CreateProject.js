import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = {
    title: "",
    content: "",
    error: ""
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, content } = this.state;
    if (title === "") {
      this.setState({ error: "Title cannot be empty" });
    } else if (content === "") {
      this.setState({ error: "Content cannot be empty" });
    } else this.props.createProject(this.state);
  };

  render() {
    const { auth, isLoading, isCreating } = this.props;
    const { error } = this.state;

    if (auth.isEmpty) {
      return <Redirect to="/signin" />;
    }

    if (!isLoading) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            {isCreating ? (
              <button className="btn blue lighten-1 z-depth-0" disabled>
                Creating....
              </button>
            ) : (
              <button className="btn blue lighten-1 z-depth-0">Create</button>
            )}

            <div className="red-text center">
              {error === "" ? null : <p>{error}</p>}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);

  return {
    auth: state.firebase.auth,
    isLoading: state.project.isLoading,
    isCreating: state.project.isCreating
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
