const express = require('express');
const users = require('./users');
// const books = require('./books')

const router = express.Router();
// router.use(express.json());

router.use('/', users);
// router.use('/', books);

module.exports = router; 