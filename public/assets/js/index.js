$(function() {
    $("#query-all").on("click", function(event) {
        $.ajax("/api/all/")
    })



});
