const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0306000",
  database: "proyecto",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    // La conexión se realizó correctamente
    console.log("Conexión exitosa");
  }
});

module.exports = connection;
