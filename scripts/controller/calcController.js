class CalcController{

  constructor() {
    this._displayCalc = "0";
    this.currentDate;
    this.initialize();
  }

  initialize() {
    let displayCalcEl = document.querySelector("#display");
    let dateEl = document.querySelector("#data");
    let timeEl = document.querySelector("#hora");
  }

  get displayCalc() {
    return this._displayCalc;
  }

  set displayCalc(valor) {
    this._displayCalc = valor;
  }
  
  get dataAtual() {
    return this.currentDate;
  }

  set currentDate(valor) {
    this.currentDate = valor;
  }

}