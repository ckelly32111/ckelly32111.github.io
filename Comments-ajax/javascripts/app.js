var main = function() {
    "use strict";

    //fetch comments from data-store on server,
    //and add to page

    $.getJSON("data/comments.json", function(comments) {
        var $new_comment;

        // comments is an array, so we can iterate over it
        comments.forEach(function(comm) {
            // create a list item to hold the card
            // and append it to the list
            $new_comment = $("<p>").text(comm.content);
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
        });
    });

    //define onclick handler
    var addCommentFromInputBox = function() {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    };

    //register the onclick handler
    $(".comment-input button").on("click", function(event) {
        addCommentFromInputBox();
    });

    //register the keypress
    $(".comment-input input").on("keypress", function(event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
};

$(document).ready(main);