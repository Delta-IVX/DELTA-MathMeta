const express = require('express');
const router = express.Router();

const {
    renderHome,
    solveEquation
} = require('../controllers/equationsController');

router.get('/', renderHome);
router.post('/solve', solveEquation);

module.exports = router;