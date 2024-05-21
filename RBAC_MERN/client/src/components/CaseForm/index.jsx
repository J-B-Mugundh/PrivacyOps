import { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const CaseForm = ({ user }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      toast.error("Please log in to view cases.");
      navigate("/");
      return;
    }
  }, [user, navigate]);

  const [data, setData] = useState({
    caseId: "",
    dateTimeOfIncident: "",
    location: "",
    victimName: "",
    suspectName: "",
    descriptionOfIncident: "",
    charges: "",
    arrestInformation: "",
    evidence: "",
  });
  const [cases, setCases] = useState([]);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentCaseId, setCurrentCaseId] = useState("");
  const fileInputRef = useRef(null);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/cases";
      const token = localStorage.getItem("token");
      const headers = { "x-auth-token": token };

      if (editing) {
        await axios.put(`${url}/${currentCaseId}`, data, { headers });
        setCases((prevCases) =>
          prevCases.map((c) => (c._id === currentCaseId ? data : c))
        );
        toast.success("Case updated successfully");
      } else {
        const response = await axios.post(url, data, { headers });
        setCases([...cases, response.data]);
        toast.success("Case created successfully");
      }
      setEditing(false);
      setData({
        caseId: "",
        dateTimeOfIncident: "",
        location: "",
        victimName: "",
        suspectName: "",
        descriptionOfIncident: "",
        charges: "",
        arrestInformation: "",
        evidence: "",
      });
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  const handleEdit = (caseItem) => {
    setEditing(true);
    setCurrentCaseId(caseItem._id);
    setData(caseItem);
  };

  const handleDelete = async (id) => {
    try {
      const url = `http://localhost:8080/api/cases/${id}`;
      const token = localStorage.getItem("token");
      await axios.delete(url, { headers: { "x-auth-token": token } });
      setCases(cases.filter((c) => c._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          // Store the JSON data in the component state
          setData(jsonData);
        } catch (error) {
          toast.error("Error parsing JSON file");
        }
      };
      reader.readAsText(file);
    }
  };
  

  return (
    <Container className={styles.container}>
      <Row>
        <Col md={6} className={styles.image_container}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Seal_of_Karnataka.svg/1200px-Seal_of_Karnataka.svg.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              height: '100%',
            }}
          />
        </Col>

        <Col md={6}>
          <h1 className={styles.heading}>
            {editing ? "Edit Case" : "Create Case"}
          </h1>
          {user && user.role === 1 && (
            <div>
            <p className={styles.info}>
              Admins can only create and view cases. Super Admins can edit and delete cases.
            </p>
            <p className={styles.info}>
              Note: If Upload JSON is not working, please try manually. 
              Sometimes, it may not work as expected.
            </p>
            </div>
            
            
          )}
          <div className={styles.button_container}>
            <Button
              href="https://crimelensapi.streamlit.app"
              target="_blank"
              variant="primary"
              className={styles.link_button}
              style={{ marginBottom: "10px", marginRight: "10px" }}
            >
              Go to Crime Lens
            </Button>
            <Button
              variant="secondary"
              className={styles.upload_button}
              style={{ marginBottom: "10px" }}
              onClick={() => fileInputRef.current.click()}
            >
              Upload JSON File
            </Button>
            <input
              type="file"
              accept="application/json"
              onChange={handleFileUpload}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Case Id"
              name="caseId"
              onChange={handleChange}
              value={data.caseId}
              required
              className={styles.input}
            />
            <input
              type="datetime-local"
              name="dateTimeOfIncident"
              onChange={handleChange}
              value={data.dateTimeOfIncident}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Location"
              name="location"
              onChange={handleChange}
              value={data.location}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Victim Name"
              name="victimName"
              onChange={handleChange}
              value={data.victimName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Suspect Name"
              name="suspectName"
              onChange={handleChange}
              value={data.suspectName}
              required
              className={styles.input}
            />
            <textarea
              placeholder="Description of Incident"
              name="descriptionOfIncident"
              onChange={handleChange}
              value={data.descriptionOfIncident}
              required
              className={styles.textarea}
            />
            <input
              type="text"
              placeholder="Charges"
              name="charges"
              onChange={handleChange}
              value={data.charges}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Arrest Information"
              name="arrestInformation"
              onChange={handleChange}
              value={data.arrestInformation}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Evidence"
              name="evidence"
              onChange={handleChange}
              value={data.evidence}
              required
              className={styles.input}
            />
            {error && <div className={styles.error}>{error}</div>}
            {user && (user.role === 0 || user.role === 1) ? (
              <button type="submit" className={styles.submit}>
                {editing ? "Update Case" : "Create Case"}
              </button>
            ) : null}
          </form>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default CaseForm;
