$(document).ready(function() {

$('.chevron_toggleable').on('click', function() {
    $(this).toggleClass('glyphicon-chevron-right glyphicon-chevron-down');
});

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
    $(this).find('span').toggleClass('glyphicon-indent-right').toggleClass('glyphicon-indent-left');
});

})