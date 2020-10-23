function zoekButtons() {
  $("#cadeaus button").on("click", function (evt) {
    $(this).parent().parent().remove();
  });
}

$(document).ready(function () {
  zoekButtons();
});
