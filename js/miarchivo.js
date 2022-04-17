let numero = parseInt(prompt("Ingresa un número para ver su tabla del 10"));
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i ;
    alert(numero + " X "+ i + " = " + resultado);
}
let confirmar = confirm("Terminaste! si querés volver hacer la operación dale aceptar");
if (confirmar == true){
    window.location.reload();
}