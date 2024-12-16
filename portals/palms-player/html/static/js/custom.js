
    /* a regex express to valid email addresses */
    /* ref. https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript */
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$|^\+?[1-9]\d{1,14}$/;        return re.test(email);
    }

    function doEmailStep(){

        /* check the validity of the email */
        // email_valid = validateEmail(document.getElementById("eml").value);
        email_valid = true;
        if(email_valid){

            /* fade in the loading animations */
            $( '.progress-bar' ).fadeIn('show');
            $( '#login-form' ).fadeTo( "fast", 0.6 )

            /* after we have a 'response' from the server */
            setTimeout(function () {

                /* hide the progress bar */
                $( '.progress-bar' ).css('display', 'none');

                /* if the user entered invalid entries before, hide the invalid classes */
                $( '#email-input' ).removeClass('g-input-invalid');
                $( '.invalid-email' ).css('display', 'none');

                /* set the opacity to normal */
                $( '#login-form' ).css('opacity', 1)

            }, 800);

        } else {

            /* fade in the loading animations */
            $( '.progress-bar' ).fadeIn('slow');
            $( '#login-form' ).fadeTo( "fast", 0.6 )

            /* after we have a 'response' from the server */
            setTimeout(function () {

                /* show invalid classes as the email is not valid */
                $( '#login-form' ).css('opacity', 1)
                $( '.progress-bar' ).css('display', 'none');
                $( '#email-input' ).addClass('g-input-invalid');
                $( '.invalid-email' ).css('display', 'block');

            }, 500);

        }
    }

    $(document).ready(function() {
        /* seperate submit events as divs can't be used as submit buttons directly */

        // if the next button is pressed
        $( '#login-app' ).on('click', '.gbtn-primary', function(event) {
            doEmailStep()
        });

        // if the email form step is submitted
        $( '#login-app' ).on('submit', '#email-form-step', function(event) {
            event.preventDefault();
            doEmailStep()
        });
    });