const { expect } = require("chai");
const app = require("../challenges/challenge2/app");
const request = require("supertest")(app);

describe("/api", () => {
  describe("/genres", () => {
    it("GET /genres", () => {
      return request
        .get("/api/genres")
        .expect(200)
        .then(res => {
          expect(res.body).to.have.all.keys("genres");
          expect(res.body.genres.length).to.equal(9);
          expect(res.body.genres[0]).to.be.an("object");
        });
    });
    it("GET /genres/:genre_id", () => {
      return request
        .get("/api/genres/4")
        .expect(200)
        .then(res => {
          expect(res.body).to.have.all.keys("genre");
          expect(res.body.genre).to.be.an("object");
          expect(res.body.genre.genre_name).to.equal("FPS");
        });
    });
    it("GET /genres/:genre_id/games", () => {
      return request
        .get("/api/genres/6/games")
        .expect(200)
        .then(res => {
          expect(res.body).to.have.all.keys("games");
          expect(res.body.games.length).to.equal(3);
          expect(res.body.games[0].game_title).to.equal("Space Harrier");
        });
    });
  });
  describe("/consoles", () => {
    it("GET /consoles", () => {
      return request
        .get("/api/consoles")
        .expect(200)
        .then(res => {
          expect(res.body).to.have.all.keys("consoles");
          expect(res.body.consoles.length).to.equal(7);
          expect(res.body.consoles[0]).to.be.an("object");
        });
    });
    it("GET /consoles/:console_id", () => {
      return request
        .get("/api/consoles/3")
        .expect(200)
        .then(res => {
          expect(res.body).to.have.all.keys("console");
          expect(res.body.console).to.be.an("object");
          expect(res.body.console.console_name).to.equal("N64");
        });
    });
    it("GET /consoles/:console_id/games", () => {
      return request
        .get("/api/consoles/5/games")
        .expect(200)
        .then(res => {
          expect(res.body).to.have.all.keys("games");
          expect(res.body.games.length).to.equal(6);
          expect(res.body.games[0].game_title).to.equal("Altered Beast");
        });
    });
    it("POST /consoles", () => {
      const newConsole = {
        console_name: "CONSOLE_NAME",
        release_year: 2080
      };
      return request
        .post("/api/consoles")
        .send(newConsole)
        .expect(201)
        .then(res => {
          expect(res.body).to.have.all.keys("console");
          expect(res.body.console).to.be.an("object");
          expect(res.body.console.console_name).to.equal(
            newConsole.console_name
          );
          expect(res.body.console.release_year).to.equal(
            newConsole.release_year
          );
        });
    });
  });
  describe("/studios", () => {
    it("GET /studios", () => {
      return request
        .get("/api/studios")
        .expect(200)
        .then(res => {
          expect(res.body).to.have.all.keys("studios");
          expect(res.body.studios.length).to.equal(11);
          expect(res.body.studios[0]).to.be.an("object");
        });
    });
    it("GET /studios/:studio_id", () => {
      return request
        .get("/api/studios/11")
        .expect(200)
        .then(res => {
          expect(res.body).to.have.all.keys("studio");
          expect(res.body.studio).to.be.an("object");
          expect(res.body.studio.studio_name).to.equal("Naughty Dog");
        });
    });
    it("GET /studios/:studio_id/games", () => {
      return request
        .get("/api/studios/4/games")
        .expect(200)
        .then(res => {
          expect(res.body).to.have.all.keys("games");
          expect(res.body.games.length).to.equal(1);
          expect(res.body.games[0].game_title).to.equal("Pandemonium");
        });
    });
    it("POST /studios", () => {
      const newStudio = {
        studio_name: "NorthGamers",
        year_established: 2025
      };
      return request
        .post("/api/studios")
        .send(newStudio)
        .expect(201)
        .then(res => {
          expect(res.body).to.have.all.keys("studio");
          expect(res.body.studio.studio_name).to.equal(newStudio.studio_name);
          expect(res.body.studio.year_established).to.equal(
            newStudio.year_established
          );
        });
    });
  });
  describe("/games", () => {
    it("GET /games", () => {
      const expected = {
        id: 1,
        game_title: "Donkey Kong",
        game_release_year: 1983,
        pegi_rating: 7,
        votes: 0,
        genre: "Platformer",
        studio: "Nintendo",
        console: "NES"
      };
      return request
        .get("/api/games")
        .expect(200)
        .then(res => {
          expect(res.body).to.have.all.keys("games");
          expect(res.body.games.length).to.equal(25);
          expect(res.body.games[0]).to.be.an("object");
          expect(res.body.games[0]).to.eql(expected);
        });
    });
    it("GET /games/:game_id", () => {
      const expected = {
        id: 14,
        game_title: "Dr Robotnik`s Mean Bean Machine",
        game_release_year: 1993,
        pegi_rating: 3,
        votes: 0,
        genre: "Puzzle",
        studio: "Sega",
        console: "MEGADRIVE"
      };
      return request
        .get("/api/games/14")
        .expect(200)
        .then(res => {
          expect(res.body).to.have.all.keys("game");
          expect(res.body.game).to.be.an("object");
          expect(res.body.game).to.eql(expected);
        });
    });
    it("POST /games", () => {
      const newGame = {
        game_title: "Super Mauro",
        game_release_year: 2200,
        pegi_rating: 18,
        genre_id: 1,
        studio_id: 2,
        console_id: 3
      };
      return request
        .post("/api/games")
        .send(newGame)
        .expect(201)
        .then(res => {
          expect(res.body).to.have.all.keys("game");
          expect(res.body.game).to.be.an("object");
          expect(res.body.game.game_title).to.equal(newGame.game_title);
          expect(res.body.game.game_release_year).to.equal(
            newGame.game_release_year
          );
          expect(res.body.game.pegi_rating).to.equal(newGame.pegi_rating);
          expect(res.body.game.genre_id).to.equal(newGame.genre_id);
          expect(res.body.game.studio_id).to.equal(newGame.studio_id);
          expect(res.body.game.console_id).to.equal(newGame.console_id);
        });
    });
    it("PUT /api/games/:game_id?vote=up", () => {
      const expected = {
        id: 1,
        game_title: "Donkey Kong",
        game_release_year: 1983,
        pegi_rating: 7,
        votes: 1,
        genre: "Platformer",
        studio: "Nintendo",
        console: "NES"
      };
      return request
        .put("/api/games/1?vote=up")
        .expect(200)
        .then(res => {
          expect(res.body).to.have.all.keys("game");
          expect(res.body.game).to.eql(expected);
        });
    });
    it("PUT /api/games/:game_id?vote=down", () => {
      const expected = {
        id: 1,
        game_title: "Donkey Kong",
        game_release_year: 1983,
        pegi_rating: 7,
        votes: 0,
        genre: "Platformer",
        studio: "Nintendo",
        console: "NES"
      };
      return request
        .put("/api/games/1?vote=down")
        .expect(200)
        .then(res => {
          expect(res.body).to.have.all.keys("game");
          expect(res.body.game).to.eql(expected);
        });
    });
    it("GET /api/games?year=1996", () => {
      return request
        .get("/api/games?year=1996")
        .expect(200)
        .then(res => {
          expect(res.body).to.have.all.keys("games");
          expect(res.body.games.length).to.equal(4);
          expect(res.body.games[1].game_title).to.equal("Mario Kart 64");
        });
    });
    //FROM THIS POINT FORWARD YOU MUST WRITE TESTS OF YOUR OWN, USE THE ABOVE TESTS AS A GUIDE
    // it('', () => {

    // });
  });
});
