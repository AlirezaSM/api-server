require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const guestUserRouter = require('./routes/guest_user')
app.use('', guestUserRouter)

const adminRouter = require('./routes/admin')
app.use('/admin', adminRouter)

app.get('/movies', (req, res) => {
    
    res.send('Hello, world!!!')
})
// app.post()
// app.put()
// app.delete()


app.listen(1377, () => console.log('Listening on port 1377...'))