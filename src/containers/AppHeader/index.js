import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import AppbarDesktop from './AppbarDesktop';
import AppbarMobile from './AppbarMobile';

class AppHeader extends Component {

  render() {
    const { screen, openDrawer, history } = this.props;

    return (
      <React.Fragment>
        {
          (screen.width <= 700)
            ? (
              <AppbarMobile
                openDrawer={openDrawer}
                history={history}
              />
            ) : <AppbarDesktop history={history} />
        }
      </React.Fragment>
    );
  }
}

AppHeader.propTypes = {
  screen: PropTypes.object.isRequired,
  openDrawer: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  actionCartsGetStart: PropTypes.func.isRequired,
  actionCartsGetSuccess: PropTypes.func.isRequired,
  actionCartsGetFailure: PropTypes.func.isRequired,
  actionWishlistsGetStart: PropTypes.func.isRequired,
  actionWishlistsGetSuccess: PropTypes.func.isRequired,
  actionWishlistsGetFailure: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user, locations }) => ({ user, locations });

const mapDispachToProps = (dispatch) => bindActionCreators({}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispachToProps,
)(AppHeader));
