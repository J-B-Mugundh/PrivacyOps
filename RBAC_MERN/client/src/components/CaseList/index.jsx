import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CaseTable = ({ user }) => {
  const navigate = useNavigate();
  const [cases, setCases] = useState([]);

  // if user is null, go to /login

  useEffect(() => {
    if (!user && user == null) {
      toast.error("Please log in to view cases.");
      navigate("/");
      return;
    }

    const fetchCases = async () => {
      console.log(user);
      const url =
        user.role === 1
          ? "http://localhost:8080/api/cases"
          : "http://localhost:8080/api/cases/secure";
      const token = localStorage.getItem("token");

      try {
        const { data: res } = await axios.get(url, {
          headers: { "x-auth-token": token },
        });
        setCases(res);
        console.log(cases);
        console.log(res);
      } catch (error) {
        console.error("Error fetching cases:", error);
      }
    };

    fetchCases();
  }, [user, navigate]);

  return (
    <div className="container mt-5">
      <h2 style={{ color: "#007bff", marginBottom: "20px" }}>Cases</h2>
      {cases.map((caseItem) => (
        <div key={caseItem.caseId} className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Case ID: {caseItem.caseId}</h5>
            <p className="card-text">
              <strong>Date & Time of Incident: </strong>{" "}
              {new Date(caseItem.dateTimeOfIncident).toLocaleString()}
            </p>
            <p className="card-text">
              <strong>Location: </strong> {caseItem.location}
            </p>
            <p className="card-text">
              <strong>Victim Name: </strong> {caseItem.victimName}
            </p>
            <p className="card-text">
              <strong>Suspect Name: </strong> {caseItem.suspectName}
            </p>
            <p className="card-text">
              <strong>Description of Incident: </strong>{" "}
              {caseItem.descriptionOfIncident}
            </p>
            <p className="card-text">
              <strong>Charges: </strong> {caseItem.charges}
            </p>
            <p className="card-text">
              <strong>Arrest Information: </strong> {caseItem.arrestInformation}
            </p>
            <p className="card-text">
              <strong>Evidence: </strong> {caseItem.evidence}
            </p>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default CaseTable;
