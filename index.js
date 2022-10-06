class Huesped {
    constructor(fechaIngreso,fechaEgreso,cantDDias,cantDPersonas,codDDescuento, precioTotal, 
                nombre, apellido, dni, fechaDeNacimiento,numCelular,email){
        this.fechaIngreso = fechaIngreso;
        this.fechaEgreso = fechaEgreso;
        this.cantDDias = cantDDias;
        this.cantDPersonas = cantDPersonas;
        this.codDDescuento = codDDescuento;

        this.precioTotal = precioTotal;

        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.numCelular = numCelular;
        this.email = email;

    }

    precioTot (){
    (this.codDDescuento == "10DDESCUENTO") ? 
    this.precioTotal = ((this.cantDDias * this.cantDPersonas * 7500) - ((this.cantDDias * this.cantDPersonas * 7500)*0.10)) : this.precioTotal = (this.cantDDias * this.cantDPersonas * 7500)
    }

    ctdias (){
        this.cantDDias = (this.fechaEgreso - this.fechaIngreso)/ 86400000
    } 

}

const fechaIngreso = new Date ( document.getElementById ("fechaI") );
const fechaEgreso = new Date (document.getElementById ("fechaE"));
let cantDPersonas = (document.getElementById ("cantpersonas"));
let codDDescuento = (document.getElementById ("coddedescuento"));

let nombre = (document.getElementById ("nombre"));
let apellido = (document.getElementById ("apellido"));
let dni = (document.getElementById ("dni"));
let fechaDeNacimiento = (document.getElementById ("fechanacimiento"));
let numCelular = (document.getElementById ("numcel"));
let email = (document.getElementById ("email"));

let precioTotal = 0;
let cantDDias = 0;

let Huesped1 = new Huesped (fechaIngreso,fechaEgreso,cantDDias,cantDPersonas,codDDescuento, precioTotal, 
    nombre, apellido, dni, fechaDeNacimiento,numCelular,email);

(cantDDias != 0) && Huesped1.ctdias (); 
(precioTotal != 0) && Huesped1.precioTot (); 

//sweet Alert
const btnn = document.querySelector('#subir')
btnn.addEventListener('click', () => {

    const array = [];
    array.push(Huesped1);

    Swal.fire({
        title: 'Genial!',
        text: 'Haz realizado la reserva correctamente en unos instantes recibiras un email de confirmacion',
        icon: 'success',
        confirmButtonText: 'aceptar'
})
})

const btn = document.getElementById('subir');

document.getElementById('formulario')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_uk5dbao';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      console.log('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      console.log(JSON.stringify(err));
    });
});