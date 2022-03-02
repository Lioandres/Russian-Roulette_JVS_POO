class Hotel {
  #hotelName;
  #quantityRooms;
  #quantityFloors;
  #surfaceHotel;

  constructor(hotelName, quantityRooms, quantityFloors, surfaceHotel) {
    this.#hotelName = hotelName;
    this.#quantityRooms = quantityRooms;
    this.#quantityFloors = quantityFloors;
    this.#surfaceHotel = surfaceHotel;
  }
  // Getters
  getHotelName() {
    return this.#hotelName;
  }
  getQuantityRooms() {
    return this.#quantityRooms;
  }
  getQuantityFloors() {
    return this.#quantityFloors;
  }
  getSurfaceHotel() {
    return this.#surfaceHotel;
  }

  // Setters
  setHotelName(hotelName) {
    this.#hotelName = hotelName;
  }

  setQuantityRooms(quantityRooms) {
    this.#quantityRooms = quantityRooms;
  }
  setQuantityFloors(quantityFloors) {
    this.#quantityFloors = quantityFloors;
  }

  setSurfaceHotel(surfaceHotel) {
    this.#surfaceHotel = surfaceHotel;
  }

  // Meths
  calcularManteniment() {
    let numPeople = parseInt(this.getQuantityRooms() / 20);
    let totalCost = numPeople * 1500;
    return `El número de personas necesario para el mantenimeinto del hotel es: ${numPeople} y el costo total por mes es: ${totalCost} euros`;
  }
}

let hotelList = [];

function crearHotel() {
  hotelName = prompt("Ingrese el nombre del Hotel");
  quantityRooms = prompt("ingrese el número de habitaciones");
  quantityFloors = prompt("ingrese el número de pisos del hotel");
  surfaceHotel = prompt("Ingrese la superficie del hotel");
  const hotelElement = new Hotel(
    hotelName,
    quantityRooms,
    quantityFloors,
    surfaceHotel
  );
  hotelList.push(hotelElement);
  console.log(hotelList);
}

function donarDeBaixaHotel() {
  let index = 0;
  const hotelSearched = prompt(`ingrese el nombre del hotel a borrar`);
  let hotelFound;
  while (index < hotelList.length && hotelFound === undefined) {
    if (hotelList[index].getHotelName() == hotelSearched) {
      hotelFound = hotelList[index];
      hotelList.splice(index, 1);
    }

    index++;
  }

  return hotelFound
    ? alert(`el hotel ha sido eliminado`)
    : alert(`el hotel No esta en la base de datos`);
}

function veureHotel() {
  let index = 0;
  const hotelSearched = prompt(`ingrese el nombre del hotel a VER`);
  let hotelFound;
  while (index < hotelList.length && hotelFound === undefined) {
    if (hotelList[index].getHotelName() === hotelSearched) {
      hotelFound = hotelList[index];
    }

    index++;
  }

  return hotelFound
    ? alert(
        `El hotel ${hotelFound.getHotelName()}, tiene:\n ${hotelFound.getQuantityRooms()} habitaciones\n ${hotelFound.getQuantityFloors()} pisos\n ${hotelFound.getSurfaceHotel()} m2 de superficie\n${hotelFound.calcularManteniment()}`
      )
    : alert(`el hotel No esta en la base de datos`);
}

function modificarHotel() {
  let index = 0;
  const hotelSearched = prompt(`ingrese el nombre del hotel a VER`);
  let hotelFound;
  while (index < hotelList.length && hotelFound === undefined) {
    if (hotelList[index].getHotelName() === hotelSearched) {
      hotelFound = hotelList[index];
    }

    index++;
  }
  if (!hotelFound) alert(`el hotel No esta en la base de datos`);
  if (hotelFound) {
    let option;
    while (option != 1 && option != 2 && option != 3) {
      option = parseInt(
        prompt(
          `Ingrese una opcion VÁLIDA que desea modificar:\n 1-Número de habitaciones\n 2-Número de pisos\n 3-Superficie Total`
        )
      );
    }

    if (option === 1) {
      hotelFound.setQuantityRooms(
        prompt(`ingrese el nuevo número de habitaciones`)
      );
      alert(`el número de habitaciones fue modificado con éxito`);
    }
    if (option === 2) {
      hotelFound.setQuantityFloors(prompt(`ingrese el nuevo número de pisos`));
      alert(`el número de pisos fue modificado con éxito`);
    }
    if (option === 3) {
      hotelFound.setSurfaceHotel(prompt(`ingrese la nueva SUPERFCIE`));
      alert(`La superficie fue modificada con éxito`);
    }
  }
}

// class UserRepositoryClass {
//     // const userRepository = []
//     #repository
//     constructor() {
//         this.#repository = []
//     }

//     saveUser(user) {
//         this.#repository.push(user)
//     }

//     findUser(email, password) {

//         let index = 0
//         let userFound;
//         const repository = this.#repository

//         while (index < repository.length && userFound === undefined /*!userLogged*/) {
//             const user = repository[index]
//             if ( user.getEmail() === email && user.samePassword(password) ) {
//                 userFound = user;
//             }
//             index++
//         }

//         if(!userFound) throw Error('user with this credentials not exist')
//         return userFound
//     }
// }

// //const userRepository = []
// const userRepository = new UserRepositoryClass()

// function generatId () {
//     return Math.random()
// }

// function registerUser () {
//     const username = document.getElementById('username').value
//     const email = document.getElementById('email').value
//     const passwordValue = document.getElementById('password').value
//     // const password = new Password(passwordValue) // value object
//     const id = generatId()

//     const user = new UserClass(username, email, passwordValue, id)

//     //userRepository.push(user)
//     userRepository.saveUser(user)

//     console.log('userRepository', userRepository)
// }

// function findUser (loginEmail, loginPassword) {

//     // buscar en userRepository si hay un usuario con el email y el password
//     // 1. buscar en un array = recorrer y mirar cada elemento
//     // 2. recorrer -> while, for...
//     // 3. cada elemento -> element = array[position]

//     // Si el elemento tiene una dada y es igual a email, parar el while y enseñar un mensaje de welcome con el username
//     // elemento = {username: 'Pepito', email: 'pepito@emial.com', password: 123, getEmail: function () { return this.email}}
//     let index = 0
//     let userLogged;
//     while (index < userRepository.length && userLogged === undefined /*!userLogged*/) {
//         const user = userRepository[index]
//         if ( user.getEmail() === loginEmail && user.samePassword(loginPassword) ) {
//             userLogged = user;
//         }
//         index++
//     }

//     return userLogged
// }

// function loginUser () {
//     const loginEmail = document.getElementById('email-login').value
//     const loginPassword = document.getElementById('password-login').value

//     //const userExist = findUser(loginEmail, loginPassword)

//     const userExist = userRepository.findUser(loginEmail, loginPassword)

//     if(userExist) console.log(`Welcome ${userExist.getUsername()}`)

// }
