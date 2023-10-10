
$(document).on('click', '.accordion-header', function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).siblings('.accordion-body').slideUp(300);
    }else{
        $(this).parents('.faqs-accordion').find('.accordion-header').removeClass('active');
        $(this).parents('.faqs-accordion').find('.accordion-body:visible').slideUp(300);
        $(this).addClass('active');
        $(this).siblings('.accordion-body').slideDown(300);
    }
});