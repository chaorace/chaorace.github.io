//Justin told me to write this comment: Member of ISIS
function main(){
  var intros = [
    "the one and only",
    "fast and perturbed",
    "an unhelpful stacktrace",
    "downloading dependencies",
    "compiling...",
    "randomly generated",
    "decompiling...",
    "faking it and making it",
    "in the third person",
    "losing sleep",
    "readonly public static object with public sealed class trait extends with SEND_HELP_PLEASE",
    "inbred",
    "interactive",
    "pretending to work",
    "powered by IE6",
    "not-such-a-BOFH",
    "love",
    "[CLICK ME!]",
    "chaorace is chaorace is chaorace is chaorace is chaorace is chaorace is",
    "headbanging",
    "life",
    "caffeine-free",
    "rich in protein",
    "bad at speling",
    "secretly a mermaid",
    "living in denial",
    "unworthy",
    "doesn't afraid of anything",
    "buying rare pepes",
    "never gonna give you up",
    "clickbait",
    "getting brigaded",
    "cow-ace"
  ];
  document.getElementById("introField").innerHTML = intros[getRandomInt(0, intros.length)]
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

setInterval(function(){main();}), 5000);
