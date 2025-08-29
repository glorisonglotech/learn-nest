const express = require('express');
const {
  createQuiz,
  getQuizzesByModule,
  getQuizById,
  updateQuiz,
  deleteQuiz
} = require('../controllers/quizController');

const router = express.Router();


router.post('/', createQuiz);


router.get('/module/:moduleId', getQuizzesByModule);

router.get('/:id', getQuizById);


router.put('/:id', updateQuiz);


router.delete('/:id', deleteQuiz);

module.exports = router;
