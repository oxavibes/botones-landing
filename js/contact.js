    ;
    (function ($) {
        "use strict";

        jQuery.validator.addMethod('answercheck', function (value, element) {
            return this.optional(element) || /^\bcat\b$/.test(value)
        }, "type the correct answer -_-");

        function resetFields(){

        }


        // validate contactForm form
        $(function () {
            $('#contactForm').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 4
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    subject: {
                        required: true,
                        minlength: 6
                    },
                    message: {
                        required: true,
                        minlength: 10
                    }
                },
                messages: {
                    name: {
                        required: "Por favor, ingresa tu nombre.",
                    },
                    email: {
                        required: "Por favor, ingresa tu email."
                    },
                    subject: {
                        required: "Por favor, ingresa el asunto"
                    },
                    message: {
                        required: "Por favor, ingresa tu mensaje",
                    }
                },
                submitHandler: function (form) {
                    /*const zohoURL = "https://mail.zoho.com/api/accounts/2480525000000008002/messages";
                    
                    var headers = {
                        'Authorization':'464156509920d89e15ed1736908aXXXX',
                        'Content-Type':'application/json'
                    }

                    const messageObject = {
                        fromAddress: "admin@tubotones.com",
                        toAddress: "admin@tubotones.com",
                        subject: "Has recibido un correo desde la pagina de Botones",
                        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dicta nulla facilis et natus corporis porro facere placeat magnam atque dolorum obcaecati distinctio commodi inventore totam, dolor necessitatibus nemo praesentium? "
                
                    };*/

                    $(form).ajaxSubmit({
                        type: "POST",
                        url: "contact_process.php",
                        data: $(form).serialize(),

                        success: function () {
                            $('#contactForm :input').attr('disabled', 'disabled');
                            $('#contactForm').fadeTo("slow", 1, function () {
                                //$(this).find(':input').attr('disabled', 'disabled');
                                $(this).find('label').css('cursor', 'default');
                                $('#success').fadeIn()
                            })
                        },
                        error: function () {
                            $('#contactForm').fadeTo("slow", 1, function () {
                                $('#error').fadeIn()
                            })
                        }
                    })
                }
            })
        })

    })(jQuery)