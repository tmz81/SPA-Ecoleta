const express = require('express');
const server = express();

//get db


//config static public
server.use(express.static('public'))

//use red.body
server.use(express.urlencoded({ extended: true }))

//template engine

//config route
server.get('/', (req, res) => res.render('index.html'))

//on server
server.listen(3333)