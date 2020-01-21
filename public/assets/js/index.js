$(function () {

    $("#query-all").on("click", function (event) {
        window.location.replace("/api/all");
    });

    $("a[data-link = 'form']").on("click", function (event) {
        let type = $(this).data("type");
        let set = $(this).data("set");
        window.location.replace(`/api/form/${type}/${set}`)
    });

    $("#query-department").on("click", function (event) {
        event.preventDefault();
        let id = $(exampleFormControlSelect1).val();
        window.location.replace(`/api/departments/${id}`);
    });

    $("#query-manager").on("click", function (event) {
        event.preventDefault();
        let id = $(exampleFormControlSelect1).val();
        window.location.replace(`/api/managers/${id}`);
    });
});
