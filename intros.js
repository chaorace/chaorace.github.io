//Justin told me to write this comment: Member of ISIS

var zalgo = "Z̓ͩͥ͆͂ͭͥͣͩͪ͐̎͋͂̍ͫ̇͆҉̴͟͠҉A̍͌̇҉̛͢͝L̨̨̍ͫ̆͗̍̇G̸̛ͨͥ̐͊ͮͥ̕͞O̵̧̅ͤ̌̒ͣ̈́͘͟͠!̧ͨ̽̈́̋̍̋ͨ͛̈́͊ͪͯ͋̏̾̂";

//Intros should be 30 characters or less to avoid ugly wrapping
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
    "interactive",
    "pretending to work",
    "powered by IE6",
    "not-such-a-BOFH",
    "love",
    "[CLICK ME!]",
    "chaorace is chaorace is",
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
    "a starship captain",
    "a flying laser monkey",
    "a spiky hedgehog",
    zalgo, //Written somewhere else to preserve my sanity while editing
    "collecting redstone",
    "spinning up...",
    "updating...",
    "imploding...",
    "a tunnel snake (they rule)",
    "made with ♥️",
    "brought to you by Comcast",
    "bad at DI",
    "recompiling...",
    "uʍop ǝpᴉsdn",
    "a lie",
    "made with 💔",
    "roaming the wasteland",
    "dabbling in the dark arts",
    "LITTLE BABY MAN",
    "F5 F5 F5 F5",
    "observing Festivus",
    "lagging",
    "value",
    "running out of entropy",
    "↑↑↓↓←→←→ B A Start",
    "tʃɑo ˈreɪs̯",
    "🐙🐙🐙🐙🐙🐙",
    "EZ $$$",
    "dropping packets",
    "in faze clan",
    "winning"


  ];

var postLoad = setTimeout(main, 100)
var headerTimer = setInterval(main, 7000);

function main(){
  document.getElementById("introField").innerHTML = intros[getRandomInt(0, intros.length)]
}

function headerClicked(){
  main();
  clearInterval(headerTimer);
  headerTimer = setInterval(main, 7000);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
