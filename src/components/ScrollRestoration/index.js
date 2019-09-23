import { Component } from 'react';
import withRouter from 'react-router-dom/withRouter';
import PropTypes from 'prop-types';

import {
  isBrowser,
  getScrollPage,
  getScrollElement,
  scrollTo,
  scrollToElement,
} from './utils';

class ScrollRestoration extends Component {
  state = {
    // stock location key with scroll associate
    url: new Map(),
  }

  componentDidMount = () => {
    window.addEventListener('popstate', this.detectPop);
  }

  componentWillUnmount = () => {
    window.removeEventListener('popstate', this.detectPop);
  }

  shouldComponentUpdate = (nextProps) => {
    if (!isBrowser()) return false;
    const { location } = this.props;
    const { url } = this.state;
    // location before change url
    const actual = location;
    // location after change url
    const next = nextProps.location;
    // the first page has not key, set "enter" for key
    const key = actual.key || 'enter';

    // if hash => let the normal operation of the browser
    const locationChanged = (next.pathname !== actual.pathname
      || next.search !== actual.search)
      && next.hash === '';
    const { elementID } = this.props;

    // get scroll of the page or the element before change location
    const scroll = elementID
      ? getScrollElement(elementID)
      : getScrollPage();

    if (locationChanged) {
      // pass page or element scroll to top
      if (elementID) scrollToElement(0, elementID);
      else scrollTo(0);
      // save scroll with key location
      url.set(key, scroll);
    }
    // never render
    return false;
  }

  /**
   * callback for event popstate
   *add event for click on previous or next browser button
   * @memberof ScrollMemory
   */
  detectPop = (location) => {
    if (!isBrowser()) return;
    const { state } = location;
    const { url } = this.state;
    // key or enter page
    const key = state ? state.key : 'enter';
    // get the next for scroll position
    const nextFind = url.get(key);

    // if find in url map => scroll to position
    const { elementID } = this.props;
    if (nextFind) {
      if (elementID) scrollToElement(nextFind, elementID);
      else scrollTo(nextFind);
    }
  }

  render() {
    return null;
  }
}

ScrollRestoration.propTypes = {
  location: PropTypes.object.isRequired,
  elementID: PropTypes.string,
};

export default withRouter(ScrollRestoration);
