import mysql from "mysql2";

export default async function handler(req, res) {
  const { method, body } = req; //Esto es una abstraccion del requiere

  // configurar conexion de la base de datos que usara para conectarse constantemente
  const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "pssword",
    database: "bibliotecacurso",
  });
switch (method){
    case 'GET':
  connection.query("SELECT * FROM alumnos", function (err, results, fields) {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
    } else {
      console.log(results);
      res.status(200).json(results);
    }
  });
  connection.end();
  break;
    case 'POST':
connection.query(
    'INSERT INTO alumnos (nombre,apellidos,correo,matricula,edad) VALUES (?,?,?,?,?)',
    [body.nombre, body.apellidos, body.correo, body.matricula, body.edad],
    
    function (err, results, fields) {
      if (err) {
        console.log(err);
        res.status(500).json({ error: err });
      } else {
        console.log(results);
        res.status(200).json(results);
      }
    })
    connection.end();
    break;
    }
}
