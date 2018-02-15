//Callbacks Invisible Recaptcha
//Event form
function onSubmitEventForm(token){
    var form = document.getElementById("subscibe-event");
    var testFields = this.ComponentFormValidation.validateForm($('#subscibe-event'));
    if(testFields){
        form.submit();
    }
    else{
        grecaptcha.reset();
    }
}

//Career form
function onSubmitCareerForm(token){
    var form = document.getElementById("send-candidate");
    var testFields = this.ComponentFormValidation.validateForm($('#send-candidate'));
    if(testFields){
        form.submit();
    }
    else{
        grecaptcha.reset();
    }
}

/*
captchaBeContacted = '';
captchaContactUs = '';
$(window).on('load', function(){
    if($('.contact-forms').length > 0){
        captchaBeContacted = grecaptcha.render('submitBeContacted', {
            'sitekey' : '6LfbzigUAAAAAN3EjZ8XfJnjqhOJE2UsyDcgZ6HJ',
            'callback' : onSubmitBeContactedForm,
            'size' : "invisible"
        });

        captchaContactUs = grecaptcha.render('submitContactUs', {
            'sitekey' : '6LfbzigUAAAAAN3EjZ8XfJnjqhOJE2UsyDcgZ6HJ',
            'callback' : onSubmitContactUsForm,
            'size' : "invisible"
        });
    }
});
*/

//Be contacted form
function onSubmitBeContactedForm(token){
    var form = document.getElementById("be-contacted");
    var testFields = this.ComponentFormValidation.validateForm($('#be-contacted'));
    if(testFields){
        form.submit();
    }
    else{
        grecaptcha.reset();
    }
}
/*
$('#be-contacted .cta').on('click', function(){
    grecaptcha.reset(captchaBeContacted);
    var testFields = ComponentFormValidation.validateForm($('#be-contacted'));
    if(testFields){
        grecaptcha.execute(captchaBeContacted);
    }
    
    return false;
});
function onSubmitBeContactedForm(token){
    $('#be-contacted').submit();
}
*/

//Contact us form
function onSubmitContactUsForm(token){
    var form = document.getElementById("contact-us");
    var testFields = this.ComponentFormValidation.validateForm($('#contact-us'));
    if(testFields){
        form.submit();
    }
    else{
        grecaptcha.reset();
    }
}
/*
$('#contact-us .cta').on('click', function(){
    grecaptcha.reset(captchaContactUs);
    var testFields = ComponentFormValidation.validateForm($('#contact-us'));
    if(testFields){
        grecaptcha.execute(captchaContactUs);
    }
    
    return false;
});
function onSubmitContactUsForm(token){
    $('#contact-us').submit();
}
*/