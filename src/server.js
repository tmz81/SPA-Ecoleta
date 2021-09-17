const express = require('express');
const server = express();

//get db


//config static public
server.use(express.static('public'))

//use red.body
server.use(express.urlencoded({ extended: true }))

//template engine
const nujucks = require('nujucks')
nujucks.configure('src/views', {
  express: server,
  noCache: true
})

//config route
server.get('/', (req, res) => res.render('index.html', {title: 'Um title'}))

server.get('/create-point', (req, res) => res.render('create-point.html'))

server.get('/search', (req, res) => res.render('search-results.html'))

//on server
server.listen(3333)