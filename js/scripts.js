$(document).ready(function() {

  $("#wordForm").submit(function(event) {
    splitSentences = [];
    newSentences = [];
    splitSentences = $("input#sentences").val().split(" ");
    splitSentences.forEach(function(word) {
      if (word.length >= 3) {
        newSentences.push(word);
      }
    });
    var output = newSentences.reverse().join(" ");
    alert(output);
    event.preventDefault();

  });
});
