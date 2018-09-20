import React, { Component } from 'react';
import './Footer.css';
import { Grid, Row, Col } from 'react-bootstrap';
// Icons from flaticon.com
import logo from './logo.svg';
import fb from './fb.svg';
import ig from './ig.svg';
import yt from './yt.svg';
import twitter from './twitter.svg';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <Grid>
          <Row>
            <Col sm={4}>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </Col>
            <Col sm={4}>
              <ul>
                <li><a href="#">Data</a></li>
                <li><a href="#">Recruitment</a></li>
                <li><a href="#">Analytics</a></li>
              </ul>
            </Col>
            <Col sm={4}>
              <div className="Footer-logo-social">
                <img src={logo} className="" alt="Logo" width="50px"/>
                <div>Data Inc. &#169;</div>
                <ul>
                  <li>
                    <a href="#"><img src={fb} className="" alt="Facebook" width="25px"/></a>
                  </li>
                  <li>
                    <a href="#"><img src={ig} className="" alt="Instagram" width="25px"/></a>
                  </li>
                  <li>
                    <a href="#"><img src={yt} className="" alt="YouTube" width="25px"/></a>
                  </li>
                  <li>
                    <a href="#"><img src={twitter} className="" alt="Twitter" width="25px"/></a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Footer;
