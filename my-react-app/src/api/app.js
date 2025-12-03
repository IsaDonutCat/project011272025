const express = require("express");
const app = express();

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});
app.get('/',(req,res)=>{
    res.send(`<h1>Hello World</h1>`)
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,
    console.log(`Server started on port ${PORT}`)
);

let mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dook89fUr",
  database: "myDB"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});