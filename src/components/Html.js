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
import serialize from 'serialize-javascript';
import config from '../config';

/* eslint-disable react/no-danger */

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        cssText: PropTypes.string.isRequired,
      }).isRequired,
    ),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    app: PropTypes.object, // eslint-disable-line
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
  };

  render() {
    const { title, description, styles, scripts, app, children } = this.props;
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {scripts.map(script => (
            <link key={script} rel="preload" href={script} as="script" />
          ))}
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link
            rel="stylesheet"
            href="assets/metronic/vendors/base/vendors.bundle.css"
          />
          <link
            rel="stylesheet"
            href="assets/metronic/demo/default/base/style.bundle.css"
          />
          {styles.map(style => (
            <style
              key={style.id}
              id={style.id}
              dangerouslySetInnerHTML={{ __html: style.cssText }}
            />
          ))}
        </head>
        <body className="m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default">
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          <script
            type="text/javascript"
            src="assets/metronic/vendors/base/vendors.bundle.js"
          />
          <script
            type="text/javascript"
            src="assets/metronic/demo/default/base/scripts.bundle.js"
          />
          <script
            dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }}
          />
          {scripts.map(script => <script key={script} src={script} />)}
        </body>
      </html>
    );
  }
}

export default Html;
