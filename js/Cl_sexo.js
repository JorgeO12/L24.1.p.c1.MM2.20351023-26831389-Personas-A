export default class Cl_sexo {
    constructor() {
        this.cntTotal = 0;
        this.hombres = 0;
        this.mujeres = 0;
    } 

  procesar (p) {
    this.cntTotal++;
    if (p.sexo == 'M') {
        this.hombres++;
    } else if (p.sexo == 'F') {
        this.mujeres++;
    }
  }

  porcentaje() {
    return (this.mujeres / this.cntTotal) * 100;
  }

  hombreomujer() {
    if (this.hombres > this.mujeres) {
        return 'Hay mas Hombres';
    } else if (this.hombres < this.mujeres) {
        return 'Hay más mujeres';
    } else {
        return 'Ambos por igual';
    }
  }
}