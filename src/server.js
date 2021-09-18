const express = require('express');
const server = express();

//get db
const db = require('./db/db')

//config static public
server.use(express.static("public"))

//use red.body
server.use(express.urlencoded({ extended: true }))

//template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})

//config route
server.get('/', (req, res) => {
  return res.render("index.html", {title: 'Um title'})
})

server.get("/create-point", (req, res) => {
  return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
  const query = `
  INSERT INTO places (
    image,
    name,
    address,
    address2,
    state,
    city,
    items
  ) VALUES (?,?,?,?,?,?,?);
  `

  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
  ]

  function afterInsertData(err){
    if(err) {
      console.log(err)
      return res.send("Erro no cadastro!")
    }

    console.log('Cadastro com sucesso!')
    console.log(this)

    return res.render("create-point.html", {saved: true})
  }

  db.run(query, values, afterInsertData)
})

server.get("/search", (req, res) => {
  const search = req.query.search

  if(search == ""){
    return res.render("search-results.html", {  total:0 })
  }

  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
    if(err){
      return console.log(err)
    }

    const total = rows.length

    return res.render("search-results.html", {  places: rows, total: total})
  })
})

//on server
server.listen(3333)