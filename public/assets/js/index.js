$(function() {

    $("#query-all").on("click", function(event) {
        window.location.replace("/api/all");
    });

    

    $("#query-department").on("click", function(event) {
        event.preventDefault();
        let id = $(exampleFormControlSelect1).val();
        window.location.replace(`/api/departments/${id}`);
       });

    





});
