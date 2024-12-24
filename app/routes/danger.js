const express = require('express');
const router = express.Router();
const dangerController = require('../controllers/dangerController');

router.get('/:dangerId', dangerController.danger_visualize);

module.exports = router;