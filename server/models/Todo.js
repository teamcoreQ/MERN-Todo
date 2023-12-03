const mongoose = require('mongoose') 
const { Schema } = mongoose

const todoSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
},
  { timestamps: true }
) 
    
const Todo = mongoose.model('Todo', todoSchema) 

module.exports = Todo