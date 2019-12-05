$(document).ready(function() {

    $("img").click(function() {
        $("#img-popup").attr("src", this.src);
        $('#popup').modal('show');
    });

});