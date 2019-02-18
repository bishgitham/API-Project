_To enable tests for a specific challenge remove the x before the first describe in the necessary spec file._

## Prepare Pizzas

You're the supervisor of a fast-food pizza restaurant and your staff are having trouble keeping up with the orders. You decide that, as always, javascript has the answers, and you decide to build a function to improve the efficiency of your staff and solve all of your management woes.

Your challenge is to write a function which takes an array of pizza orders and processes them for delivery. You have been provided with 3 utility functions: 

- **preparePizza** - Takes a single pizza `order` and a `callback` and returns a `raw pizza`.
- **cookPizza** - Takes a single `raw pizza` and a `callback` and returns a `cooked pizza`.
- **boxPizza** - Takes a single `cooked pizza` and a `callback` and return a `boxed pizzas`.

All of these utility functions are asynchronous so you'll have to make use of callbacks in order to get your pizzas ready for delivery in one piece.


## OLD-SKOOL GAMES API

Your task is to build an api that serves data from an SQL database containing data on classic console games. The seed file has been generously provided for your convenience, **DO NOT CHANGE IT**. 

_NOTE: If you are using Ubuntu you will need to add your postgres username and password to the config object in db/db.js_

To seed the database navigate to the root folder and run the following command:
`npm run seed`

_NOTE: If you are using a mac make sure that the postgres app is running. (the little elephant in the top right of the screen)_g

A script has also been added to the package.json for running your server.
`nmp run dev`

A basic server has already been set up for you. 
Your API should:
- Be built inside the challenge2 folder. Don't worry about having your models seperated from your controllers, but aside from that try to follow the pattern of MVC architecture.
- Use routes to handle requests made to your server.
- Handle errors using next().
- Serve the following endpoints with the relevant data in json format:

**NOTE: One of the benefits of using SQL is the power to construct your queries to respond with the requested data in the exact format you require. Keep this in mind when building your API endpoints. It would be much more efficient if you were more specific with your queries rather than having to alter the response you get from a broader query.**

## Level 1
Returns an object containing an array of genre objects:

`GET /api/genres`
___

Returns an object containing a single genre object:

`GET /api/genres/:genre_id`
___

Returns an object containing an array of game objects by genre:

`GET /api/genres/:genre_id/games`
___

Returns an object containing an array of console objects:

`GET /api/consoles`
___

Adds a new console to the database and responds with an object containing the new console object if the post is successful:

`POST /api/consoles`
```js
//body
{
  console: {
    "console_name": "CONSOLE_NAME",
    "release_year": 2080
  }
}

```
___

Returns an object containing a single console object:

`GET /api/consoles/:console_id`
___

Returns an object containing an array of game objects by console:

`GET /api/consoles/:console_id/games`
___

Returns an object containing an array of studio objects:

`GET /api/studios`
___

Adds a new studio to the database and responds with an object containing the new console object if the post is successful:

`POST /api/studios`
```js
//body
{
  studio: {
    "studio_name": "STUDIO_NAME",
    "year_established": 2025
  }
}
```
___

Returns an object containing a single studio object:

`GET /api/studios/:studio_id`
___

Returns an array of game objects by studio:

`GET /api/studios/:studio_id/games`
___

Adds a new game to the database and responds with an object containing the new console object if the post is successful:

`POST /api/games`
```js
//body
{
  game: {
    "game_title": "Super Mauro: Mitch's castle",
    "game_release_year": 2020,
    "pegi_rating": 3,
    "genre": 1,
    "studio": 3,
    "console": 4
  }
}
```
___

Handles non-existant routes with a 404 response:

`GET /api/this/route/is/invalid`
___

**USING AN SQL JOIN TABLE** - Returns an object containing an array of game objects with their genre_id, studio_id and console_id columns populated with their genre_name, studio_name and console_name values respectively, with the column names as genre, studio and console. 

`GET /api/games`

Example response:

```js
{
  games: [
    {
      id: 1,
      game_title: 'Mitch Fandango',
      game_release_year: 2200,
      pegi_rating: 18,
      votes: 12,
      genre: 'Platformer',
      studio: 'NorthGamers',
      console: 'NC64' 
    },
    {
      id: 2,
      game_title: 'Metal Gear Mitch',
      game_release_year: 2200,
      pegi_rating: 18,
      votes: 9999,
      genre: 'Action',
      studio: 'Konami',
      console: 'PS5'
    }
  ]
}

```
___

**USING AN SQL JOIN TABLE** - Returns an object containing a single game object with its genre_id, studio_id and console_id columns populated with their genre_name, studio_name and console_name values respectively, with the column names as genre, studio and console. 

`GET /api/games/:game_id`

Example response:

```js
{
  game: {
    id: 1,
    game_title: 'Mitch Fandango',
    game_release_year: 2200,
    pegi_rating: 18,
    votes: 12,
    genre: 'Platformer',
    studio: 'NorthGamers',
    console: 'NC64'
  }
}
```
___
## Level 2
Adjust your endpoints to handle the following queries:

Adjusts the votes (by 1) of an individul game dependant on the request query and responds with an object containing the updated game:

`PUT /api/games/:game_id?vote=<up OR down>`
___
Returns an object containing an array of games released in the year specified in the query:

`GET /api/games?year=<NUMBER>`
___
___
#### FROM THIS POINT FORWARD WRITE TESTS TO CHECK THE FOLLOWING ENDPOINTS AS YOU IMPLEMENT EACH ONE
___
___
Returns an object containing an array of games up to the age specified in the query:

`GET /api/games?since=<NUMBER>`
___
Returns an object containing an array of games that have the pegi rating specified in the query:

`GET /api/games?pegi=<NUMBER>`
___

**MAKE YOUR `/api/games` DEAL WITH MULTIPLE QUERIES**

_**Examples:**_

Returns an object containing all games since 1995 that have a pegi rating of 7:

`GET /api/games?pegi=7&since=1995`

Return an object containing all games since 1991 that have a pegi rating of 12:

`GET /api/games?pegi=12&year=1991`
___
Returns an object containing an array of consoles released in the year specified in the query:

`GET /api/consoles?year=<NUMBER>`
___
Returns an object containing an array of consoles up to the age specified in the query:

`GET /api/consoles?since=<NUMBER>`
___
Returns an object containing an array of studios established in the year specified in the query:

`GET /api/studios?year=<NUMBER>`
___
Returns an object containing an array of studios up to the age specified in the query:

`GET /api/studios?since=<NUMBER>`
___
