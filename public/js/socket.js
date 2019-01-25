var socket = io();
    
socket.on('connect', function () {

    console.log('Conectado al servidor');
    
});
// Escuchar
socket.on('disconnect', function () {

    console.log('Perdimos conexion con el servidor');

});


// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'ricardo',
    mensaje: 'hola mundo'
}, function(resp){
    console.log(resp);
})
socket.on('enviarMensaje', function (mensaje){
   console.log('servidor: ', mensaje);
})
