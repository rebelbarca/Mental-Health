$(document).ready(function () {
  var currentTime = $("#currentTime");
  currentTime.text(moment().format('lll'));

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
});
