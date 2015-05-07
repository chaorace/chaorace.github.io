//Justin told me to write this comment: Member of ISIS

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
    "cow-ace",
    "kill. no",
    "on the edge of tommorow",
    "flying on a magic text-editor",
    "pretty ordinary(?)"
  ];
  
function main(){
  document.getElementById("introField").innerHTML = intros[getRandomInt(0, intros.length)]
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var headerTimer = setTimeout(main, 2500);
var postLoad = setTimeout(main, 5)
