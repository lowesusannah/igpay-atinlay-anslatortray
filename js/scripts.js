//Business Logic

var vowels = ["a", "e", "i", "o", "u"]

var isVowel = function(character) {
  return vowels.includes(character.toLowerCase())
}

var makePigLatin = function(input) {
  var words = input.split(" ");
  var output = "";
  words.forEach(function(word) {
    var firstChar = word[0];
    if (isVowel(firstChar)) {
      word = word + "way"
    } else {
      var characters = word.split("");
      for (var i = 1; i < characters.length; i++) {
        var character = characters[i];
        if (isVowel(character) ||  character.toLowerCase() === "y" && !isVowel(characters[i-1])) {
          var cluster = word.slice(0,i);
          if (cluster[cluster.length-1].toLowerCase() === "y") {
            cluster = "y" + cluster.slice(0,cluster.length)
          }
          word = word.slice(i, word.length) + cluster + "ay";
          break;
        }
      }
    }

    output = output + word + " ";
    alert(output);
  });
  return output;
}

//Front-end logic
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var userinput = $("#user-input").val();
    var output = makePigLatin(userinput);
    $("#output").text(output);
  });
});
