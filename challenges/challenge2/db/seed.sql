DROP DATABASE IF EXISTS gaming;
CREATE DATABASE gaming;

\c gaming;

CREATE TABLE consoles (
  id SERIAL PRIMARY KEY,
  console_name VARCHAR NOT NULL,
  release_year INT NOT NULL
);

CREATE TABLE studios (
  id SERIAL PRIMARY KEY,
  studio_name VARCHAR NOT NULL,
  year_established INT NOT NULL
);

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  genre_name VARCHAR
);

CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  game_title VARCHAR NOT NULL,
  game_release_year INT NOT NULL,
  pegi_rating INT NOT NULL,
  votes INT DEFAULT 0,
  genre_id INT NOT NULL,
  studio_id INT NOT NULL,
  console_id INT NOT NULL,
  FOREIGN KEY (genre_id) REFERENCES genres(id),
  FOREIGN KEY (studio_id) REFERENCES studios(id),
  FOREIGN KEY (console_id) REFERENCES consoles(id)
);

INSERT INTO studios (studio_name, year_established)
  VALUES ('Nintendo', 1889),
         ('Ubisoft', 1986),
         ('Electronic Arts', 1982),
         ('Sony', 1946),
         ('Square Enix',1975),
         ('Capcom', 1983),
         ('Sega', 1960),
         ('Namco', 1955),
         ('Shiny', 1993),
         ('Konami', 1969),
         ('Naughty Dog', 1984);

INSERT INTO consoles (console_name, release_year)
  VALUES ('NES', 1983),
         ('SNES', 1991),
         ('N64', 1996),
         ('MASTERSYSTEM', 1987),
         ('MEGADRIVE', 1989),
         ('PS1', 1994),
         ('PS2', 2000);

INSERT INTO genres (genre_name)
  VALUES ('Platformer'),
         ('RPG'),
         ('Fighting'),
         ('FPS'),
         ('Racing'),
         ('Action'),
         ('Beat-em-up'),
         ('Puzzle'),
         ('Adventure');

INSERT INTO games (game_title, genre_id, game_release_year, studio_id, console_id, pegi_rating)
  VALUES ('Donkey Kong', 1, 1983, 1, 1, 7),
         ('Mario Bros', 1, 1985, 1, 1, 7),
         ('Donkey Kong Country', 1, 1994, 1, 2, 7),
         ('Chrono Trigger', 2, 1995, 5, 2, 12),
         ('Street Fighter 2', 3, 1991, 6, 2, 12),
         ('Goldeneye', 4, 1997, 1, 3, 16),
         ('Super Mario 64', 1, 1996, 1, 3, 7),
         ('Mario Kart 64', 5, 1996, 1, 3, 3),
         ('F-Zero X', 5, 1988, 1, 3, 3),
         ('Space Harrier', 6, 1985, 7, 4, 12),
         ('Black Belt', 7, 1986, 7, 4, 7),
         ('Altered Beast', 1, 1988, 7, 5, 12),
         ('Sonic the Hedgehog', 1, 1991, 7, 5, 3),
         ('Dr Robotnik`s Mean Bean Machine', 8, 1993, 7, 5, 3),
         ('Michael Jackson`s Moonwalker', 7, 1989, 7, 5, 16),
         ('ToeJam & Earl', 9, 1991, 7, 5, 3),
         ('Earthworm Jim', 1, 1994, 9, 5, 12),
         ('Crash Bandicoot', 1, 1996, 11, 6, 7),
         ('Pandemonium', 1, 1996, 4, 6, 7),
         ('Tekken 2', 3, 1995, 8, 6, 16),
         ('Final Fantasy VII', 2, 1997, 5, 6, 7),
         ('Metal Gear Solid 2: Sons of Liberty', 6, 2001, 10, 7, 16),
         ('Metal Gear Solid 3: Snake Eater', 6, 2004, 10, 7, 18),
         ('Final Fantasy X', 2, 2001, 5, 7, 7),
         ('Final Fantasy XII', 2, 2006, 5, 7, 7);
