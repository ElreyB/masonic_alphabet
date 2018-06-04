function arabicToMasonic(text) {
  const letters = text.split("");
  return letters;
}

$(document).ready(function () {
  $("#arabic_form").submit(function (e) {
    const userInput = $("#arabic_letters").val();
    console.log(arabicToMasonic(userInput));
    arabicToMasonic(userInput).forEach(function (letter) {

      $(".result").append(`<img src=img/${letter}.jpg alt="">`);
    });
    e.preventDefault();
  });
});
