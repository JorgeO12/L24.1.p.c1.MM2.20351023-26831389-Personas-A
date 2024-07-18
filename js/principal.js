/*
Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos datos y reporte
al final: el porcentaje de mujeres procesadas y si hay más hombres, 
más mujeres o ambos por igual.
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, Liz, Marcos y Leo; 
la salida requerida presenta el siguiente formato:
Porcentaje de mujeres procesadas: 58.33%
Hay más mujeres  */

import Cl_personas from './Cl_personas.js';
import Cl_sexo from './Cl_sexo.js';


const p1 = new Cl_personas('Luisa', 'F');
const p2 = new Cl_personas('Ana', 'F');
const p3 = new Cl_personas('Jose', 'M');
const p4 = new Cl_personas('Carmen', 'F');
const p5 = new Cl_personas('Rosa', 'F');
const p6 = new Cl_personas('Jose', 'M');
const p7 = new Cl_personas('Maria', 'F');
const p8 = new Cl_personas('Rafael', 'M');
const p9 = new Cl_personas('Luz', 'F');
const p10 = new Cl_personas('Liz', 'F');
const p11 = new Cl_personas('Marcos', 'M');
const p12 = new Cl_personas('Leo', 'M');

const sexo = new Cl_sexo();
sexo.procesar(p1);
sexo.procesar(p2);
sexo.procesar(p3);
sexo.procesar(p4);
sexo.procesar(p5);
sexo.procesar(p6);
sexo.procesar(p7);
sexo.procesar(p8);
sexo.procesar(p9);
sexo.procesar(p10);
sexo.procesar(p11);
sexo.procesar(p12);

let salida = document.getElementById('salida');

salida.innerHTML = `
Porcentaje de mujeres procesadas: ${sexo.porcentaje().toFixed(2)}%
<br>${sexo.hombreomujer()}
`;