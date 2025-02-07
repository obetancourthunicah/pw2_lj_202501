let formElement = null;
let txtNombreInput = null;
let txtEdadInput = null;

let btnCiclos = null;

const emptyStringRegex = /^\s*$/; ///regex101

document.addEventListener('DOMContentLoaded', ()=>{
    formElement = document.getElementById('formToSend');
    txtNombreInput = document.getElementById('txtNombre');
    txtEdadInput = document.getElementById('txtEdad');
    btnCiclos = document.getElementById('btnCiclos');

    txtNombreInput.addEventListener('change', (e)=>{
        const { value, name} = e.target;
        if ( emptyStringRegex.test(value) ) {
            alert('El Nombre no puede ir vacio');
            txtNombreInput.focus();
        }
        console.log("On Change", {value, name});
    });

    txtEdadInput.addEventListener('change', (e)=>{
        const {value, name} = e.target;
        const edad = Number(value);
        if (edad <= 0 || edad > 120) {
            alert('La edad no puede ser  menor o igual a cero o mayor a 120');
            txtEdadInput.focus();
        }
    });

    btnCiclos.addEventListener('click', (e)=>{
        e.preventDefault();
        e.stopPropagation();
        let arrNumeroRandom = [];

        for(let i = 0; i < 100; i++) {
            arrNumeroRandom.push(Math.ceil(Math.random() * 100));
        }
        let strFromCiclo = '';
        for( let j = 0; j < arrNumeroRandom.length ; j++){
            strFromCiclo += String(arrNumeroRandom[j]) + ', ';
        }

        let strFromArrMethod = arrNumeroRandom.join(', ');

        // map, forEach, filter, reduce, find, exists

        document.getElementById('ciclosDemo').innerHTML =
            `<strong> Ciclo Simple </strong> ${strFromCiclo} <br/> <strong> Método Join: </strong> ${strFromArrMethod} </br>`
        ;
    });

});