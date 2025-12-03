let mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dook89fUr",
  database: "myDB"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Opportunities JOIN Companies ON Opportunities.CompanyID=Companies.CompanyID", function (err, result, fields) {
    if (err) throw err;
    return result;
  });
});