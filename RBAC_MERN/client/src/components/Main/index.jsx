import styles from "./styles.module.css";
import { ToastContainer } from "react-toastify";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Navbar,
  NavbarBrand,
  Nav,
  Button,
  Container,
  Row,
  Col
} from "react-bootstrap";
import UserDetails from "./UserDetails";

const Main = ({ user }) => {
  return (
    <div className="container">
      <div className={styles.main_container}>
      <div
  style={{
    textAlign: "center",
    marginBottom: "20px",
    animation: "fadeInDown 1s ease-in-out",
  }}
>
  <h1
    style={{
      color: "#4a90e2",
      fontSize: "3rem",
      fontWeight: "bold",
      animation: "pulse 1s infinite",
    }}
  >
    Welcome to PrivacyOps
  </h1>
  <UserDetails
    userId={user._id}
    style={{
      animation: "fadeInUp 1s ease-in-out",
    }}
  />
</div>



        <Card className="my-2" style={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <CardImg
            alt="Card image cap"
            src="https://img.freepik.com/free-vector/data-security-technology-background-vector-blue-tone_53876-112201.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714867200&semt=ais"
            style={{
              height: 180,
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5" style={{ color: "#4a90e2", fontWeight: "bold" }}>Secure Case Filing</CardTitle>
            <CardText style={{ fontSize: "1.1rem", color: "#333" }}>
              Comprehensive guide to filing a case securely and privately, within the bounds of the law. In just a few clicks, you are done. No more hassle.
            </CardText>
            {/* <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText> */}
            <br></br>
            <CardTitle tag="h5" style={{ color: "#4a90e2", fontWeight: "bold", textAlign: "center" }}>How to File a Case</CardTitle>
            <Container>
              <Row style={{ marginBottom: "20px" }}>
                <Col md={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src="https://img.icons8.com/ios-filled/50/4a90e2/identification-documents.png" alt="Case ID" />
                </Col>
                <Col md={10}>
                  <h6 style={{ color: "#4a90e2" }}>Step 1: Enter Case ID</h6>
                  <p>Start by entering a unique Case ID for your report. This helps in tracking the case efficiently.</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: "20px" }}>
                <Col md={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src="https://img.icons8.com/ios-filled/50/4a90e2/calendar--v1.png" alt="Date and Time" />
                </Col>
                <Col md={10}>
                  <h6 style={{ color: "#4a90e2" }}>Step 2: Date and Time of Incident</h6>
                  <p>Provide the exact date and time when the incident occurred. Accurate details ensure better case management.</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: "20px" }}>
                <Col md={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src="https://img.icons8.com/ios-filled/50/4a90e2/marker.png" alt="Location" />
                </Col>
                <Col md={10}>
                  <h6 style={{ color: "#4a90e2" }}>Step 3: Location</h6>
                  <p>Specify the location where the incident took place. This information is critical for investigations.</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: "20px" }}>
                <Col md={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src="https://img.icons8.com/ios-filled/50/4a90e2/user-male.png" alt="Victim Name" />
                </Col>
                <Col md={10}>
                  <h6 style={{ color: "#4a90e2" }}>Step 4: Victim Name</h6>
                  <p>Enter the name of the victim involved in the incident. Ensure that the name is accurate for record purposes.</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: "20px" }}>
                <Col md={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src="https://img.icons8.com/ios-filled/50/4a90e2/user-male.png" alt="Suspect Name" />
                </Col>
                <Col md={10}>
                  <h6 style={{ color: "#4a90e2" }}>Step 5: Suspect Name</h6>
                  <p>Enter the name of the suspect if known. This will aid in the investigation process.</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: "20px" }}>
                <Col md={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src="https://img.icons8.com/ios-filled/50/4a90e2/file.png" alt="Description" />
                </Col>
                <Col md={10}>
                  <h6 style={{ color: "#4a90e2" }}>Step 6: Description of Incident</h6>
                  <p>Provide a detailed description of the incident. Include all relevant information that can help in understanding the case better.</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: "20px" }}>
                <Col md={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src="https://img.icons8.com/ios-filled/50/4a90e2/file.png" alt="Charges" />
                </Col>
                <Col md={10}>
                  <h6 style={{ color: "#4a90e2" }}>Step 7: Charges</h6>
                  <p>Mention any charges that have been filed against the suspect. This is important for legal documentation.</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: "20px" }}>
                <Col md={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src="https://img.icons8.com/ios-filled/50/4a90e2/arrest.png" alt="Arrest Information" />
                </Col>
                <Col md={10}>
                  <h6 style={{ color: "#4a90e2" }}>Step 8: Arrest Information</h6>
                  <p>Provide details about any arrests made in relation to the case. Include the arresting officer's name and badge number.</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: "20px" }}>
                <Col md={2} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img src="https://img.icons8.com/ios-filled/50/4a90e2/evidence.png" alt="Evidence" />
                </Col>
                <Col md={10}>
                  <h6 style={{ color: "#4a90e2" }}>Step 9: Evidence</h6>
                  <p>List all evidence collected in connection to the case. Attach photos, videos, and any other relevant documentation.</p>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
        
      </div>
      <ToastContainer />
    </div>
  );
};

export default Main;
