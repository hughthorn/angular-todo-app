const db = require('../db/dbConfig')

module.exports = {

  findAllTasks() {
    return db.any(`
      SELECT * FROM tasks
    `);
  },

  findOneTask(taskID) {
    return db.one(`
      SELECT * FROM tasks
      WHERE id = $1
    `, taskID);
  },

  createTask(taskName) {
    return db.one(`
      INSERT INTO tasks (name)
      VALUES ($1)
    `, taskName);
  },

  updateTask(data) {
    return db.none(`
      UPDATE tasks
      SET name = $/taskName/,
          inprogress = $/inProgress/,
          completed = $/completed/
      WHERE id = $/taskId/
    `, data);
  },

  saveInProgress(taskID, boolean) {
    return db.none(`
      UPDATE tasks
      SET inprogress = $2
      WHERE id = $1
    `, [taskID, boolean]);
  },

  saveCompleted(taskID, boolean) {
    return db.none(`
      UPDATE tasks
      SET completed = $2
      WHERE id = $1
    `, [taskID, boolean]);
  },

  destroyTask(taskID) {
    return db.none(`
      DELETE FROM tasks
      WHERE id = $1
    `, taskID);
  },

  updateName(taskID, newName) {
    return db.one(`
      UPDATE tasks
      SET name = $2
      WHERE id = $1
    `, [taskID, newName]);
  }

}
