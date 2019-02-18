//const initOptions = { promiseLib: Promise };
const pgp = require("pg-promise")();
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

function getGenreWithId(id) {
  return db
    .one("SELECT * FROM genres where id = $1", id)
    .then(function(data) {
      return data;
    })
    .catch(function(error) {
      console.log("ERROR:", error);
      return "Error";
    });
}

function getArrayOfGamesByGenres(genre_id) {
  return db
    .any("SELECT * FROM games WHERE genre_id = $1", genre_id)
    .then(function(data) {
      return data;
    })
    .catch(function(error) {
      console.log("ERROR:", error);
      return "Error";
    });
}

function getArrayOfConsoles() {
  return db
    .any("SELECT * FROM consoles")
    .then(function(data) {
      return data;
    })
    .catch(function(error) {
      console.log("ERROR:", error);
      return "Error";
    });
}

function postConsoleIntoTable(console) {
  // {console_name:"", release_year: 9089}
  return db
    .one(
      "INSERT INTO consoles(console_name, release_year) VALUES($1, $2) RETURNING console_name, release_year",
      [console.console_name, console.release_year]
    )
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log("ERROR:", error); // print error;
      return "Error";
    });
}

function getConsoleWithId(id) {
  return db
    .one("SELECT * FROM consoles where id = $1", id)
    .then(function(data) {
      return data;
    })
    .catch(function(error) {
      console.log("ERROR:", error);
      return "Error";
    });
}

function getArrayOfGamesByConsole(console_id) {
  return db
    .any("SELECT * FROM games WHERE console_id = $1", console_id)
    .then(function(data) {
      return data;
    })
    .catch(function(error) {
      console.log("ERROR:", error);
      return "Error";
    });
}

function getArrayOfStudios() {
  return db
    .any("SELECT * FROM studios")
    .then(function(data) {
      return data;
    })
    .catch(function(error) {
      console.log("ERROR:", error);
      return "Error";
    });
}

function getStudioWithId(id) {
  return db
    .one("SELECT * FROM studios where id = $1", id)
    .then(function(data) {
      return data;
    })
    .catch(function(error) {
      console.log("ERROR:", error);
      return "Error";
    });
}

function getArrayOfGamesByStudios(studio_id) {
  return db
    .any("SELECT * FROM games WHERE studio_id = $1", studio_id)
    .then(function(data) {
      return data;
    })
    .catch(function(error) {
      console.log("ERROR:", error);
      return "Error";
    });
}

function postStudioIntoTable(studio) {
  return db
    .one(
      "INSERT INTO studios(studio_name, year_established) VALUES($1, $2) RETURNING studio_name, year_established",
      [studio.studio_name, studio.year_established]
    )
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log("ERROR:", error); // print error;
      return "Error";
    });
}

function postGameIntoTable(game) {
  return db
    .one(
      "INSERT INTO games(game_title, game_release_year, pegi_rating, genre_id, studio_id, console_id ) VALUES($1, $2, $3, $4, $5, $6) RETURNING game_title, game_release_year, pegi_rating, genre_id, studio_id, console_id",
      [
        game.game_title,
        game.game_release_year,
        game.pegi_rating,
        game.genre_id,
        game.studio_id,
        game.console_id
      ]
    )
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log("ERROR:", error); // print error;
      return "Error";
    });
}

function getArrayOfGames() {
  return db
    .any(
      "select games.id, game_title, game_release_year, pegi_rating, votes, genre_name AS genre, studio_name AS studio, console_name AS console FROM games INNER JOIN genres ON games.genre_id = genres.id INNER JOIN studios ON games.studio_id = studios.id INNER JOIN consoles ON games.console_id = consoles.id;"
    )
    .then(function(data) {
      return data;
    })
    .catch(function(error) {
      console.log("ERROR:", error);
      return "Error";
    });
}

function getGameWithId(id) {
  return db
    .one(
      "select games.id, game_title, game_release_year, pegi_rating, votes, genre_name AS genre, studio_name AS studio, console_name AS console FROM games INNER JOIN genres ON games.genre_id = genres.id INNER JOIN studios ON games.studio_id = studios.id INNER JOIN consoles ON games.console_id = consoles.id WHERE games.id = $1;",
      id
    )
    .then(function(data) {
      return data;
    })
    .catch(function(error) {
      console.log("ERROR:", error);
      return "Error";
    });
}

module.exports = {
  getArrayOfGenres,
  getGenreWithId,
  getArrayOfGamesByGenres,
  getArrayOfConsoles,
  postConsoleIntoTable,
  getConsoleWithId,
  getArrayOfGamesByConsole,
  getArrayOfStudios,
  getStudioWithId,
  getArrayOfGamesByStudios,
  postStudioIntoTable,
  postGameIntoTable,
  getArrayOfGames,
  getGameWithId
};
