"use strict";

$(function () {
    // Add Classes to Headers (Buttons)
    $("button.w3-btn").addClass("w3-block w3-left-align w3-blue-gray w3-xlarge");
    // Add Classes to Colums
    $("div.w3-col").addClass("l4 m4 w3-padding");


    // EVENTS
    $("li").on({
        /* Highlight hover */
        mouseenter: function () {
            $(this).addClass("w3-light-gray pointer");
        },
        mouseleave: function () {
            $(this).removeClass("w3-light-gray pointer");
        },
        /* ---------------- */
        // Opens link of curr clicked link
        click: function () {
            var link = $(this).attr('id');
            if (typeof link !== 'undefined') {
                var url = "https://" + link;
                console.log(link);
                window.open(url);
            }
        }
    });

    // Click header, hide ul content
    $('button').click(function () {
        var $tag = $(this).next();
        console.log($tag);
        var selector = $(this).next();
        $(selector).toggleClass("w3-hide");

    });

})