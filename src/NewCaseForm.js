import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Container,
  Label,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";

import "assets/css/new-case-form.css";

function NewCaseForm({ createCase }) {
  const [newCase, setNewCase] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    createCase(newCase);
    setNewCase({});
  };

  return (
    <div className="section wrapper">
      <Container className="mt-5">
        <Row className="d-md-none mobile-quote-container">
          <Col>
            <div className="text-center">
              <img
                src="https://ksp.karnataka.gov.in/frontend/opt1/images/ksp_icons/ptckal.jpg"
                alt="Your Image"
              />
              <p className="quotes">
                Locked vault for your files
                <br />
                Privacy shielded, security sealed.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="form-container">
          <Col md="6" className="d-none d-md-block">
            <div className="text-center bg-white">
              <h2 className="text-center mb-4 text-dark">File Case</h2>
              <img src={require("assets/img/ksp-logo.png")} alt="Your Image" />
              <p className="quotes">
                Locked vault for your files
                <br />
                Privacy shielded, security sealed.
              </p>
            </div>
          </Col>
          <Col md="6">
            <Form onSubmit={handleSubmit} className="case-form">
              <FormGroup>
                <Label for="dateTimeOfIncident">
                  Date and Time of Incident:
                </Label>
                <Input
                  type="datetime-local"
                  id="dateTimeOfIncident"
                  value={newCase.dateTimeOfIncident || ""}
                  onChange={(e) =>
                    setNewCase({
                      ...newCase,
                      dateTimeOfIncident: e.target.value,
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="location">Location:</Label>
                <Input
                  type="text"
                  id="location"
                  value={newCase.location || ""}
                  onChange={(e) =>
                    setNewCase({ ...newCase, location: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="victimName">Victim Name:</Label>
                <Input
                  type="text"
                  id="victimName"
                  value={newCase.victimName || ""}
                  onChange={(e) =>
                    setNewCase({ ...newCase, victimName: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="suspectName">Suspect Name:</Label>
                <Input
                  type="text"
                  id="suspectName"
                  value={newCase.suspectName || ""}
                  onChange={(e) =>
                    setNewCase({ ...newCase, suspectName: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="descriptionOfIncident">
                  Description of Incident:
                </Label>
                <Input
                  type="text"
                  id="descriptionOfIncident"
                  value={newCase.descriptionOfIncident || ""}
                  onChange={(e) =>
                    setNewCase({
                      ...newCase,
                      descriptionOfIncident: e.target.value,
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="charges">Charges:</Label>
                <Input
                  type="text"
                  id="charges"
                  value={newCase.charges || ""}
                  onChange={(e) =>
                    setNewCase({ ...newCase, charges: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="arrestInformation">Arrest Information:</Label>
                <Input
                  type="datetime-local"
                  id="arrestInformation"
                  value={newCase.arrestInformation || ""}
                  onChange={(e) =>
                    setNewCase({
                      ...newCase,
                      arrestInformation: e.target.value,
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="evidence">Evidence:</Label>
                <Input
                  type="text"
                  id="evidence"
                  value={newCase.evidence || ""}
                  onChange={(e) =>
                    setNewCase({ ...newCase, evidence: e.target.value })
                  }
                />
              </FormGroup>
              <Button type="submit" color="primary">
                Create Case
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewCaseForm;
