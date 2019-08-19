import React from "react";
import { Link } from "react-router-dom";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo hide-on-med-and-down">
          Projects<b className="blue-text">Archive</b>
        </Link>

        <Link to="/" className="brand-logo left hide-on-large-only">
          P<b className="blue-text">A</b>
        </Link>
        {auth.isEmpty ? (
          <SignedOutLinks />
        ) : (
          <SignedInLinks profile={profile} />
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  console.log(state);

  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
