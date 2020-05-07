"use strict";
// EVENTS
$(function () {
    if ($(this).attr('id') != null) { // If curr pos has an id
        // Highlight hover
        $('ul>li').hover(function () {
            $(this).addClass("link-hover");
        }, function () {
            $(this).removeClass("link-hover");
        })

        // Opens link of curr clicked link
        $("ul>li").click(function () {
            var link = $(this).attr('id');
            var url = "https://" + link;
            console.log(link);
            window.open(url);
        });
    }
})

// $('#jpn-lang').attr("id");