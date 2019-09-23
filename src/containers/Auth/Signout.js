import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loading from '../../components/Loading';

class Signout extends Component {
  componentWillMount = () => {
    const { actionSignout, history } = this.props;
    actionSignout();
    history.push('/');
  }

  render() {
    return (
      <Loading />
    );
  }
}


Signout.propTypes = {
  actionSignout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapDispachToProps = (dispatch) => bindActionCreators(
  {}, dispatch,
);

export default connect(
  null,
  mapDispachToProps,
)(Signout);
