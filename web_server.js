// We will convert a computer to server using express.js in this file
const express = require('express')
const app = express()  // app is widely used naming convension
const path = require('path')
const PORT = process.env.PORT || 3500;

//get the file from the client
app.get('/', (req,res) =>{
    res.send('Hi Full Stack Developer')
})

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
