const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080; // ✅ Updated to support Render's dynamic PORT

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Hardcoded authorized users (Pre-hashed "admin" passwords)
const authorizedUsers = [
  {
    email: "taniyasharma20003@gmail.com",
    password: bcrypt.hashSync("admin", 10),
  },
  { email: "praveen070112@gmail.com", password: bcrypt.hashSync("admin", 10) },
  { email: "anyagl2006@gmail.com", password: bcrypt.hashSync("admin", 10) },
];

// Authenticate endpoint
app.post("/authenticate", (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = authorizedUsers.find((user) => user.email === email);

  if (user && bcrypt.compareSync(password, user.password)) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Start the server ✅
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
