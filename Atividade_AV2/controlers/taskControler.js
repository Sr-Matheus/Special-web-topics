const Task = require('../model/task');
const taskModel = require('../model/task');


module.exports = class TaskControler
{
    static newTask(req, res)
    {
        res.render('home')
    }

    static async newTaskSave(req, res)
    {
        const tarefa =
        {
            task : req.body.task,
            status :req.body.status,
        }
        await Task.create(tarefa);

        res.redirect('/app');
    }

    static async home(req, res)
    {
        res.render('home', {todos});
    }
    

}