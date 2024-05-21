import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import CaseForm from "./components/CaseForm";
import CaseTable from "./components/CaseList";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Navbar, NavbarBrand, Nav, Button, Container } from "react-bootstrap";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("district");
    window.location.reload();
  };

  const token = localStorage.getItem("token");
  let user = null;
  if (token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    user = JSON.parse(window.atob(base64));
  }

  return (
    <>
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#343a40",
          padding: "10px 20px",
          transition: "all 0.3s ease-in-out",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <NavbarBrand href="/" className="d-flex align-items-center" style={{ color: "#fff", fontSize: "1.5rem", fontWeight: "bold" }}>
            <img
              alt="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Seal_of_Karnataka.svg/1200px-Seal_of_Karnataka.svg.png"
              style={{
                height: 40,
                width: 40,
                marginRight: "10px",
                animation: "rotate 2s linear infinite",
              }}
            />
            PrivacyOps
          </NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "#fff" }} />
          <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: "flex-end" }}>
            <Nav className="ms-auto" style={{ display: "flex", alignItems: "center", color: "#fff" }}>
              <Nav.Link
                href="/"
                style={{
                  color: "#fff",
                  marginRight: "15px",
                  transition: "color 0.3s ease-in-out",
                }}
                onMouseOver={(e) => {
                  e.target.style.color = "#ff4757";
                }}
                onMouseOut={(e) => {
                  e.target.style.color = "#fff";
                }}
              >
                Home
              </Nav.Link>
              {user && (
                <Nav.Link
                  href="/create"
                  style={{
                    color: "#fff",
                    marginRight: "15px",
                    transition: "color 0.3s ease-in-out",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = "#ff4757";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "#fff";
                  }}
                >
                  New Case
                </Nav.Link>
              )}
              {user && (
                <Nav.Link
                  href="/cases"
                  style={{
                    color: "#fff",
                    marginRight: "15px",
                    transition: "color 0.3s ease-in-out",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = "#ff4757";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "#fff";
                  }}
                >
                  Case Records
                </Nav.Link>
              )}
              {user && (
                <Button
                  onClick={handleLogout}
                  style={{
                    backgroundColor: "#28a745",
                    borderColor: "#28a745",
                    transition: "background-color 0.3s ease-in-out, border-color 0.3s ease-in-out",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#e84118";
                    e.target.style.borderColor = "#e84118";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#28a745";
                    e.target.style.borderColor = "#28a745";
                  }}
                >
                  Logout
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        {user && <Route path="/" exact element={<Main user={user} />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/cases" exact element={<CaseTable user={user} />} />
        <Route path="/create" element={<CaseForm user={user} />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
