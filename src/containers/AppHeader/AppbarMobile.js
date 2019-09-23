import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    position: 'sticky',
    top: -55,
    zIndex: 299,
  },
  appbar: {
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    color: 'white',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  menuButton: {
    marginLeft: -12,
  },
  link: {
    textDecoration: 'none',
  },
  margin: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 3,
    // position: 'sticky',
    // background-color: yellow;
    // padding: 50px;
    // font-size: 20px;
  },
  badge: {
    top: '13%',
    right: -5,
    width: 15,
    height: 15,
    border: `2px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.getContrastText(theme.palette.secondary.main),
  },
});

class AppbarMobile extends React.Component {
  state = {
    anchorEl: null,
    isSticky: false,
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.scrollEvent);
  }

  scrollEvent = () => {
    const ele = document.querySelectorAll('input')[0].offsetParent.offsetParent.offsetParent;

    if (ele.offsetTop <= window.pageYOffset) {
      this.setState({ isSticky: true });
      return;
    }

    this.setState({ isSticky: false });
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.scrollEvent);
  }

  render() {
    const {
      classes, openDrawer } = this.props;
    const { isSticky } = this.state;

    const appbar = isSticky ? null : classes.appbar;

    return (
      <div className={classes.root}>
        <AppBar position="relative" classes={{ root: appbar }}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="secondary"
              aria-label="Menu"
              onClick={openDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>

        </AppBar>
      </div>
    );
  }
}

AppbarMobile.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  openDrawer: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  acitonCategoriesGet: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  user, screen, products, category,
}) => ({
  user, screen, products, category,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppbarMobile));
