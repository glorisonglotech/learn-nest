const express = require('express');
const {
  createProgress,
  getProgressByUser,
  updateProgress,
  deleteProgress
} = require('../controllers/progressController');

const router = express.Router();


router.post('/', createProgress);


router.get('/user/:userId', getProgressByUser);


router.put('/:id', updateProgress);


router.delete('/:id', deleteProgress);

module.exports = router;
