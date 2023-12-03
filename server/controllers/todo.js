const Todo = require('../models/Todo')

/* CREATE API */
exports.createTodo = async (req, res) => {
    // get the task and dueDate from the request body
    const { task, dueDate } = req.body

    try {
        // create a new todo
        const todo = new Todo({
            task: task,
            dueDate: dueDate
        })

        // save the todo
        await todo.save()

        // send the todo as a response
        res.status(201).json({ message: 'Todo added successfully!', todo })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

/* READ API */
exports.getAllTodos = async (req, res) => {
    try {
        // get all todos from the database
        const todos = await Todo.find()

        // send all todos as response
        res.status(200).json({ todos })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

/* UPDATE API */
exports.updateTodo = async (req, res) => {
    // get the id from the request params
    const { id } = req.params

    // get the task and dueDate from the request body
    const { task, dueDate } = req.body

    try {
        // find the todo by id
        const todo = await Todo.findById(id)

        // if the todo doesn't exist, send 404 error
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' })
        }

        // update the todo
        if (task) {
            todo.task = task
        }
        if (dueDate) {
            todo.dueDate = dueDate
        }

        // save the todo
        await todo.save()

        // send the todo as a response
        res.status(200).json({ message: 'Todo updated successfully!', todo })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

/* DELETE API */
exports.deleteTodo = async (req, res) => {
    // get the id from the request params
    const { id } = req.params

    try {
        // find the todo by id
        const todo = await Todo.findById(id)

        // if the todo doesn't exist, send 404 error
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' })
        }

        // delete the todo
        await todo.deleteOne()

        // send success message as response
        res.status(200).json({ message: 'Todo deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}