const model = require('./models');

module.exports = {
  /*
    findAllTasks() return any
    findOneTask(taskID) return one
    saveInProgress(taskID, boolean) return none
    saveCompleted(taskID, boolean) return none
    updateName(taskID, newName) return one
    destroyTask(taskID) return none
    updateTask(data) return none
      data = {
        name,
        inProgress,
        completed
      }
  */
  getAllTasks(req, res, next) {
    model.findAllTasks()
      .then(data => {
        res.locals.tasks = data;
        next();
      })
      .catch(error => {
        next(error);
      })
  },

  getOneTask(req, res, next) {
    model.findOneTask(parseInt(req.body.taskId))
      .then(data => {
        res.locals.tasks = data;
      })
      .catch(error => {
        next(error);
      })
  },

  makeNewTask(req, res, next) {
    model.createTask(req.body.taskName)
      .then(data => {
        res.locals.tasks = data;
      })
  },

  changeTask(req, res, next) {
    let theData = { ...req.body };
    theData.taskId = parseInt(theData.taskId);
    model.updateTask(theData)
      .then(data => {
        next();
      })
      .catch(error => {
        next(error);
      })
  },

  removeTask(req, res, next) {
    model.destroyTask(parseInt(req.body.taskId))
      .then(data => {
        next();
      })
      .catch(error => {
        next(error);
      })
  },

  changeInProgress(req, res, next) {
    model.saveInProgress(parseInt(req.body.taskId), req.body.inProgress)
      .then(data => {
        next();
      })
      .catch(error => {
        next(error);
      })
  },

  changeCompleted(req, res, next) {
    model.saveCompleted(parseInt(req.body.taskId), req.body.completed)
      .then(data => {
        next();
      })
      .catch(error => {
        next(error);
      })
  },

  changeName(req, res, next) {
    model.updateName(parseInt(req.body.taskId), req.body.newName)
      .then(data => {
        next();
      })
      .catch(error => {
        next(error);
      })
  },


}
