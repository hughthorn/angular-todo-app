const express = require('express');
const router = express.Router();

const controller = require('./controller');
const resHandler = require('./resHandler');

router.route('/delete')
  .delete(
    controller.removeTask,
    resHandler.sendJSON
  )

router.route('/edit')
  .put(
    controller.changeTask,
    resHandler.sendJSON
  )

router.route('/create')
  .post(
    controller.makeNewTask,
    resHandler.sendJSON
  )

router.route('/getonetask')
  .post(
    controller.getOneTask,
    resHandler.sendJSON
  )

router.route('/getalltasks')
  .get(
    controller.getAllTasks,
    resHandler.sendJSON
  )

router.route('/changeinprogress')
  .put(
    controller.changeInProgress,
    resHandler.sendJSON
  )

router.route('/changecompleted')
  .put(
    controller.changeInProgress,
    resHandler.sendJSON
  )

router.route('/changename')
  .put(
    controller.changeName,
    resHandler.sendJSON
  )

module.exports = router;
