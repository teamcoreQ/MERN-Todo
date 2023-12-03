require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todoRouter = require('./routes/todo')

/* EXPRESS SERVER  */
const server = express()

/* DB CONNECTION TO MONGO ATLAS */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Database Connected')
  })
  .catch((err) => {
    console.log(err)
  })

/* BODY PARSERS */
server.use(express.json())

/* MIDDLEWARES */
server.use(cors())

/* ROUTES */
// server.use('/', (req, res) => {
//   res.send('Server API is responding - Happy Hacking!')
// })

server.use('/api', todoRouter.router)

/* SERVER LISTEN */
server.listen(process.env.PORT, () => {
  console.log(`Server Started on port: ${process.env.PORT || process.env.SERVER_PORT}`)
})
