$(function() {

    $("#query-all").on("click", function(event) {
        window.location.replace("/api/all");
    });

    $("a[data-link = 'form']").on("click", function(event) {
        console.log(event.target);
       // window.location.replace(`/api/form/${type}/${set}`)
    })

    $("#query-department").on("click", function(event) {
        event.preventDefault();
        let id = $(exampleFormControlSelect1).val();
        window.location.replace(`/api/departments/${id}`);
       });

    





});
