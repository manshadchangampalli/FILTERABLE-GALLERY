


$(document).ready(function(){
    $('.list').click(function(){
        const value= $(this).attr('data-filter');
        if(value=='all'){
            $('.itembox').show('1000');
        }
        else{
            $('.itembox').not('.'+value).hide('1000');
            $('.itembox').filter('.'+value).show('1000');
            }
    })

    // for the blue colour on links (active )

    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
})