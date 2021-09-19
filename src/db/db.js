//import dependence from sqlite3
const sqlite3 = require("sqlite3").verbose()
//create the object that will do database operations
const db = new sqlite3.Database("./src/db/database.db")

module.exports = db

db.serialize(() => {
  //create table
  /* db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT
    );
  `)

  //insert dados in table
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
    "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "Papersider",
    "Arthur Lundregue, Jardim Paulista",
    "Número 1187",
    "Paulista",
    "Pernambuco",
    "Resíduos Eletrônicos, Lâmpadas"
  ]
  
  function afterInsertData(err) {
    if(err) {
      return console.log(err)
    }

    console.log('Cadastrado com sucesso')
    console.log(this);
  }

  db.run(query, values, afterInsertData)


  //consult dados in table
  db.all(`SELECT name FROM places`, function(err, rows) {
    if(err) {
      return console.error(err)
    }

    console.log('Aqui estão seus registros: ')
    console.log(rows);
  })

  //delete dado in table
  db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
    if(err) {
      return log.error(err)
    }

    console.log('Registro deletado com sucesso!');
  }) */
})