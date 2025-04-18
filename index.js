const express = require('express')
const fs = require('fs')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// read the file
// send the items to the users as they require these endpoints
app.get('/todos', (req, res) => {
  fs.readFile('./store/todos.json', 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file')
    }
    // parse the data as a JSON object
    const todos = JSON.parse(data)
    return res.json({todos: todos})
  })
})

// callback has no inputs
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})