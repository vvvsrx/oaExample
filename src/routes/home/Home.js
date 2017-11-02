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
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className="row">
        <div className="col-xl-4">
          <div className="m-portlet m-portlet--bordered-semi m-portlet--widget-fit m-portlet--full-height m-portlet--skin-light ">
            <div className="m-portlet__head">
              <div className="m-portlet__head-caption">
                <div className="m-portlet__head-title">
                  <h3 className="m-portlet__head-text m--font-light">
                    Activity
                  </h3>
                </div>
              </div>
              <div className="m-portlet__head-tools">
                <ul className="m-portlet__nav">
                  <li
                    className="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push"
                    data-dropdown-toggle="hover"
                  >
                    <a
                      href="#"
                      className="m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl"
                    >
                      <i className="fa fa-genderless m--font-light" />
                    </a>
                    <div className="m-dropdown__wrapper">
                      <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" />
                      <div className="m-dropdown__inner">
                        <div className="m-dropdown__body">
                          <div className="m-dropdown__content">
                            <ul className="m-nav">
                              <li className="m-nav__section m-nav__section--first">
                                <span className="m-nav__section-text">
                                  Quick Actions
                                </span>
                              </li>
                              <li className="m-nav__item">
                                <a href="" className="m-nav__link">
                                  <i className="m-nav__link-icon flaticon-share" />
                                  <span className="m-nav__link-text">
                                    Activity
                                  </span>
                                </a>
                              </li>
                              <li className="m-nav__item">
                                <a href="" className="m-nav__link">
                                  <i className="m-nav__link-icon flaticon-chat-1" />
                                  <span className="m-nav__link-text">
                                    Messages
                                  </span>
                                </a>
                              </li>
                              <li className="m-nav__item">
                                <a href="" className="m-nav__link">
                                  <i className="m-nav__link-icon flaticon-info" />
                                  <span className="m-nav__link-text">FAQ</span>
                                </a>
                              </li>
                              <li className="m-nav__item">
                                <a href="" className="m-nav__link">
                                  <i className="m-nav__link-icon flaticon-lifebuoy" />
                                  <span className="m-nav__link-text">
                                    Support
                                  </span>
                                </a>
                              </li>
                              <li className="m-nav__separator m-nav__separator--fit" />
                              <li className="m-nav__item">
                                <a
                                  href="#"
                                  className="btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm"
                                >
                                  Cancel
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="m-portlet__body">
              <div className="m-widget17">
                <div className="m-widget17__visual m-widget17__visual--chart m-portlet-fit--top m-portlet-fit--sides m--bg-danger">
                  <div className="m-widget17__chart" style={{ height: 320 }}>
                    <canvas id="m_chart_activities" />
                  </div>
                </div>
                <div className="m-widget17__stats">
                  <div className="m-widget17__items m-widget17__items-col1">
                    <div className="m-widget17__item">
                      <span className="m-widget17__icon">
                        <i className="flaticon-truck m--font-brand" />
                      </span>
                      <span className="m-widget17__subtitle">Delivered</span>
                      <span className="m-widget17__desc">15 New Paskages</span>
                    </div>
                    <div className="m-widget17__item">
                      <span className="m-widget17__icon">
                        <i className="flaticon-paper-plane m--font-info" />
                      </span>
                      <span className="m-widget17__subtitle">Reporeted</span>
                      <span className="m-widget17__desc">72 Support Cases</span>
                    </div>
                  </div>
                  <div className="m-widget17__items m-widget17__items-col2">
                    <div className="m-widget17__item">
                      <span className="m-widget17__icon">
                        <i className="flaticon-pie-chart m--font-success" />
                      </span>
                      <span className="m-widget17__subtitle">Ordered</span>
                      <span className="m-widget17__desc">72 New Items</span>
                    </div>
                    <div className="m-widget17__item">
                      <span className="m-widget17__icon">
                        <i className="flaticon-time m--font-danger" />
                      </span>
                      <span className="m-widget17__subtitle">Arrived</span>
                      <span className="m-widget17__desc">
                        34 Upgraded Boxes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
