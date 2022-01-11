const express = require('express')
const app = express()
const port = 3000

const { connectToDatabase } = require('./db/dbConnection')
const syncDatabase  = require('./db/syncDatabase')
syncDatabase()
app.get('/', (req, res) => {
  res.send('Hello World!')
})


if (connectToDatabase()) {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
      })
} else {
    console.log('Error connecting to database');
}
