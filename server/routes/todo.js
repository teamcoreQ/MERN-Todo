const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo')

router
/* CREATE */
    .post('/', todoController.createTodo)

/* READ */
    .get('/', todoController.getAllTodos)

/* UPDATE */
    .patch('/:id', todoController.updateTodo)

/* DELETE */
    .delete('/', todoController.deleteAllTodos)
    .delete('/:id', todoController.deleteSpecificTodo)

exports.router = router