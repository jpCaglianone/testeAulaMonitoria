/*
eventos geralmente são disparados através do método .on()
*/

$('objetoAcionado').on('mouseenter', () => { // mouseenter - ação executada ao focar o mouse sobre o objeto (gotfocus)
    $('objetoAfetado') //objeto que será afetado pela ação
  });

$('objetoAcionado').on('mouseleave', () => { // mouseleave - ação executada retirar o mouse do objeto (lostfocus)
    $('objetoAfetado') //objeto que será afetado pela ação
  });

// aninhamento de eventos - quando dois ou mais eventos são postos justos no mesmo objeto, realizando mais de uma ação sobre aquele objeto

$('objetoAcionado').on('mouseenter', () => { //simula uma espécie de hover, mostrando o objeto ao passar o mouse e escondendo ao retirar
  $('objetoAfetado').show();
}).on('mouseleave', () => {
  $('objetoAfetado').hide();
});
$('objetoAcionado').on('eventoQualquer', event => {event.target})//Um EventTarget representando o objeto ao qual o manipulador de eventos atual está anexado.



dblclick
mousemove
Keyboard events
keydown
keypress
keyup