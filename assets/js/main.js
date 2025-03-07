(function ($) {
    "use strict";

    $(document).ready(function () {

        // Inicializar Slider de Testemunhos
        if ($('.test-slider').length) {
            var testSwiper = new Swiper('.test-slider', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: true,
                },
                speed: 1200,
                pagination: {
                    el: '.test-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                on: {
                    slideChangeTransitionStart: function () {
                        $('.testimonials .test-img, .testimonials h5, .testimonials span, .testimonials p').removeClass('aos-init').removeClass('aos-animate');
                    },
                    slideChangeTransitionEnd: function () {
                        AOS.init();
                    },
                },
            });

            $(".test-slider").hover(function () {
                testSwiper.autoplay.stop();
            }, function () {
                testSwiper.autoplay.start();
            });
        }

        // Inicializar AOS
        AOS.init({
            disable: 'mobile'
        });

        // Toggle da barra de pesquisa
        $('.search-icon').on('click', function () {
            $('.search-form').toggleClass('show');
        });

        // Abrir o popup ao carregar a página
        openPopup();
    });

    $(window).on('load', function () {
        // Animação do loader fora da tela
        $(".css-loader").fadeOut("slow");

        // Re-iniciar AOS após o carregamento completo da página
        AOS.init({
            disable: 'mobile'
        });
    });

    // Função para abrir o popup ao carregar a página
    function openPopup() {
        // Implemente sua lógica para abrir o popup aqui
    }

})(jQuery);
