$(document).ready(function () {
  $("#arabic_form").submit(function (e) {
    $(".result").removeClass("d-none");
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const userInput = $("#arabic_letters").val()
    const letters = userInput.split("");
    $(".result").empty();

    letters.forEach(function (letter) {
      const letterLowerCase = letter.toLowerCase();
      if (alphabet.includes(letterLowerCase)) {
        $(".result").append(`<img src=img/${letterLowerCase}.jpg alt="">`);
      } else {
        $(".result").append(`<div class="span d-inline">${letterLowerCase}</div>`);
      }
    });
    e.preventDefault();
  });
});
