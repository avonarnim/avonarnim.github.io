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

window.onload = function () {
  const jokeRequestBtn = document.querySelector(".button");
  const responseSection = document.querySelector(".response");
  let currentJoke = 0;

  const jokes = [
    [
      "What's Carl Friedrich Gauss's favorite clothing brand?",
      "What?",
      "Tommy Hill-figure! ... like a Gaussian distribution",
    ],
    [
      "Why did the French chef only use one egg in his omelette? Because one egg is un oeuf",
    ],
    ["What's the funniest food to eat?", "HaLAL food!"],
    [
      "What do you say when you need to leave to use the restroom?",
      "What?",
      "Todaloo",
    ],
    [
      "What'd Hagrid say when Harry said he needed to use the lavatory?",
      "...",
      "YER A WIZZER, HARRY",
    ],
    [
      "What do you say when you're driving and want someone else in the car to spill some embarassing the tea? Pass the awks",
    ],
    [
      "Which artist loves to travel the most? Henri de Toulouse Lautrec",
      "Lautrec? More like... Loves to trek!",
    ],
    ["You know what's the most slept-on thing ever?", "What is?", "BEDS"],
    ["You know how to say female in German?", "How?", "German"],
    [
      "You know, some schools don't actuallly offer UROPs",
      "REALLY? They just don't have Undergraduate Research OPportunities?",
      "Yeah, instead they have Asias and South Americas and Africas and Antarcticas",
    ],
    ["What's the most excitable bread?", "What?", "CHALLAH BREAD"],
    [
      "Did you hear that a lot of camera makers have started to incorporate copper into their lenses?",
      "Really?",
      "Yeah, they say it helps the camera Cu",
    ],
    ["What kind of cars do pet lovers drive?", "Catillacs!"],
    [
      "What kind of cars do pet lovers drive when they become professional pet lovers?",
      "What's a professional pet lover?",
      "A zookeeper",
      "OH, then Zoobarus!",
    ],
    [
      "Do you know where the people crazy about writing utensils?",
      "No, where",
      "Pennsylmania",
    ],
    [
      "The other day, I heard that there's a book series called Mortal Instruments... what's that about?? Trumpets that die?",
    ],
    ["*Looking at something blue* Wow that really blue me away"],
    ["*Looking at something else blue* Wow that's too good to be blue"],
    [
      "What do you say when you're bad at battleship?",
      "You say your'e bad-at-ship. And also puns.",
    ],
    [
      "What's the best snack for someone studying algorithms?",
      "What?",
      "Donuts.. bc they're proofing",
    ],
    [
      "Ya know, one time a group and I were waiting on this fellow named Varun. Naturally we were all wondering where he was",
      "Sure",
      "The thing is... I knew where he was. He was on va run",
    ],
    ["What do you call your friend Jerry Sun's family?", "A Sun-set!"],
    [
      "What do you call Jerry when he's being a little self-centered?",
      "What?",
      "Heliocentric!",
      "Why?",
      "Because his last name is Sun",
    ],
    [
      "What will FedEx and UPS be called when they finally have a merger?",
      "FedUP",
    ],
  ];

  const getJoke = function () {
    const joke = jokes[currentJoke];
    for (let i = 0; i < joke.length; i++) {
      var tag = document.createElement("p");
      var text = document.createTextNode(joke[i]);
      if (i % 2 == 0) {
        tag.classList.add("left");
      } else {
        tag.classList.add("right");
      }
      tag.appendChild(text);
      responseSection.appendChild(tag);
      console.log("appended");
    }

    currentJoke++;
    if (currentJoke === jokes.length) {
      currentJoke = 0;
    }
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
};
