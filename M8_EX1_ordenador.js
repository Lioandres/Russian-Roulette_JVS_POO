export class Ordenador {
  #brand;
  #model;
  #processor;
  #ram;
  #capacity;

  constructor(brand, model, processor, ram, capacity) {
    this.#brand = brand;
    this.#model = model;
    this.#processor = processor;
    this.#ram = ram;
    this.#capacity = capacity;
  }
  // Métodos getter
  getBrand() {
    return this.#brand;
  }

  getModel() {
    return this.#model;
  }
  getProcessor() {
    return this.#processor;
  }
  getRam() {
    return this.#ram;
  }
  getCapacity() {
    return this.#capacity;
  }
  //Métodos Setter
  setProcessor(processor) {
    this.#processor = processor;
  }

  setRam(ram) {
    this.#ram = ram;
  }
  setCapacity(capacity) {
    this.#capacity = capacity;
  }

  showExecution(program) {
    let c = program;
    console.log(`En estos momentos se está ejecutando ${c}`);
  }

  toString() {
    console.log(
      `Las características de este ordenador son\n Marca:${this.getBrand()} \n Modelo:${this.getModel()}\n Procesador:${this.getProcessor()}\n RAM:${this.getRam()} \n Capacidad:${this.getCapacity()}`
    );
  }
}
