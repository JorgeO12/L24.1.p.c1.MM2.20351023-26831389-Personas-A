export default class Cl_personas {
    constructor(nombre, sexo) {
        this.nombre = nombre;
        this.sexo = sexo;
    }

    set sexo(sexo) {
        this._sexo = sexo;
    }
    get sexo() {
        return this._sexo;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
}
