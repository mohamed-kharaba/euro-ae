$(function () {
    "use strict";

    // scroll nav
    // $(window).scroll(function () {
    //     $(".navigation").toggleClass("scrolled", $(this).scrollTop() > 50);
    // });

    // smoothy scroll To section
    //

    // When Hover show dropdown
    $(".dropdown").hover(
        function () {
            $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeIn(500);
        },
        function () {
            $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeOut(500);
        }
    );

    /* require input */
    var formError = true;
    function checkError() {
        if (formError === true) {
            console.log("error");
        } else {
            console.log("no error");
        }
    }

    $(".qer").blur(function () {
        if ($(this).val().length < 3) {
            $(this).addClass("is-invalid").removeClass("is-valid");
            $(this).parent().find(".ast").fadeIn(200);
            formError = true;
        } else {
            $(this).addClass("is-valid").removeClass("is-invalid");
            $(this).parent().find(".ast").fadeOut(200);
            formError = false;
        }
        checkError();
    });

    $(".form-mud").submit(function (e) {
        if (formError === true) {
            e.preventDefault();

            $(".qer").blur();
        }
    });

    //Smoothy scroll to element

    $(".goSection").click(function (e) {
        e.preventDefault();

        $("html, body").animate(
            {
                scrollTop: $("#" + $(this).data("scroll")).offset().top,
            },
            2000
        );
    });

    var hash = window.location.hash;
    $(window).on("load", function () {
        $(hash).css("margin-top", 120);
    });
});
