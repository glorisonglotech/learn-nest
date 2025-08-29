const express = require('express');
const {
  createModule,
  getModulesByCourse,
  getModuleById,
  updateModule,
  deleteModule
} = require('../controllers/moduleController');

const router = express.Router();


router.post('/', createModule);


router.get('/course/:courseId', getModulesByCourse);


router.get('/:id', getModuleById);


router.put('/:id', updateModule);


router.delete('/:id', deleteModule);

module.exports = router;
