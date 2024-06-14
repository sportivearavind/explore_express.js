// We will convert a computer to server using express.js in this file
const express = require('express') //imports the Express module, which is a web framework for Node.js. It simplifies the process of building web applications

const app = express()  // instance of the Express application
const path = require('path') //imports the Path module, which provides utilities for working with file and directory paths. It is part of Node.js's core modules.

const PORT = process.env.PORT || 3500; //This line sets the port number on which the server will listen for incoming requests

//get the file from the client and send the response
//app.get() is a method to define a route handler for GET requests.
app.get('^/$|/index.html', (req,res) =>{
  // sends the index.html file located in the views directory as the response.
  res.sendFile(path.join(__dirname, "views", "index.html"));
})

// The callback function () => console.log(Server running on port ${PORT}) is executed once the server starts
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
