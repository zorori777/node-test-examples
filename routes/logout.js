'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.logout();
  res.redirect('/');
})

module.exports = router;
