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

