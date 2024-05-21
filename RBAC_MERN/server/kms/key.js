// generateKeys.js
const fs = require("fs");
const { generateRandomKeys } = require("paillier-bigint");

async function generateAndStoreKeys() {
  const { publicKey, privateKey } = await generateRandomKeys(2048);

  const keys = {
    publicKey: {
      n: publicKey.n.toString(),
      g: publicKey.g.toString(),
    },
    privateKey: {
      lambda: privateKey.lambda.toString(),
      mu: privateKey.mu.toString(),
      publicKey: {
        n: publicKey.n.toString(),
        g: publicKey.g.toString(),
      },
    },
  };

  fs.writeFileSync("keys.json", JSON.stringify(keys));
  console.log("Keys generated and stored in keys.json");
}

generateAndStoreKeys().catch(console.error);
