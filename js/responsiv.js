$(function (){
   steps_image_seting = [
       {
           imginit: 'img/user_icon_disable.png',
           imgactive: 'img/user_icon_active.png'
       },
       {
           'imginit': 'img/contact_icon_disable.png',
           'imgactive': 'img/contact_icon_active.png'
       },
       {
           'imginit': 'img/official_icon_disable.png',
           'imgactive': 'img/official_icon_active.png'
       },
       {
           'imginit': 'img/payement_icon_disable.png',
           'imgactive': 'img/payement_icon_active.png'
       }
   ];
   countStep = $('.form_wizard section .form_item').length;
   nbr_step = 0;
    
    $('.nxt_btn').click(function (){
        $(window).scrollTop(0);
        if(nbr_step < (countStep-1)){
            nbr_step = nbr_step + 1;
        }
        
        $('.form_wizard header .steps_liste_view .item')
            .eq(nbr_step - 1).find('img')
            .attr('src',steps_image_seting[nbr_step - 1].imgactive);
    
        $('.form_wizard header .steps_liste_view .item')
            .eq(nbr_step).find('img')
            .attr('src',steps_image_seting[nbr_step].imgactive);    
    
        
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step).removeClass('disable');
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step).addClass('active');
        
        $('.form_wizard section .form_item:visible').hide();
        $('.form_wizard section .form_item').eq(nbr_step).fadeIn(500);
    });
    
    $('.pre_btn').click(function (){
        $(window).scrollTop(0);
        if(nbr_step > 0){
            nbr_step = nbr_step - 1;
        }
        
        $('.form_wizard header .steps_liste_view .item')
            .eq(nbr_step + 1).find('img')
            .attr('src',steps_image_seting[nbr_step + 1].imginit);
    
            
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step + 1).removeClass('active');
        $('.form_wizard header .steps_liste_view .item')
                .eq(nbr_step + 1).addClass('disable');
        
        $('.form_wizard section .form_item:visible').hide();
        $('.form_wizard section .form_item').eq(nbr_step).fadeIn(500);
    });
});