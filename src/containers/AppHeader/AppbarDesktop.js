import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryString from 'query-string';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ShopTwoIcon from '@material-ui/icons/ShopTwoOutlined';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const styles = (theme) => ({
  root: {
    width: '100%',
    marginBottom: 112,
  },
  appbar: {
    boxShadow: theme.shadows[2],
  },
  none: {
    boxShadow: theme.shadows[0],
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logo: {
    width: 100,
    height: 'auto',
    marginRight: 10,
  },
  searchBar: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
    },
  },
  viewShopButton: {
    color: theme.palette.secondary.dark,
  },
  icon: {
    marginLeft: 5,
  },
  badge: {
    top: '36%',
    right: 8,
    width: 15,
    height: 15,
    backgroundColor: 'none',
    color: theme.palette.secondary.main,
  },
  button: {
    margin: theme.spacing.unit,
  },
  cartbutton: {
    backgroundColor: 'transparent',
    border: '0px',
  },
  expand: {
    color: theme.palette.primary.border,
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  list: {
    marginTop: 15,
  },
  toolbar: {
    paddingLeft: 5,
    paddingRight: 5,
  },
});

class AppBaar extends Component {
  state = {
    list: false,
    elevated: false,
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.onscroll);
  }

  onscroll = () => {
    const height = window.pageYOffset;
    const { elevated } = this.state;

    if (height === 0) {
      this.setState({ elevated: false });
      return;
    }
    if (elevated === true) return;
    if (height > 0) {
      this.setState({ elevated: true });
    }
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.onscroll);
  }

  listHandler = (e, t) => {
    this.setState({ list: t });
  }

  render() {
    const {
      classes, user, history,
    } = this.props;
    const { isSignedIn, carts } = user;
    const { elevated } = this.state;

    const badgeContent = carts.cart.length ? carts.cart.length : '';

    const { pathname } = history.location;
    const url = {
      redirect_to: pathname,
    };
    const stringifiedURL = queryString.stringify(url);

    return (
      <div className={classes.root}>
        <AppBar position="fixed" classes={{ root: elevated ? classes.appbar : classes.none }}>
          <Toolbar className={classes.toolbar}>
            <Button
              className={classes.viewShopButton}
              component={Link}
              to="/shops"
            >
              {'Go to shops'}
              <ShopTwoIcon className={classes.icon} />
            </Button>
            <Button
              className={classes.button}
              onMouseEnter={(e) => this.listHandler(e, true)}
              onMouseLeave={(e) => this.listHandler(e, false)}
              component={Link}
              to={isSignedIn ? '/account' : `/auth/signin?${stringifiedURL}`}
            >
              {isSignedIn ? 'My Account' : 'login / signup'}
            </Button>
            <Button
              className={classes.button}
              component={Link}
              to="/account/viewcart"
            >
              <Badge classes={{ badge: classes.badge }} badgeContent={badgeContent}>
                <ShoppingCartIcon />
              </Badge>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

AppBaar.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  screen: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired,
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
)(AppBaar));
