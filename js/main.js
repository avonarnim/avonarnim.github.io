jQuery(document).ready(function ($) {
  //set animation timing
  var animationDelay = 2500,
    //letters effect
    lettersDelay = 50;

  initHeadline();

  function initHeadline() {
    //insert <i> element for each letter of a changing word
    singleLetters($(".header.letters").find("b"));
    //initialise headline animation
    animateHeadline($(".header"));
  }

  function singleLetters($words) {
    $words.each(function () {
      var word = $(this),
        letters = word.text().split(""),
        selected = word.hasClass("is-visible");
      for (i in letters) {
        if (word.parents(".rotate").length > 0)
          letters[i] = "<em>" + letters[i] + "</em>";
        letters[i] = selected
          ? '<i class="in">' + letters[i] + "</i>"
          : "<i>" + letters[i] + "</i>";
      }
      var newLetters = letters.join("");
      word.html(newLetters).css("opacity", 1);
    });
  }

  function animateHeadline($headlines) {
    var duration = animationDelay;
    $headlines.each(function () {
      var headline = $(this);

      //trigger animation
      setTimeout(function () {
        hideWord(headline.find(".is-visible").eq(0));
      }, duration);
    });
  }

  function hideWord($word) {
    var nextWord = takeNext($word);
    var bool =
      $word.children("i").length >= nextWord.children("i").length
        ? true
        : false;
    hideLetter($word.find("i").eq(0), $word, bool, lettersDelay);
    if (nextWord.length === 0) {
      var nextWord = $word.parent().children().eq(0);
      bool = true;
      showLetter(nextWord.find("i").eq(0), nextWord, bool, lettersDelay);
      return;
    } else {
      showLetter(nextWord.find("i").eq(0), nextWord, bool, lettersDelay);
    }
  }

  function hideLetter($letter, $word, $bool, $duration) {
    $letter.removeClass("in").addClass("out");

    if (!$letter.is(":last-child")) {
      setTimeout(function () {
        hideLetter($letter.next(), $word, $bool, $duration);
      }, $duration);
    } else if ($bool) {
      setTimeout(function () {
        hideWord(takeNext($word));
      }, animationDelay);
    }
  }

  function showLetter($letter, $word, $bool, $duration) {
    $letter.addClass("in").removeClass("out");

    if (!$letter.is(":last-child")) {
      setTimeout(function () {
        showLetter($letter.next(), $word, $bool, $duration);
      }, $duration);
    } else {
      if ($word.parents(".header").hasClass("type")) {
        setTimeout(function () {
          $word.parents(".words-wrapper").addClass("waiting");
        }, 200);
      }
      if (!$bool) {
        setTimeout(function () {
          hideWord($word);
        }, animationDelay);
      }
    }
  }

  function takeNext($word) {
    return !$word.is(":last-child") ? $word.next() : $();
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass("is-visible").addClass("is-hidden");
    $newWord.removeClass("is-hidden").addClass("is-visible");
  }
});

const jokeRequestBtn = document.querySelector(".button");
const responseSection = document.querySelector(".response");
let currentJoke = 0;

const getJoke = function () {
  const joke = jokes[currentJoke];
  for (let i = 0; i < joke.length; i++) {
    var tag = document.createElement("p");
    var text = document.createTextNode();
    if (i % 2 == 0) {
      tag.classList.add("left");
    } else {
      tag.classList.add("right");
    }
    tag.appendChild(text);
    responseSection.appendChild(tag);
  }

  currentJoke++;
};

const removePreviousResponse = function () {
  while (responseSection.firstChild) {
    responseSection.removeChild(responseSection.lastChild);
  }
};

jokeRequestBtn.addEventListener("click", function () {
  removePreviousResponse();
  getJoke();
});

const jokes = [[], [], []];
