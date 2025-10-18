const express = require('express');
const router = express.Router();

const {generateEmail} = require('../controllers/emailController')

router.post("/generate-email", generateEmail)  // localhost:5000/api/{genetate-email}


module.exports = router;