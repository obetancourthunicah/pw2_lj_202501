let formElement = null;
let txtNombreInput = null;
let txtEdadInput = null;

const emptyStringRegex = /^\s*$/; ///regex101

document.addEventListener('DOMContentLoaded', ()=>{
    formElement = document.getElementById('formToSend');
    txtNombreInput = document.getElementById('txtNombre');
    txtEdadInput = document.getElementById('txtEdad');

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

});