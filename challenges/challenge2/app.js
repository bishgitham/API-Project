//const app = require('express')();

const express = require("express");
const app = express();
const bodyParser = require("body-parser"); //needed in POST
const jsonParser = bodyParser.json();
const {
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
} = require("./db/index");

app.get("/api/genres", (req, res) => {
  getArrayOfGenres().then(result => {
    const finalResult = { genres: result };
    res.send(finalResult);
  });
});

app.get("/api/genres/:genres_id", (req, res) => {
  const id = req.params.genres_id;
  getGenreWithId(id).then(result => {
    const finalResult = { genre: result };

    res.send(finalResult);
  });
});

app.get("/api/genres/:genres_id/games", (req, res) => {
  const genre_id = req.params.genres_id;
  getArrayOfGamesByGenres(genre_id).then(result => {
    const finalResult = { games: result };

    res.send(finalResult);
  });
});

app.get("/api/consoles", (req, res) => {
  getArrayOfConsoles().then(result => {
    const finalResult = { consoles: result };
    res.send(finalResult);
  });
});

app.post("/api/consoles", jsonParser, (req, res) => {
  const consoleObj = req.body;
  postConsoleIntoTable(consoleObj).then(result => {
    const finalResult = { console: result };
    res.status(201).send(finalResult);
  });
});

app.get("/api/consoles/:console_id", (req, res) => {
  const id = req.params.console_id;
  getConsoleWithId(id).then(result => {
    const finalResult = { console: result };
    res.send(finalResult);
  });
});

app.get("/api/consoles/:console_id/games", (req, res) => {
  const console_id = req.params.console_id;
  getArrayOfGamesByConsole(console_id).then(result => {
    const finalResult = { games: result };

    res.send(finalResult);
  });
});

app.get("/api/studios", (req, res) => {
  getArrayOfStudios().then(result => {
    const finalResult = { studios: result };
    res.send(finalResult);
  });
});

app.get("/api/studios/:studio_id", (req, res) => {
  const id = req.params.studio_id;
  getStudioWithId(id).then(result => {
    const finalResult = { studio: result };
    res.send(finalResult);
  });
});

app.get("/api/studios/:studio_id/games", (req, res) => {
  const studio_id = req.params.studio_id;
  getArrayOfGamesByStudios(studio_id).then(result => {
    const finalResult = { games: result };
    res.send(finalResult);
  });
});

app.post("/api/studios", jsonParser, (req, res) => {
  const studioObj = req.body;
  postStudioIntoTable(studioObj).then(result => {
    const finalResult = { studio: result };
    res.status(201).send(finalResult);
  });
});

app.post("/api/games", jsonParser, (req, res) => {
  const gameObj = req.body;
  postGameIntoTable(gameObj).then(result => {
    const finalResult = { game: result };
    res.status(201).send(finalResult);
  });
});

app.get("/api/games", (req, res) => {
  getArrayOfGames().then(result => {
    const finalResult = { games: result };
    res.send(finalResult);
  });
});

app.get("/api/games/:game_id", (req, res) => {
  const id = req.params.game_id;
  getGameWithId(id).then(result => {
    const finalResult = { game: result };
    res.send(finalResult);
  });
});

app.use(function(req, res) {
  // Invalid request
  res.status(404).send("Not found");
});

module.exports = app;
