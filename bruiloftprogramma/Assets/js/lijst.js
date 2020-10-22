function zoekButtons() {
  $("#cadeaus button").on("click", function (evt) {
    $(this).parent().parent().remove();
  });
}

$(".btnAdd").click(function (evt) {
  var _addKado = $('input[name="addKado"]').val();
  var _addButton =
    '<button type="button" class="btnRemove btn btn-danger">Verwijder cadeau</button>';
  var _tr = "<tr><td>" + _addKado + "</td><td>" + _addButton + "</td></tr>";

  $("tbody").append(_tr);
  zoekButtons();
});

$(document).ready(function () {
  $("table tbody").sortable();
  zoekButtons();
});
