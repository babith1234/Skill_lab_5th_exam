const express = require("express");
const passport = require("passport");
const router = express.Router();
const authController = require("../controllers/authController");

router.get(
  "/auth/google",
  passport.authenticate("google", {
    
    scope:["profile","email"]
  })
);

router.get(
  "/auth/google/secrets",
  (req, res, next) => {
    passport.authenticate("google", (err, user, info) => {
      if (err) {
        console.error(err);
        return res.redirect("/login");
      }

      if (!user) {
        console.log("Authentication failed:", info);
        return res.redirect("/login");
      }

      req.logIn(user, (loginErr) => {
        if (loginErr) {
          console.error(loginErr);
          return res.redirect("/login");
        }

      
        return res.redirect("/");
      });
    })(req, res, next);
  },
  authController.googleCallback
);


module.exports = router;