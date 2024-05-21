// models/caseModel.js
const mongoose = require("mongoose");
const paillierBigint = require("paillier-bigint");
const fs = require("fs");

// Load keys from keys.json
const keys = JSON.parse(fs.readFileSync("keys.json", "utf8"));

const pubKey = new paillierBigint.PublicKey(
  BigInt(keys.publicKey.n),
  BigInt(keys.publicKey.g)
);

const privKey = new paillierBigint.PrivateKey(
  BigInt(keys.privateKey.lambda),
  BigInt(keys.privateKey.mu),
  pubKey
);

// Encryption/Decryption functions
const encrypt = (text) => {
  const hexText = BigInt(`0x${Buffer.from(text).toString("hex")}`);
  const encrypted = pubKey.encrypt(hexText);
  return encrypted.toString();
};

const decrypt = (encryptedText) => {
  const decrypted = privKey.decrypt(BigInt(encryptedText));
  const hexString = decrypted.toString(16);
  const buffer = Buffer.from(hexString, "hex");
  return buffer.toString();
};

// Define the case schema with pre-save hook to encrypt sensitive data
const caseSchema = new mongoose.Schema({
  caseId: { type: String, required: true, unique: true },
  dateTimeOfIncident: { type: Date, required: true },
  location: { type: String, required: true },
  victimName: { type: String, required: true },
  suspectName: { type: String, required: true },
  descriptionOfIncident: { type: String, required: true },
  charges: { type: String, required: true },
  arrestInformation: { type: String, required: true },
  evidence: { type: String, required: true },
});

caseSchema.pre("save", function (next) {
  this.victimName = encrypt(this.victimName);
  this.suspectName = encrypt(this.suspectName);
  this.descriptionOfIncident = encrypt(this.descriptionOfIncident);
  this.charges = encrypt(this.charges);
  this.arrestInformation = encrypt(this.arrestInformation);
  this.evidence = encrypt(this.evidence);
  next();
});

caseSchema.methods.decryptFields = function () {
  this.victimName = decrypt(this.victimName);
  this.suspectName = decrypt(this.suspectName);
  this.descriptionOfIncident = decrypt(this.descriptionOfIncident);
  this.charges = decrypt(this.charges);
  this.arrestInformation = decrypt(this.arrestInformation);
  this.evidence = decrypt(this.evidence);
};

const Case = mongoose.model("Case", caseSchema);

module.exports = Case;
