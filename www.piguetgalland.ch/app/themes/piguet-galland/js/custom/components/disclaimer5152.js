/**************************************************
 * ComponentDisclaimer
 ***************************************************/
var ComponentDisclaimer = {
	init: function () {
        console.log('==> init disclaimer');

        ComponentDisclaimer.config = {
            country: false,
            language: false,
            profil: false
        };

        if($('#disclaimer-country').is(':disabled')){
            ComponentDisclaimer.config.country = 'suisse';
        }

        /*
        if(typeof disclaimer_vars != 'undefined' && disclaimer_vars.display == 1){
            var $form = $("#form_disclaimer");
            var headerHeight = $('header').outerHeight();
            
            $.colorbox({
                inline: true,
                href: $form,
                width: '100%',
                height: $(window).height() - headerHeight / 2,
                top: headerHeight,
                escKey: false,
                closeButton: false,
                overlayClose: false,
                onLoad:function() {
                    $('html, body').css('overflow', 'hidden');
                    $('main, footer').css('display', 'none');
                    $('header').addClass('keep');
                },
                onClosed:function() {
                    $('html, body').css('overflow', '');
                    $('main, footer').css('display', 'block');
                    $('header').removeClass('keep');
                }
            });

            this.handleDisclaimer();
        }
        */

        this.shortDisclaimer();
        this.handleDisclaimer();
    },

    shortDisclaimer: function(){
        $('.disclaimer-intro').find('p').not(":eq(0)").addClass('hide');
        $('.disclaimer-intro').find('p').first().after('<button class="cta cta-light see-more-disclaimer">Voir plus</button>');

        $('.see-more-disclaimer').on('click', function(){
            $(this).remove();
            $('.disclaimer-intro').find('p').removeClass('hide');
        });
    },

    handleDisclaimer: function(){
        $("#form_disclaimer").find('form').submit(function(){
            var send_disclaimer = false;

            var $profil_radios = $('#form_disclaimer .radios');
            var profil_value = false;

            var $accept_checkbox = $('#form_disclaimer .checkboxes');
            var accept_value = false;

            if(!ComponentDisclaimer.config.profil){
                $profil_radios.find('.form-error').removeClass('hide');
            }
            else{
                $profil_radios.find('.form-error').addClass('hide');
                profil_value = true;
            }
            if(!$('#accept_disclaimer').is(":checked")){
                $accept_checkbox.find('.form-error').removeClass('hide');
            }
            else{
                $accept_checkbox.find('.form-error').addClass('hide');
                accept_value = true;
            }

            if(profil_value && accept_value){
                send_disclaimer = true;
            }

            return send_disclaimer;
        });
        $('#disclaimer-country').change(function(){
            var select_value = $(this).val();

            if(select_value != '-1'){
                ComponentDisclaimer.config.country = select_value;
            }
            else{
                ComponentDisclaimer.config.country = false;
            }
            ComponentDisclaimer.displayDisclaimer();
        });
        $('input[type=radio][name=disclaimer-profil]').change(function(){
            ComponentDisclaimer.config.profil = $(this).val();
            ComponentDisclaimer.displayDisclaimer();
            
            $('html, body').animate({
                scrollTop: $('#form_disclaimer form').offset().top - ($('header').height() + 26)
            }, 400);
        });

        ComponentDisclaimer.changeDisclaimerLanguage();
    },

    displayDisclaimer: function(){
        if(ComponentDisclaimer.config.country && ComponentDisclaimer.config.profil){
            $('.form-disclaimer-state').removeClass('hide');
        }
        else{
            $('.form-disclaimer-state').addClass('hide');
        }
    },

    changeDisclaimerLanguage: function(){
        $('#disclaimer-language').change(function(){
            ComponentDisclaimer.config.language = $(this).val();

            $('.form-disclaimer-txt').addClass('hide');
            $('#form_disclaimer').find('.cta').addClass('hide');

            if(ComponentDisclaimer.config.language != '-1'){
                $('.form-disclaimer-txt[data-lang="' + ComponentDisclaimer.config.language + '"]').removeClass('hide');
                $('#form_disclaimer').find('.cta').removeClass('hide');
            }
        });
    }
}
