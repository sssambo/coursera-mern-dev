const express = require("express");
const router = express.Router();

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get("/test", (req, res) => {
  res.json({ message: "GET api/profile route" });
});

module.exports = router;
