const express = require('express')
const app = express()
const port = 3000
const { connectToDatabase } = require('./db/dbConnection')
const syncDatabase  = require('./db/syncDatabase')
const rutes = require('./routes/rutes')

const {createReport} = require('./helpers/excel')
//syncDatabase()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/',rutes);


if (connectToDatabase()) {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
      })
} else {
    console.log('Error connecting to database');
}
