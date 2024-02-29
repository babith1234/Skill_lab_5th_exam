const passport = require("passport");

exports.googleCallback = (req, res) => {
  const successMessage = "Authentication with Google successful! You can now access the protected content.";

  
  res.send(`<h1>${successMessage}</h1>`);
};