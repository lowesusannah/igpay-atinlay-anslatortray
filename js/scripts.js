//Business Logic

var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

var isVowel = function(character) {
  return vowels.includes(character)
}

var makePigLatin = function(input) {
  var words = input.split(" ");
  var output = "";
  words.forEach(function(word) {
    var firstChar = word[0];
    if (isVowel(firstChar)) {
      word = word + "way"
    }

    output = output + word + " ";
  })
  return output;
}

//Front-end logic
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var input = $("#user-input").val();
    var output = makePigLatin(input);
    $("#output").text(output);
  });
});
