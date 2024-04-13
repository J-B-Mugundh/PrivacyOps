import React from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';

function DisplayCases({ cases, handleDelete }) {
  return (
    <div className="section wrapper">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center mb-4">Criminal Cases</h2>
            {/* Map through the cases array and render only the cases that are not deleted */}
            {cases.filter(_case => !_case.deleted).map((_case) => (
              <Card key={_case.id}>
                <CardBody>
                  <CardTitle tag="h4">Case ID: {_case.id.toString()}</CardTitle>
                  <CardText>Date and Time of Incident: {_case.dateTimeOfIncident}</CardText>
                  <CardText>Location: {_case.location}</CardText>
                  <CardText>Victim Name: {_case.victimName}</CardText>
                  <CardText>Suspect Name: {_case.suspectName}</CardText>
                  <CardText>Description of Incident: {_case.description}</CardText>
                  <CardText>Charges: {_case.charges}</CardText>
                  <CardText>Arrest Information: {_case.arrestInformation}</CardText>
                  <CardText>Evidence: {_case.evidence}</CardText>
                  <Button color="danger" onClick={() => handleDelete(_case.id)}>Delete</Button>
                </CardBody>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DisplayCases;