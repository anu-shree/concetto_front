
import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoutes = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (user.isSignedIn ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/auth/signin',
          state: { from: props.location },
        }}
      />
    ))
    }
  />
);

ProtectedRoutes.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(
  mapStateToProps,
  null,
)(ProtectedRoutes);
