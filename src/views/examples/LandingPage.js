/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";

export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
      
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png")}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png")}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png")}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png")}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
            <Col lg="6" md="6">
  <h1 className="text-white">
    We keep your privacy <br />
    <span className="text-white">secured</span>
  </h1>
  <p className="text-white mb-3">
    Your case is our top priority. We handle it with utmost confidentiality and professionalism.
  </p>
  <div className="btn-wrapper mb-3">
    <p className="category text-success d-inline">
      Get Started Today
    </p>
    <Button
      className="btn-link"
      color="success"
      href="#apply"
      onClick={(e) => e.preventDefault()}
      size="sm"
    >
      <i className="tim-icons icon-minimal-right" /> Apply Now
    </Button>
  </div>
  <div className="btn-wrapper">
    <div className="button-container">
      <Button
        className="btn-icon btn-simple btn-round btn-neutral"
        color="default"
        href="#pablo"
        onClick={(e) => e.preventDefault()}
      >
        <i className="fas fa-user-secret" /> 
      </Button>
      <Button
        className="btn-icon btn-simple btn-round btn-neutral"
        color="default"
        href="#pablo"
        onClick={(e) => e.preventDefault()}
      >
        <i className="fas fa-briefcase" />
      </Button>
      <Button
        className="btn-icon btn-simple btn-round btn-neutral"
        color="default"
        href="#pablo"
        onClick={(e) => e.preventDefault()}
      >
        <i className="fas fa-handshake" />
      </Button>
    </div>
  </div>
</Col>
<Col lg="4" md="5">
  <img
    alt="..."
    className="img-fluid"
    src={require("assets/img/bitcoin.png")}
  />
</Col>

            </Row>
          </div>
        </div>
        <section className="section section-lg">
  <section className="section">
    <img
      alt="..."
      className="path"
      src={require("assets/img/path4.png")}
    />
    <Container>
      <Row className="row-grid justify-content-between">
        <Col className="mt-lg-5" md="5">
          <Row>
            <Col className="px-2 py-2" lg="6" sm="12">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="tim-icons icon-trophy text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <CardTitle tag="p">3,237</CardTitle>
                        <p />
                        <p className="card-category">Cases Won</p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col className="px-2 py-2" lg="6" sm="12">
              <Card className="card-stats upper bg-default">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="tim-icons icon-coins text-white" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <CardTitle tag="p">3,653</CardTitle>
                        <p />
                        <p className="card-category">Evidence Collected</p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="px-2 py-2" lg="6" sm="12">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="tim-icons icon-gift-2 text-info" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <CardTitle tag="p">593</CardTitle>
                        <p />
                        <p className="card-category">Suspects Apprehended</p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col className="px-2 py-2" lg="6" sm="12">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="tim-icons icon-credit-card text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <CardTitle tag="p">10,783</CardTitle>
                        <p />
                        <p className="card-category">Reports Filed</p>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md="6">
          <div className="pl-md-5">
            <h1>
              Case <br />
              Statistics
            </h1>
            <p>
              Our system is adept at managing every aspect of criminal cases, from evidence collection to court proceedings, ensuring a seamless process from start to finish.
            </p>
            <br />
            <p>
              When navigating through complex legal matters, trust our platform to streamline your operations and enhance efficiency.
            </p>
            <br />
            <a
              className="font-weight-bold text-info mt-5"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              View All Cases{" "}
              <i className="tim-icons icon-minimal-right text-info" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
</section>
<section className="section section-lg">
  <img
    alt="..."
    className="path"
    src={require("assets/img/path4.png")}
  />
  <img
    alt="..."
    className="path2"
    src={require("assets/img/path5.png")}
  />
  <img
    alt="..."
    className="path3"
    src={require("assets/img/path2.png")}
  />
  <Container>
    <Row className="justify-content-center">
      <Col lg="12">
        <h1 className="text-center">Your Best Legal Partner</h1>
        <Row className="row-grid justify-content-center">
          <Col lg="3">
            <div className="info">
              <div className="icon icon-primary">
                <i className="tim-icons icon-money-coins" />
              </div>
              <h4 className="info-title">Transparent Fees</h4>
              <hr className="line-primary" />
              <p>
                Our system ensures clarity in fee structures, providing transparent financial transactions for all legal services rendered.
              </p>
            </div>
          </Col>
          <Col lg="3">
            <div className="info">
              <div className="icon icon-warning">
                <i className="tim-icons icon-chart-pie-36" />
              </div>
              <h4 className="info-title">Effective Representation</h4>
              <hr className="line-warning" />
              <p>
                Count on us to deliver high-quality legal representation, backed by a track record of success in resolving complex legal matters.
              </p>
            </div>
          </Col>
          <Col lg="3">
            <div className="info">
              <div className="icon icon-success">
                <i className="tim-icons icon-single-02" />
              </div>
              <h4 className="info-title">Experienced Legal Team</h4>
              <hr className="line-success" />
              <p>
                Our team comprises seasoned legal professionals dedicated to achieving favorable outcomes for our clients.
              </p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
</section>
<section className="section section-lg section-safe">
  <img
    alt="..."
    className="path"
    src={require("assets/img/path5.png")}
  />
  <Container>
    <Row className="row-grid justify-content-between">
      <Col md="5">
        <img
          alt="..."
          className="img-fluid floating"
          src={require("assets/img/chester-wade.jpg")}
        />
        <Card className="card-stats bg-danger">
          <CardBody>
            <div className="justify-content-center">
              <div className="numbers">
                <CardTitle tag="p">100%</CardTitle>
                <p className="card-category text-white">Secure</p>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className="card-stats bg-info">
          <CardBody>
            <div className="justify-content-center">
              <div className="numbers">
                <CardTitle tag="p">573 K</CardTitle>
                <p className="card-category text-white">
                  Satisfied Clients
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className="card-stats bg-default">
          <CardBody>
            <div className="justify-content-center">
              <div className="numbers">
                <CardTitle tag="p">10 425</CardTitle>
                <p className="card-category text-white">Cases Handled</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col md="6">
        <div className="px-md-5">
          <hr className="line-success" />
          <h3>Outstanding Features</h3>
          <p>
            Our platform boasts an array of features designed to optimize your legal processes, ensuring efficiency and efficacy in handling criminal cases.
          </p>
          <ul className="list-unstyled mt-5">
            <li className="py-2">
              <div className="d-flex align-items-center">
                <div className="icon icon-success mb-2">
                  <i className="tim-icons icon-vector" />
                </div>
                <div className="ml-3">
                  <h6>Comprehensive Case Management</h6>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="d-flex align-items-center">
                <div className="icon icon-success mb-2">
                  <i className="tim-icons icon-tap-02" />
                </div>
                <div className="ml-3">
                  <h6>Secure Document Handling</h6>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="d-flex align-items-center">
                <div className="icon icon-success mb-2">
                  <i className="tim-icons icon-single-02" />
                </div>
                <div className="ml-3">
                  <h6>Dedicated Legal Support</h6>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  </Container>
</section>

        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
          <Col md="12">
            <Card className="card-chart card-plain">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <hr className="line-info" />
                    <h5 className="card-category">Total Cases Filed</h5>
                    <CardTitle tag="h2">Performance</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={bigChartData.data}
                    options={bigChartData.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </section>
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png")}
          />
          {/* <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  Choose the coin{" "}
                  <span className="text-info">that fits your needs</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/bitcoin.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Light Coin</h4>
                        <span>Plan</span>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>50 messages</ListGroupItem>
                        <ListGroupItem>100 emails</ListGroupItem>
                        <ListGroupItem>24/7 Support</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/etherum.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Dark Coin</h4>
                        <span>Plan</span>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>150 messages</ListGroupItem>
                        <ListGroupItem>1000 emails</ListGroupItem>
                        <ListGroupItem>24/7 Support</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="success">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ripp.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Bright Coin</h4>
                        <span>Plan</span>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>350 messages</ListGroupItem>
                        <ListGroupItem>10K emails</ListGroupItem>
                        <ListGroupItem>24/7 Support</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container> */}
        </section>
        <Footer />
      </div>
    </>
  );
}
