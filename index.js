const express = require('express')
const app = express()
const ejs = require('ejs')
// const path = require('path')
PORT = 3000
app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views'))



app.get('/', (req, res) =>{
    // res.send('Hello, Express!')
    res.render('index',)
})



app.post(/welcome/, (req, res)=>{
    res.render('welcome')
})


app.post('/index', (req, res)=>{
    res.render('index')
})


app.listen(PORT, ()=>{
    console.log('listening on port', PORT);
    
})
