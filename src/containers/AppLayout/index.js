import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import AppHeader from '../AppHeader';
import Footer from '../Footer';
import ScrollTop from '../../components/ScrollTop';

class AppLayout extends Component {
  state = {
    drawer: false,
    isScroll: false,
  }

  openDrawer = () => {
    this.setState({ drawer: true });
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  closeDrawer = () => {
    this.setState({ drawer: false });
  }

  handleScroll = () => {
    if (window.pageYOffset > 0) {
      this.setState({ isScroll: true });
    } else {
      this.setState({ isScroll: false });
    }
  }

  render() {
    const { children, screen } = this.props;
    const { isScroll } = this.state;

    return (
      <div>
        <AppHeader
          screen={screen}
          openDrawer={this.openDrawer}
        />
        <div style={{ minHeight: '75vh' }}>
          {children}
        </div>
        {isScroll && <ScrollTop /> }
        <Footer />
      </div>
    );
  }
}


AppLayout.propTypes = {
  children: PropTypes.array.isRequired,
  screen: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = ({ user, screen }) => ({ user, screen });
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppLayout));
