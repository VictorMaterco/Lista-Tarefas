$(document).ready(function () {
    
    $('form').on('submit', function(e) {
        e.preventDefault();

        var adicionarTarefa = $('#adiciona-tarefa').val();

        $('ul').append(`<li> ${adicionarTarefa} </li>`)

        $('#adiciona-tarefa').val('');
    })

    $('ul').on('click', 'li', function(){
        $(this).css('text-decoration', 'line-through');
    })
    $('ul').on('dblclick', 'li', function(){
        $(this).css('text-decoration', 'none');
    })


})