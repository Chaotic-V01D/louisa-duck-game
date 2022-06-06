// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
/*const express = require("express");
const app = express();
/*

let playerPositions = []

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
  console.log("got a GET request")
});

// http://expressjs.com/en/starter/basic-routing.html
app.get('/host', function(request, response) {
  response.sendFile(__dirname + '/views/host.html');
});

app.get('/sendPositions/:x/:y/:id/:color)', function(request, response) {
  let updatedPlayer = playerPositions.findIndex(e=>e.id==request.params.id)
})*/
/*
app.get('/enterJoinCode/:code/:playerName', function(request, response) {
  let gameFound = currentRooms.some(gameExists(request.params.code))
  if (gameFound){
   response.json("Room Found") 
    currentRooms[currentRooms.findIndex(gameExists(request.params.code))].players.push(request.params.playerName)
  }else{
   response.json("Room Could Not Be Found") }
  //response.json(request.params.code)
});

app.get('/dropOut/:code/:playerName', function(request, response) {
  //Don't need to search the list to check if the player exists in that room unless Jonas tries to mess with stuff
  let playersListForRoom = currentRooms[currentRooms.findIndex(gameExists(request.params.code))].players
  currentRooms[currentRooms.findIndex(gameExists(request.params.code))].players.splice(playersListForRoom.indexOf(request.params.playerName, 1))
  response.json(playersListForRoom)
})

app.get('/updateLobby/:code', function(request, response) {
  //don't need to worry about asking for a nonexistent room...right?
  response.json(currentRooms[currentRooms.findIndex(gameExists(request.params.code))].players)
  //response.json(currentRooms[currentRooms.findIndex(gameExists(request.params.code))].players.length)
})

app.get("/requestGreetingFromServer", (request, response) => {
  response.json("hello");
});

app.get("/createRoom/:code/:roomName", (request, response) => {
  currentRooms.push({gameState: "waiting/", players: [request.params.roomName], roomCode: request.params.code})
  response.json(true);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
*/