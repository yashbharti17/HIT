const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Hardcoded authorized users
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

  //   console.log("Received email:", email); // Debugging email from frontend
  //   console.log("Received password:", password); // Debugging password from frontend

  // Find user by email
  const user = authorizedUsers.find((user) => user.email === email);

  if (user) {
    console.log("User found:", user); // Debugging user found in the array
    console.log("Hash from backend:", user.password); // Debugging the stored hash
    console.log(
      "Comparing hash with password:",
      bcrypt.compareSync(password, user.password)
    ); // Check if comparison succeeds
    if (bcrypt.compareSync(password, user.password)) {
      //   console.log("User authenticated successfully");
      res.json({ success: true });
    } else {
      //   console.log("Password mismatch");
      res.json({ success: false });
    }
  } else {
    // console.log("User not found");
    res.json({ success: false });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
