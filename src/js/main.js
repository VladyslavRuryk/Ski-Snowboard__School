$(document).ready(function(){


    $(document).ready(function(){
        $(".nav").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);

        });
    });


    $(function() {

        var target_block = $(".price-1"); // Ищем блок
        var blockStatus = true;

        $(window).scroll(function() {

            var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

            if(scrollEvent && blockStatus) {

                blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

                $({numberValue: 0}).animate({numberValue: 1600}, {

                    duration: 3000, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                    easing: "linear",

                    step: function(val) {

                        $(".price-1").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

                    }

                });

            }

        });

    });


    $(function() {

        var target_block = $(".price-2"); // Ищем блок
        var blockStatus = true;

        $(window).scroll(function() {

            var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

            if(scrollEvent && blockStatus) {

                blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

                $({numberValue: 0}).animate({numberValue: 18}, {

                    duration: 3300, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                    easing: "linear",

                    step: function(val) {

                        $(".price-2").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

                    }

                });

            }

        });

    });


    $(function() {

        var target_block = $(".price-3"); // Ищем блок
        var blockStatus = true;

        $(window).scroll(function() {

            var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));

            if(scrollEvent && blockStatus) {

                blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

                $({numberValue: 0}).animate({numberValue: 213}, {

                    duration: 2600, // Продолжительность анимации, где 500 - 0.5 одной секунды, то есть 500 миллисекунд
                    easing: "linear",

                    step: function(val) {

                        $(".price-3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию

                    }

                });

            }

        });

    });





});
