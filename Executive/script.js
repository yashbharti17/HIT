async function authenticate() {
  const email = prompt("Enter your email:");
  const password = prompt("Enter your password:");

  console.log("Entered email:", email); // Log the email entered
  console.log("Entered password:", password); // Log the password entered

  if (email && password) {
    // Send the data to the backend for verification
    const response = await fetch("http://localhost:8080/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    // console.log(result); // Log the result from the backend

    if (result.success) {
      //   alert("Access granted! Redirecting...");
      window.location.href = "../Executive/index.html"; // Corrected redirection
    } else {
      alert("You are not authorized to access this page.");
    }
  } else {
    alert("Email and password are required!");
  }
}
