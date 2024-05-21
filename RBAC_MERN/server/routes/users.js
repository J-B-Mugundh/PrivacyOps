const router = require("express").Router();
const { User, validate } = require("../models/user");
router.get("/me", async (req, res) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
    const user = await User.findById(decoded._id);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ error: "Invalid token." });
  }
});

router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
