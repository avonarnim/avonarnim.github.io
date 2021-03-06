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
  const jokeRequestBtn = document.querySelectorAll(".button")[0];
  const sayingsRequestBtn = document.querySelectorAll(".button")[1];
  const responseSection = document.querySelector(".response");
  let currentJoke = 0;
  let currentSaying = 0;

  const jokes = [
    [
      "What do you call an aggressive, vaguely European body of water?",
      "La goon",
    ],
    ["What kind of nut is meant to be bartered?", "A cashew!"],
    [
      "What's the most affectionate fruit?",
      "A passion fruit?",
      "Not quite... a boo-berry!",
    ],
    ["What game do Korean kindergarteners play?", "Duk duk dukbokki!"],
    [
      "What state producees the most vegetables?",
      "Cauliflowerniaaaa (if you're reading this, I'm sorry)",
    ],
    [
      "What's a butter manufacterer's favorite celestial body?",
      "The Milky Way!",
    ],
    [
      "What do you call it when someone's wearing socks and sandals?",
      "I don't know, what?",
      "Birken-socks!",
    ],
    [
      "Who's the hungriest character in The Little Mermaid?",
      "Does this require basic familiarity with Mandarin?",
      "Yep, it's eh se le!",
    ],
    [
      "Which world leader loves to slam debates with hard data?",
      "Which?",
      "Justin True-deau!... Like 'That's true tho",
    ],
    [
      "How long does it take to go through a labyrinth?",
      "I don't know, how long?",
      "A Minotaur two",
    ],
    ["What do you call a buff electromagnet?", "What??", "A swolenoid!"],
    [
      "Why do parents make curry for their kids?",
      "Why?",
      "Because they want to live vicurryously through them!",
    ],
    [
      "What do you say when you need to leave to use the restroom?",
      "What?",
      "Todaloo!",
    ],
    [
      "What will FedEx and UPS be called when they finally have a merger?",
      "FedUP!",
    ],
    [
      "What's Carl Friedrich Gauss's favorite clothing brand?",
      "What?",
      "Tommy Hill-figure! ... like a Gaussian distribution",
    ],
    [
      "Why did the French chef only use one egg in his omelette?",
      "Why?",
      "Because one egg is un oeuf! One egg, by the way, translates to un oeuf",
    ],
    [
      "What kind of nut is meant to be bartered for?",
      "... Acorns?",
      "Nope, cash-ews!",
    ],
    [
      "What do you say when you're driving and want someone else in the car to spill some embarassing tea?",
      "What?",
      "Pass the awks!",
    ],
    [
      "You know why the lighting in the Pantheon is so holy?",
      "No, why?",
      "Because it comes through... a hole",
    ],
    [
      "Which artist loves to travel the most?",
      "Who?",
      "Henri de Toulouse Lautrec!",
      "Lautrec? More like... Loves to trek!",
    ],
    ["You know what's the most slept-on thing ever?", "What is?", "BEDS"],
    ["Do you know how to say woman in German?", "How?", "Gerwoman!"],
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
      "... What's a professional pet lover?",
      "A zookeeper",
      "OH, then Zoobarus!",
    ],
    [
      "Do you know where the people are crazy about writing utensils?",
      "No, where?",
      "Pennsylmania!",
    ],
    [
      "The other day, I heard that there's a book series called Mortal Instruments. I was like what's that about?? Trumpets that die?",
    ],
    ["*Looking at something blue* Wow that really blue me away"],
    ["*Looking at something else blue* Wow that's too good to be blue"],
    [
      "What do you say when you're bad at battleship?",
      "You say you're bad-at-ship. And also puns.",
    ],
    [
      "What's the best snack for someone studying algorithms?",
      "What?",
      "Donuts.. bc they're proofing",
    ],
    [
      "What'd Hagrid say when Harry said he needed to use the lavatory?",
      "...",
      "YER A WIZZER, HARRY",
    ],
    [
      "Ya know, one time a group and I were waiting on this fellow named Varun. Naturally, we were all wondering where he was",
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
    ["What's the funniest food to eat?", "HaLAL food!"],
  ];

  const sayings = [
    [
      "When a man ain’t got no ideas of his own, he’d ought to be kind o’careful who he borrows ‘em from",
      "- The Virginian",
    ],
    ["You waste years by not being able to waste hours", "- Amos Tversky"],
    [
      "Do you think there ought to be fifteen varieties of good people? There ain’t fifteen. There’s one kind. And when I meet it, I respect it. It is not praying nor preaching that has ever caught me and made me ashamed of myself, but one or two people I have known that never said a superior word to me. They thought more o’ me than I desired, and that made me behave better than I naturally wanted to. And if ever I was to have a son, I would wish their lot to be to know one or two good folks mighty well",
      "- The Virginian",
    ],
    [
      "Music washes away from the soul the dust of everyday life",
      "- Berthold Auerbach",
    ],
    [
      "I'll never speak again to many of the people who have loved me into this moment, just as you will never speak to many of the people who loved you into yours now, and so we raise a glass to them and hope that perhaps somehwere they're raising a glass to us",
      "- John Green, Auld Lang Syne: A History and Remembrance",
    ],
    [
      "If one is generally contracted 80 years, that amounts to 29,220 days on earth. Playing that out, how many times really do I get to look at a tree? 12,395? There has to be an exact number. Let's just say it's 12,395. Absolutely that's a lot, but it is not infinite. And anything less than infinite seems to be measly a number and is not satisfactory.",
      "- Amy Krouse Rosenthal",
    ],
    [
      "I cannot tell you what I care for. I can only tell you what I fear to lose",
      "- D.J. Waldie, Holy Land",
    ],
    [
      "Don't go into a dark room to make big decisions",
      "Heard during the coronavirus pandemic",
    ],
    [
      "I always find that the harder I work, the luckier I am",
      "During 50 Shades of Grey (according to a friend)",
    ],
    [
      "The old dreams were good dreams; they didn't work out, but I'm glad I had them",
      "- Clint Eastwood, The Bridges of Madison County",
    ],
    [
      "If you smell smoke, it's because there's a fire",
      "From a trailer for a movie entitled The Gentlemen",
    ],
    [
      "What more can you expect of me than the stories I am now telling?",
      "- D.J. Waldie, Holy Land",
    ],
    [
      "At some point in your story grief presents itself. Now, for the first time, your room is empty, not merely unoccupied",
      "- D.J. Waldie, Holy Land",
    ],
    [
      "A lot of students ask me how much detail they should put in a project. I say enough that 5 years from now, you'll be able to read what you wrote and understand it",
      "- Professor Sergey Lototsky",
    ],
    [
      '"People have been feeling what you\'ve been feeling for thousands of years and sometimes the stakes were even higher" is why history is fun and sometimes scary but also sometimes comforting',
      "- A friend and her Vietnam history professor",
    ],
    [
      "We cannot hope only to leave our children a bigger car, a bigger bank account. We must hope to give them a sense of what it means to be a loyal friend, a loving parent, a citizen who leaves his home, his neighborhood, and town better than he found it. What do we want the men and women who work with us to say when we are no longer there? That we were more driven to succeed than anyone around us or that we stopped to ask if a sick child had gotten better and stayed a moment there to trade a moment of friendship",
      "- George W. Bush, eulogy for George H.W. Bush",
    ],
    [
      "The secret sauce is turnaround time",
      "- Gavin Jancke, Microsoft Engineer",
    ],
    [
      "You may be upset that you missed some grade cutoff, but if you were given a better grade, would you have learned anything more?",
      "- My dad",
    ],
    [
      "People always say they peaked in high school or kindergarten. The thing is that I’m from Tennessee. I lived by the appalachians, and if you got to a nice hill early enough in the morning — before the haze from the highway obscured the view — you could see fifty peaks that you could hike in a week. And as far as I’m concerned, you can hit 7 peaks a day.",
    ],
    [
      "It wasn’t personal",
      "What is that supposed to mean? I’m so sick of that. All that means is that it wasn’t personal to you. But it was personal to me. It was personal to a lot of people",
      "- From the movie You've Got Mail",
    ],
    [
      "Every map is a fiction. Every map offers choices. It's even possible to choose something beautiful.",
      "- D.J. Waldie, Holy Land",
    ],
    ["You are the average of the people around you", "- Nanxi Liu"],
  ];

  const getJoke = function () {
    const joke = jokes[currentJoke];
    for (let i = 0; i < joke.length; i++) {
      var div = document.createElement("div");
      var tag = document.createElement("p");
      var text = document.createTextNode(joke[i]);
      if (i % 2 == 0) {
        div.classList.add("left");
      } else {
        div.classList.add("right");
      }
      tag.appendChild(text);
      div.appendChild(tag);
      responseSection.appendChild(div);
      console.log("appended");
    }

    currentJoke++;
    if (currentJoke === jokes.length) {
      currentJoke = 0;
    }
  };

  const getSaying = function () {
    const saying = sayings[currentSaying];
    console.log(saying);
    for (let i = 0; i < saying.length; i++) {
      console.log(saying[i]);
      var div = document.createElement("div");
      var tag = document.createElement("p");
      var text = document.createTextNode(saying[i]);
      if (i % 2 == 0) {
        div.classList.add("left");
      } else {
        div.classList.add("right");
      }
      tag.appendChild(text);
      div.appendChild(tag);
      responseSection.appendChild(div);
      console.log("appended");
    }

    currentSaying++;
    if (currentSaying === sayings.length) {
      currentSaying = 0;
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

  sayingsRequestBtn.addEventListener("click", function () {
    removePreviousResponse();
    getSaying();
  });
};
