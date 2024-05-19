import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <img
              alt="..."
              className="img-center img-fluid"
              style={{ height: "2rem" }}
              src={require("assets/img/ksp-logo.png")}
            />
            <span>PrivacyOps </span>
          </NavbarBrand>
          <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Designed and Coded by SVM
          </UncontrolledTooltip>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  PrivacyOps
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem>
              <NavLink to="/" tag={Link}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/info" tag={Link}>
                Learn
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="https://gamified-privacy-education-with-gemini-llm.vercel.app/"
                tag={Link}
              >
                Gamified Quiz
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Getting started
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="https://annauniv0-my.sharepoint.com/:w:/g/personal/2021503568_student_annauniv_edu/EcjnBO-aDOJIqB0d6BjtRNUB1lUkD4-BoTeJXdI0i7OGtA?e=YC8Qo5">
                  <i className="tim-icons icon-paper" />
                  Documentation
                </DropdownItem>

                {/* <DropdownItem tag={Link} to="/register-page">
                  <i className="tim-icons icon-bullet-list-67" />
                  Register Page
                </DropdownItem> */}
                <DropdownItem
                  tag={Link}
                  to="https://drive.google.com/drive/folders/1QYJ-V8tKhBRQxXGOX2B6VoIeAJLoYbid"
                >
                  <i className="tim-icons icon-image-02" />
                  Drive Link
                </DropdownItem>
                <DropdownItem
                  tag={Link}
                  to="https://github.com/J-B-Mugundh/PrivacyOps"
                >
                  <i className="tim-icons icon-single-02" />
                  GitHub Link
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Button
              href="https://happy-bush-0bf29c700.5.azurestaticapps.net/"
              className="ml-2"
            >
              Visit PrivacyOps
            </Button>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
