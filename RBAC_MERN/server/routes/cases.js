const router = require("express").Router();
const Case = require("../models/case");
const auth = require("../middleware/auth");
const police = require("../middleware/police");
const commissioner = require("../middleware/commissioner");

router.get("/secure", [auth, commissioner], async (req, res) => {
  try {
    const cases = await Case.find();

    for (const caseData of cases) {
      await caseData.decryptFields();
    }

    res.status(200).send(cases);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "Error retrieving cases", details: err.message });
  }
});

// Get all cases (masked) (Accessible by Police and Commisioner only)
router.get("/", [auth, police], async (req, res) => {
  try {
    const cases = await Case.find();

    res.status(200).send(cases);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// Get a single case (masked) by ID (Accessible by Police and Commisioner only)
router.get("/:id", [auth, police], async (req, res) => {
  try {
    const caseItem = await Case.findById(req.params.id);
    if (!caseItem) return res.status(404).send({ message: "Case not found" });

    res.status(200).send(caseItem);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// Create a new case (Accessible by Commissioner-0 and Police-1 only)
router.post("/", [auth, police], async (req, res) => {
  try {
    const newCase = new Case({
      caseId: req.body.caseId,
      dateTimeOfIncident: req.body.dateTimeOfIncident,
      location: req.body.location,
      victimName: req.body.victimName,
      suspectName: req.body.suspectName,
      descriptionOfIncident: req.body.descriptionOfIncident,
      charges: req.body.charges,
      arrestInformation: req.body.arrestInformation,
      evidence: req.body.evidence,
    });
    await newCase.save();
    res.status(201).json({ message: "Case saved", case: newCase });
  } catch (err) {
    res.status(500).json({ error: "Error saving case", details: err.message });
  }
});

// Single case record in unmasked form (Accessible by Commissioner only)
router.get("/secure/:caseId", [auth, commissioner], async (req, res) => {
  try {
    const caseId = req.params.caseId;
    const caseData = await Case.findOne({ caseId });

    if (!caseData) {
      return res.status(404).json({ error: "Case not found" });
    }

    // Decrypt the fields
    caseData.decryptFields();

    res.status(200).json({ case: caseData });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error retrieving case", details: err.message });
  }
});

// Update a case (Accessible by Commisioner only)
router.put("/:id", [auth, commissioner], async (req, res) => {
  try {
    const { error } = validateCase(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const caseItem = await Case.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!caseItem) return res.status(404).send({ message: "Case not found" });

    res.status(200).send({ message: "Case updated successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// Delete a case (Accessible by Commissioner only)
router.delete("/:id", [auth, commissioner], async (req, res) => {
  try {
    const caseItem = await Case.findByIdAndDelete(req.params.id);
    if (!caseItem) return res.status(404).send({ message: "Case not found" });

    res.status(200).send({ message: "Case deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
