const express = require('express');
const router = express.Router();
const TaskControler = require('../controlers/taskControler');


router.get('/add', TaskControler.newTask);
router.post('/add', TaskControler.newTaskSave);
router.get('/', TaskControler.home);

module.exports = router;