import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function InformationPage() {
  return (
    <>
      <div className="wrapper">
        <div className="page-header">
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  Privacy Education & Cybersecurity <br />
                  <span className="text-white">Essentials</span>
                </h1>
                <p className="text-white mb-3">
                Our platform offers comprehensive resources and guides to educate individuals about privacy protection, cybersecurity, and safe online practices.
                </p>
                <p>
                    Whether you're a beginner or an expert, our educational content caters to all levels, providing valuable insights and actionable tips.
                  </p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">
                    Start Learning Now
                  </p>
                  <Button
                    className="btn-link"
                    color="success"
                    href="#education"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" /> Explore
                    Education
                  </Button>
                </div>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#education"
                    >
                      <i className="fab fa-youtube" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#education"
                    >
                      <i className="fab fa-youtube" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#education"
                    >
                      <i className="fab fa-youtube" />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="5">
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/etherum.png")}
                />
              </Col>
            </Row>
          </div>
        </div>
        {/* <section className="section section-lg" style={{marginTop: "-200px"}}>
          <Container>
            <Row className="row-grid justify-content-between">
              <Col className="mt-lg-5" md="5">
                <div className="pl-md-5">
                  <h1>
                    Privacy & Cybersecurity <br />
                    Education
                  </h1>
                  <p>
                    Our platform offers comprehensive resources and guides to educate individuals about privacy protection, cybersecurity, and safe online practices.
                  </p>
                  <br />
                  <p>
                    Whether you're a beginner or an expert, our educational content caters to all levels, providing valuable insights and actionable tips.
                  </p>
                  <br />
                  <a
                    className="font-weight-bold text-info mt-5"
                    href="#education"
                  >
                    View All Courses{" "}
                    <i className="tim-icons icon-minimal-right text-info" />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}
        <section className="section section-lg" style={{marginTop: "-120px"}}>
  <Container>
    <Row className="justify-content-center">
      <Col lg="12">
        <h1 className="text-center">Your Best Legal Education Partner</h1>
        <Row className="row-grid justify-content-center"  style={{marginTop: "-150px"}}>
        <Col lg="4">
  <div className="info">
    <div className="icon icon-primary">
      <i className="tim-icons icon-book-bookmark" />
    </div>
    <h4 className="info-title">Comprehensive Legal Courses</h4>
    <hr className="line-primary" />
    <p>
      Gain access to a wide range of comprehensive legal courses covering various aspects of law, from constitutional law to intellectual property rights.
    </p>
  </div>
</Col>
<Col lg="4">
  <div className="info">
    <div className="icon icon-warning">
      <i className="tim-icons icon-settings-gear-63" />
    </div>
    <h4 className="info-title">Interactive Learning Modules</h4>
    <hr className="line-warning" />
    <p>
      Engage with interactive learning modules designed to enhance your understanding of legal concepts and principles through practical exercises and simulations.
    </p>
  </div>
</Col>
<Col lg="4">
  <div className="info">
    <div className="icon icon-success">
      <i className="tim-icons icon-atom" />
    </div>
    <h4 className="info-title">Expert Legal Instructors</h4>
    <hr className="line-success" />
    <p>
      Learn from experienced legal professionals who bring real-world expertise and insights into the classroom, guiding you towards a successful legal career.
    </p>
  </div>
</Col>

        </Row>
      </Col>
    </Row>
  </Container>
</section>
        <section className="section section-lg section-safe" >
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="6">
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
                  Satisfied Learners
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
                      <p className="card-category text-white">
                        Courses Available
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <div className="px-md-5">
                <hr className="line-success" />
                <h3>Educational Features</h3>
                <p>
                  Our platform offers a range of features designed to enhance your learning experience and empower you with knowledge in privacy education and cybersecurity.
                </p>
                <ul className="list-unstyled mt-5">
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-vector" />
                      </div>
                      <div className="ml-3">
                        <h6>Comprehensive Course Content</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-tap-02" />
                      </div>
                      <div className="ml-3">
                        <h6>Interactive Learning Modules</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div className="icon icon-success mb-2">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <div className="ml-3">
                        <h6>Expert Instructor Guidance</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section className="section section-lg section-coins" style={{marginTop: "-300px"}}>
        <Container>
          <Row>
            <Col md="6">
              <div className="info">
                <div className="icon icon-primary">
                  <i className="tim-icons icon-money-coins" />
                </div>
                <h4 className="info-title">Transparent Pricing</h4>
                <hr className="line-primary" />
                <p>
                  Our platform offers transparent pricing plans, ensuring affordability and accessibility to all learners.
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className="info">
                <div className="icon icon-warning">
                  <i className="tim-icons icon-chart-pie-36" />
                </div>
                <h4 className="info-title">Progress Tracking</h4>
                <hr className="line-warning" />
                <p>
                  Track your progress and monitor your learning journey with our built-in progress tracking tools.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
      <section className="section section-lg" id="education">
      <Container>
  <h2 className="text-center">Featured Videos</h2>
  <Row className="row-grid justify-content-center">
    <Col md="6">
      <Card className="card-video">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/inWWhr5tnEA?si=9mrWubd1B0Khq4gY"
          title="Privacy Education Video 1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Card>
    </Col>
    <Col md="6">
      <Card className="card-video">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed//NJBBE_SN90A?si=86u-zu05P93J4pvN"
          title="Privacy Education Video 2"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Card>
    </Col>
  </Row>
</Container>

      </section>
      <Footer />
    </div>
  </>
);
}

