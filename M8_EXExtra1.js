class Gun {
    #actualPosition
    #bulletPosition

    constructor(){
        this.#actualPosition=Math.ceil((Math.random() * 6))
        this.#bulletPosition=Math.ceil((Math.random() * 6))
    }

    fire(){
        return (this.#actualPosition===this.#bulletPosition)? true: false 
    }

    nextBullet(){
        this.#actualPosition++
        if(this.#actualPosition>6) this.#actualPosition=1
    }

    inform(){
        console.log(`La posicion actual es en el lugar: "${this.#actualPosition}"\ny la bala se encuentra en al posicion "${this.#bulletPosition}"`)
        
    }
}

class Player {
    id
    name
    nickname
    alive

    constructor(id,name){
        this.id=id
        this.name=name
        this.nickname=name+id
        this.alive=true

    }
    play(revolver){
        revolver.inform()
        // if(!revolver.fire()) console.log(`el jugador  número ${this.id} ,${this.name} sigue vivo` )
        // if(revolver.fire()===true && this.id===revolver.inform()) {
        //     console.log(`el jugador que tiene la posición ${this.id} , con nombre ${this.name} esta muerto` )
        // }
        // if(!revolver.fire()) {
        //     console.log(`el jugador que tiene la posición  ${this.id} , con nombre ${this.name} sigue vivo` )
        // }   
        return (revolver.fire())  //console.log(`el jugador número ${this.id} ,${this.#name} está muerto` )
        
    }
}

class Game {
    #playersList
    #gun
    constructor(){
        this.#playersList=[]
        this.#gun=new Gun
    }
    savePlayer(player){
        this.#playersList.push(player)    
    }
    endGame(){
        
        let index=0
        let player=this.#playersList[index]
        while (!player.play(this.#gun) ) {
            if(player.lenght===index){
                this.anotherRound()
                index=0
            }
            if(player.lenght!=index){
                
                index++
            }
            this.#gun.nextBullet()
        }

        player.alive=false
        this.anotherRound()
        console.log(`El juego ha terminado porque ${player.name} esta muerto`)
        document.getElementById("result2").textContent=`El juego ha terminado porque ${player.name} esta muerto`
    } 
    anotherRound(){
        
        let player1
        let content=""
        for(let i=0;i<this.#playersList.length;i++){
              player1=this.#playersList[i]
              if(player1.alive) {
                  console.log(`el jugador que tiene la posición ${player1.id} , con nombre ${player1.name} sigue vivo`)
                  content+=`el jugador que tiene la posición ${player1.id} , con nombre ${player1.name} sigue vivo<br>`
              }
              if(!player1.alive) {
                  console.log(`El jugador que tiene la posición ${player1.id} , con nombre ${player1.name} esta muerto` )
                  content+=`El jugador que tiene la posición ${player1.id} , con nombre ${player1.name} esta muerto<br>`
              }
        }
        document.getElementById("result1").innerHTML=content
        
    }   
}

let game1=new Game
let id=0

function addPlayer(){
    let name=document.getElementById("name").value
    id+=1
    let player=new Player(id,name)
    game1.savePlayer(player)
    
    
    console.log(game1)
} 
function LetsPlay(){
    game1.endGame()
    

}