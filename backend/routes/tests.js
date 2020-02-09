const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.json({ tests: { title: 'my first test', description: 'random data you shouldnt access'}});
});

module.exports = router;