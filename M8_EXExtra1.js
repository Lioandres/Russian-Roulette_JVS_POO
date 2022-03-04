class Gun {
  constructor() {
    this.actualPosition = Math.ceil(Math.random() * 6);
    this.bulletPosition = Math.ceil(Math.random() * 6);
  }

  fire() {
    return this.actualPosition === this.bulletPosition ? true : false;
  }

  nextBullet() {
    this.actualPosition++;
    if (this.actualPosition > 6) this.actualPosition = 1;
  }

  inform() {
    let informPrintBox = document.getElementById("playerStatus");
    informPrintBox.textContent = `La posicion actual es en el lugar: "${this.actualPosition}"\ny la bala se encuentra en la posicion "${this.bulletPosition}"`;
  }
}

class Player {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.nickname = name + id;
    this.alive = true;
  }

  play(gun) {
    let playerStatus = "";
    if (gun.fire()) {
      playerStatus = `El juego se ha acabado porque el jugador ${game1.playersList[counter].name} esta esta muerto`;
      game1.playersList[counter].alive = false;
      game1.showRoundResults();
      game1.endGame();
    }
    if (!gun.fire()) {
      playerStatus = `El jugador ${game1.playersList[counter].name} sigue vivo`;
    }
    document.getElementById("playerStatus").textContent = playerStatus;
  }
}

class Game {
  constructor() {
    this.playersList = [];
    this.gun = new Gun();
  }

  savePlayer(player) {
    this.playersList.push(player);
  }

  showRoundResults() {
    let resultPrintBox = document.getElementById("roundResult");
    while (resultPrintBox.firstChild) {
      resultPrintBox.removeChild(resultPrintBox.firstChild);
    }
    let roundText = document.createElement("h2");
    roundText.textContent = `En esta Ronda:`;
    resultPrintBox.appendChild(roundText);
    for (let i = 0; i < game1.playersList.length; i++) {
      let playerPrintResult = document.createElement("h2");
      resultPrintBox.appendChild(playerPrintResult);
      if (game1.playersList[i].alive === false)
        playerPrintResult.textContent = `El jugador ${game1.playersList[i].name} esta muerto`;
      if (game1.playersList[i].alive === true)
        playerPrintResult.textContent = `El jugador ${game1.playersList[i].name} sigue vivo`;
    }
  }

  endGame() {
    return (endGame1 = true);
  }
}

let game1 = new Game();
let id = 0;

function addPlayer() {
  if (id >= 6) return alert(`El numero máximo de 6 jugadores ya fué alcanzado`);

  let name = document.getElementById("name").value;
  id += 1;
  let player = new Player(id, name);

  let namePrintBox = document.getElementById("playerName");
  let playerPrintName = document.createElement("h2");
  playerPrintName.textContent = player.name;
  namePrintBox.appendChild(playerPrintName);

  game1.savePlayer(player);

  console.log(game1); // This line can be removed after testing
}

let counter = 0;
let endGame1;



function fire() {
  if (endGame1)
    return alert(`No es posible disparar porque el juego ha terminado`);
  if (id === 0) return alert(`Debe ingresar un jugador antes de disparar`);
  let resultPrintBox = document.getElementById("roundResult");
    while (resultPrintBox.firstChild) {
      resultPrintBox.removeChild(resultPrintBox.firstChild);
    }
    

  game1.gun.inform();
  game1.playersList[counter].play(game1.gun);
  game1.gun.nextBullet();
  counter += 1;
  if (counter === game1.playersList.length) {
    counter = 0;
    game1.showRoundResults();
  }
}
