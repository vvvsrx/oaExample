/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Header from '../Header';
import LeftNavigation from '../Navigation/Left';
import Footer from '../Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className="m-grid m-grid--hor m-grid--root m-page">
        <Header />
        <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
          <button
            className="m-aside-left-close  m-aside-left-close--skin-dark "
            id="m_aside_left_close_btn"
          >
            <i className="la la-close" />
          </button>
          <LeftNavigation />
          <div className="m-grid__item m-grid__item--fluid m-wrapper">
            <div className="m-subheader ">
              <div className="d-flex align-items-center">
                <div className="mr-auto">
                  <h3 className="m-subheader__title ">Title</h3>
                </div>
              </div>
            </div>
            <div className="m-content">{this.props.children}</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
