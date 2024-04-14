import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ethers } from "ethers";
import CriminalCaseFilingABI from "./contracts/CriminalCaseFilingABI.json";
import NewCaseForm from "./NewCaseForm";
import DisplayCases from "./DisplayCases";
import LandingPage from "views/examples/LandingPage.js";
import PageHeader from "components/PageHeader/PageHeader";
import IndexNavbar from "components/Navbars/IndexNavbar";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  Container,
  Collapse,
  UncontrolledTooltip,
} from "reactstrap";

export default function App() {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [collapseOut, setCollapseOut] = useState("");
  const [color, setColor] = useState("navbar-transparent");
  const [cases, setCases] = useState([]);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [criminalCaseFilingContract, setCriminalCaseFilingContract] =
    useState(null);

  useEffect(() => {
    async function fetchData() {
      if (window.ethereum) {
        const _provider = new ethers.providers.Web3Provider(window.ethereum);
        const _signer = _provider.getSigner();
        const _contract = new ethers.Contract(
          process.env.REACT_APP_CRIMINAL_CASE_FILING_ADDRESS,
          CriminalCaseFilingABI,
          _signer
        );

        setProvider(_provider);
        setSigner(_signer);
        setCriminalCaseFilingContract(_contract);

        await getCriminalCases(_contract);
        window.addEventListener("scroll", changeColor);
      } else {
        console.error("No Ethereum provider detected.");
      }
    }
    fetchData();

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const getCriminalCases = async (contract) => {
    try {
      const count = await contract.getCriminalCaseCount();
      const newCases = [];

      for (let i = 1; i <= count; i++) {
        const _case = await contract.cases(i);
        newCases.push(_case);
      }

      setCases(newCases);
    } catch (error) {
      console.error("Error fetching criminal cases:", error);
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

  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  const createCase = async (newCase) => {
    try {
      if (criminalCaseFilingContract) {
        const { hash } = await criminalCaseFilingContract.createCase(
          newCase.dateTimeOfIncident,
          newCase.location,
          newCase.victimName,
          newCase.suspectName,
          newCase.descriptionOfIncident,
          newCase.charges,
          newCase.arrestInformation,
          newCase.evidence
        );
        await provider.waitForTransaction(hash);
        await getCriminalCases(criminalCaseFilingContract);
      } else {
        console.error("Criminal case filing contract not available.");
      }
    } catch (error) {
      console.error("Error creating case:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      if (criminalCaseFilingContract) {
        const _case = cases.find((_case) => _case.id === id);
        if (_case && !_case.deleted) {
          const { hash } = await criminalCaseFilingContract.deleteCase(id);
          await provider.waitForTransaction(hash);

          // Remove the deleted case from the state
          setCases((prevCases) => prevCases.filter((_case) => _case.id !== id));
        } else {
          console.error("Case has already been deleted.");
        }
      } else {
        console.error("Criminal case filing contract not available.");
      }
    } catch (error) {
      console.error("Error deleting case:", error);
    }
  };

  return (
    <Router>
      <IndexNavbar />
      <Routes>
        <Route
          path="/new-case"
          element={<NewCaseForm createCase={createCase} />}
        />
        <Route
          path="/display-cases"
          element={<DisplayCases cases={cases} handleDelete={handleDelete} />}
        />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}
