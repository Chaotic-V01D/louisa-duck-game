/*let canvas = document.getElementById("gamespace")
let ctx = canvas.getContext('2d')

let buttons = [];
document.onkeydown = function (e) {
  e = e || window.event;
  buttons[e.keyCode] = true;
};
document.onkeyup = function (e) {
  e = e || window.event;
  buttons[e.keyCode] = false;
};

let player = {
  x: 0,
  y: 0,
  width: 25,
  height: 25,
  id: 100000+Math.floor(899999*Math.random()),
  color: ("rgba(" + Math.floor(255*Math.random()) + ", " + Math.floor(255*Math.random()) + ", " + Math.floor(255*Math.random()) + ")"),
  getKeys: function (e){
    if (buttons[38] || buttons[87]) {
      this.y-=1
    } else if (buttons[40] || buttons[83]) {
      this.y+=1
    }
    if (buttons[37] || buttons[65]) {
      this.x-=1
    } else if (buttons[39] || buttons[68]) {
      this.x+=1
    }
  },
  render: function (){
    ctx.fillStyle = player.color;
      ctx.fillRect(
        player.x - player.x + (canvas.width / 2 - player.width / 2),
        player.y - player.y + (canvas.height / 2 - player.height / 2),
        player.width,
        player.height
      );
  }
}

function renderOtherCharacters(x, y, width, height, id, color){
    ctx.fillStyle = color;
      ctx.fillRect(
        x - player.x + (canvas.width / 2 - player.width / 2),
        y - player.y + (canvas.height / 2 - player.height / 2),
        width,
        height
      );
}
function renderScreen(){
  fetch("getPlayerPositions")
    .then((response) => response.json())
    .then((positions) => {
      player.getKeys()
      player.render()
      positions.forEach(e => renderOtherCharacters(e.x, e.y, e.width, e.height, e.id, e.color))
      fetch("sendPositions/" + player.x + "/" + player.y + "/" + player.id + "/" + player.color)
        .then((response) => response.json())
        .then((success) => { })
      
    })
  window.requestAnimationFrame(renderScreen)
}
renderScreen()
/*
function createRoom(roomName){
  getCode();
  fetch("createRoom/" + roomCode + "/" + roomName)
    .then((response) => response.json())
    .then((success) => {
      if (success) {
        console.log("Room created");
      } else {
        window.location.reload;
      }
    });
}
*/