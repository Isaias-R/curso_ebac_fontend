$(document).ready(function(){
    
    $('.Cad').on('click', function(){
        const nameTarefa = $('#suaTarefa').val()
        const li = document.createElement('li')
        li.innerHTML = `${nameTarefa}`
        $('ul').append(li)
        $('#suaTarefa').val('')
        $(li).click(function(){
            $(li).toggleClass('risco')
        })
    })
    
    
})