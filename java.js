//Evento de click en el boton con el id de 'btn-cambiar'
document.getElementById("btn-cifrar").addEventListener("click", function(){
    //variable para guardar el valor del input
    var mensaje = document.getElementById("msj").value;
    //variable permite guardar un dato o un valor y un arreglo permite guardar varios datos
    var codigosNuevos =[];
 
    var nuevoMensaje ="";
   //Bucle para recorrer las letras de la palabra
    for(i=0;i<mensaje.length ;i++){
        //variable para guardar el número de la posición de la letra
        var codMsj = mensaje[i].charCodeAt();
        //variable paar obtener el nuevo código de nuea letra
        var codNuevo = codMsj + 7;
        //Agregar el nuevo código al arreglo
        codigosNuevos.push(codNuevo);
        //Concatenar las nuevas letras en un solo string, la variable nuevoMensaje
        nuevoMensaje += String.fromCharCode(codNuevo);
    }
    //Colocar mensaje final en la etiqueta span
    document.getElementById("new_msj").innerHTML = nuevoMensaje
});
 
//Evento de click en el boton con el id de 'btn-cambiar'
document.getElementById("btn-descifrar").addEventListener("click", function(){
    //variable para guardar el valor del input
    var mensaje = document.getElementById("msj").value;
    //variable permite guardar un dato o un valor y un arreglo permite guardar varios datos
    var codigosNuevos =[];
 
    var nuevoMensaje ="";
   //Bucle para recorrer las letras de la palabra
    for(i=0;i<mensaje.length ;i++){
        //variable para guardar el número de la posición de la letra
        var codMsj = mensaje[i].charCodeAt();
        //variable paar obtener el nuevo código de nuea letra
        var codNuevo = codMsj - 7;
        //Agregar el nuevo código al arreglo
        codigosNuevos.push(codNuevo);
        //Concatenar las nuevas letras en un solo string, la variable nuevoMensaje
        nuevoMensaje += String.fromCharCode(codNuevo);
    }
    //Colocar mensaje final en la etiqueta span
    document.getElementById("new_msj").innerHTML = nuevoMensaje
});
