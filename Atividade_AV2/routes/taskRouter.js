const express = require('express');
const router = express.Router();
const TaskControler = require('../controlers/taskControler');


router.get('/app', TaskControler.newTask);
router.post('/app', TaskControler.newTaskSave);
router.get('/', TaskControler.home);

module.exports = router;