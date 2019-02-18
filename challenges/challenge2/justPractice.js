/*Practice File

- bodyParser needed in POST method
- use forEach insetaed map/reduce 




INDEX JS
const initOptions = { promiseLib: Promise };
const pgp = require("pg-promise")(initOptions);
const dbConfig = require("./config");
const db = pgp(dbConfig);

// USE THIS INSTANCE OF DB IN CHALLENGE 2

function getArrayOfGenres() {
  return db
    .any("SELECT * FROM genres")
    .then(function(data) {
      return data;
    })
    .catch(function(error) {
      console.log("ERROR:", error);
      return "Error";
    });
}

//APP.js


app.get("/api/genres", (req, res) => {
  getArrayOfGenres().then(result => {
    const finalResult = { genres: result };
    res.send(finalResult);
  });
});
*/
