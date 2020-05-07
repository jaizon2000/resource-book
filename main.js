"use strict";
// EVENTS
$(function () {


    $('ul>li').on({
        /* Highlight hover */
        mouseenter: function () {
            $(this).addClass("link-hover");
        },
        mouseleave: function () {
            $(this).removeClass("link-hover");
        },
        /* ---------------- */
        // Opens link of curr clicked link
        click: function () {
            var link = $(this).attr('id');
            var url = "https://" + link;
            console.log(link);
            window.open(url);
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


// $('#jpn-lang').attr("id");