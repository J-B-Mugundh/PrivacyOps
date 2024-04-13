import React, { useState } from 'react';
import { Form, FormGroup,  Container, Label, Input, Button } from 'reactstrap';

function NewCaseForm({ createCase }) {
  const [newCase, setNewCase] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    createCase(newCase);
    setNewCase({});
  };

  return (
    <div className="section wrapper">
      <Container>
      <h2 className="text-center mb-4">Create New Case</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="dateTimeOfIncident">Date and Time of Incident:</Label>
          <Input
            type="datetime-local"
            id="dateTimeOfIncident"
            value={newCase.dateTimeOfIncident || ''}
            onChange={(e) => setNewCase({ ...newCase, dateTimeOfIncident: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="location">Location:</Label>
          <Input
            type="text"
            id="location"
            value={newCase.location || ''}
            onChange={(e) => setNewCase({ ...newCase, location: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="victimName">Victim Name:</Label>
          <Input
            type="text"
            id="victimName"
            value={newCase.victimName || ''}
            onChange={(e) => setNewCase({ ...newCase, victimName: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="suspectName">Suspect Name:</Label>
          <Input
            type="text"
            id="suspectName"
            value={newCase.suspectName || ''}
            onChange={(e) => setNewCase({ ...newCase, suspectName: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="descriptionOfIncident">Description of Incident:</Label>
          <Input
            type="text"
            id="descriptionOfIncident"
            value={newCase.descriptionOfIncident || ''}
            onChange={(e) => setNewCase({ ...newCase, descriptionOfIncident: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="charges">Charges:</Label>
          <Input
            type="text"
            id="charges"
            value={newCase.charges || ''}
            onChange={(e) => setNewCase({ ...newCase, charges: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="arrestInformation">Arrest Information:</Label>
          <Input
            type="datetime-local"
            id="arrestInformation"
            value={newCase.arrestInformation || ''}
            onChange={(e) => setNewCase({ ...newCase, arrestInformation: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="evidence">Evidence:</Label>
          <Input
            type="text"
            id="evidence"
            value={newCase.evidence || ''}
            onChange={(e) => setNewCase({ ...newCase, evidence: e.target.value })}
          />
        </FormGroup>
        <Button type="submit" color="primary">Create Case</Button>
      </Form>
      </Container>
      
    </div>
  );
}

export default NewCaseForm;
