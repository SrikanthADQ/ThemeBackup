import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Row, Col } from 'antd';
import * as utils from '../utils';

class Footer extends React.PureComponent {
  render() {
    const { pathname } = this.props.location;
    const isZhCN = utils.isZhCN(pathname);
    return (
      <footer id="footer" className="dark">
        <div className="footer-wrap">
          <Row>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>uList Landing</h2>
                <div>
                  <a target="_blank " href="#">
                    <FormattedMessage id="app.footer.repo" />
                  </a>
                </div>
                <div>
                  <a target="_blank " href="#">
                    <FormattedMessage id="app.footer.template" />
                  </a>
                </div>
                <div>
                  <a href="#" target="_blank ">
                    <FormattedMessage id="app.footer.chinamirror" />
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2><FormattedMessage id="app.footer.links" /></h2>
                <div>
                  <a target="_blank " href="#">
                    uList Theme
                  </a>
                </div>
                <div>
                  <a target="_blank " href="https://pro.ant.design/">
                    uList Theme Pro
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2><FormattedMessage id="app.footer.community" /></h2>
                <div>
                  <a target="_blank" rel="noopener" href="#">
                    <FormattedMessage id="app.footer.issues" />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="#"
                  >
                    <FormattedMessage id="app.footer.work-with-us" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    );
  }
}

export default injectIntl(Footer);
