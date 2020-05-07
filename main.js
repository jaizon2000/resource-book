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

    
    $('button').click(function () {
        console.log("this");
    });

})


// $('#jpn-lang').attr("id");