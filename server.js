const express = require('express')
const app = express()
const port = 3000

app.use(express.static('frontend'))
app.use(express.static('frontend/home'))
app.use(express.static('frontend/companies'))
app.use(express.static('frontend/portfolio'))
app.use(express.static('frontend/team'))


app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/home/mainpage.html'))
app.get('/team', (req, res) => res.sendFile(__dirname+'/frontend/team/team.html'))
app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/home/mainpage.html'))
app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/home/mainpage.html'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))