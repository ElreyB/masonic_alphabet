$(document).ready(function () {
  $("#arabic_form").submit(function (e) {
    const userInput = $("#arabic_letters").val();
    $(".result").text(userInput.toUpperCase());
    e.preventDefault();
  });
});
