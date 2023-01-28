window.onload = function () {
  const jokeRequestBtn = document.querySelectorAll(".button")[0];
  const sayingsRequestBtn = document.querySelectorAll(".button")[1];
  const responseSection = document.querySelector(".response");
  let currentJoke = 0;
  let currentSaying = 0;

  const jokes = [
    [
      "That guy over there can tell the future!",
      "... what's he gonna tell it?",
    ],
    [
      "What kind of hay do you feed a religious English cow?",
      "A Christian bale",
    ],
    ["What do you call a porta-potty with room for two?", "A porta partyyy"],
    ["Wanna get 'za for lunch?", "What's 'za?", "Pizza!"],
    ["I saw a website recently called sitcom.", "What do they sell?", "Chairs"],
    [
      "Do you know why online slide decks that have lots of transitions work so well?",
      "Because they're e-motional!",
    ],
    ["What do you call the daily surf report?", "Current events!"],
    [
      "Cucina de la playa! Sounds pretty good!",
      "*leans in to hear clanging pots*",
      "Yeah, that does sound good!",
    ],
    [
      "What does a Korean pirate say when he's mad?",
      "Idk, what?",
      "Shi barghhhhh",
    ],
    ["What did the surprised physicist say?", "What the flux!"],
    [
      "What do you call it when a computer tries flirting with someone?",
      "You call it a *bit* awkward",
    ],
    [
      "What do you call a Korean kid who likes early 2000s rap?",
      "Seoulja Boy",
      "Yes... also, Soju Boy",
    ],
    [
      "Ya know lumber prices have gone up like 10x over the past decade",
      "Oh really?",
      "Yeah, it's so bad they're now making tables out of ferns and stuff",
      "Ferns? Really??",
      "Yeah, they call it ferniture",
    ],
    ["What do you call a visit from a hype beast plumber?", "A drip check!"],
    [
      "Which Harry Potter family has a history of respiratory issues?",
      "The Wheezlys!",
    ],
    [
      "What do you call a male talk show host who gives gifts to all his guests?",
      "What?",
      "Obruh",
    ],
    ["What does a Korean pirate say when he's mad?", "Shi barghhhh"],
    [
      "Why do computer science majors all have nice eyebrows?",
      "Because they all know how to thread",
    ],
    ["Which comedian thinks about their jokes the most?", "John Mull-aney"],
    [
      "Did you know most people think shadows are controversial?",
      "Really?",
      "Yeah, they're all like umbra",
    ],
    [
      "Why is everyone really tense about meat consumption nowadays?",
      "Probably because there's a lot at steak",
    ],
    ["What does a mermaid teacher wear at the beach?", "An algae-bra!"],
    [
      "What does Patrick Mahomes when he goes home for the holidays?",
      "Ma home!",
    ],
    [
      "Did you know that Chinese people actually hate Panda Express?",
      "No way",
      "Yeah, they call it all Teri-yucky chicken",
    ],
    ["What's Katniss's favorite chip?", "A Peeta chip!"],
    [
      "How do you fix a band whose lead singer just got his heart broken?",
      "You give him a band-aid",
    ],
    ["Where do cowboys go on vacation?", "To the mooseum"],
    [
      "Ya know how a lot of engineering majors have to learn about the Fourier transform?",
      "yeah?",
      "Maybe it's because they're going through a four-year transform",
    ],
    ["Hey do you guys wanna get some boba?", "Yeah!", "Boba deez nuts"],
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
      "I didn't have a script. But I smiled, and smiling was easy, no matter how strange and disorienting the street seemed to be",
      "- Lin, arriving in India, in Shantaram",
    ],
    [
      "No-one, and nothing, could really hurt me. No-one, and nothing, could make me very happy. I was tough, which is probably the saddest thing you can say about a man.",
      "- Lin, describing the apathy he feels at the start of Shantaram",
    ],
    [
      "Suffering, Khaderbai once told me, is the way we test our love, especially our love for God. I didn't know God, as he'd put it, but even as a disbeliever failed the test that day",
      "I couldn't love God--anyone's God--and I couldn't forgive God.",
      "- Lin, in Shantaram",
    ],
    [
      "Justice is not only the way we punish those who do wrong. It is also the way we try to save them.",
      "- Lin, in Shantaram",
    ],
    [
      "His laughter as he walked away down the line of waiting men was brutally loud, but it was also weak and false",
      "Cruelty is a kind of cowardice. Cruel laughter is the way cowards cry when they're not alone, and causing pain is how they grieve.",
      "- Lin, describing prison overseers, in Shantaram",
    ],
    [
      "The worst things that people do to us always make us feel ashamed. THe worst things that people do always strike at the part of us that wants to love the world. And a tiny part of the shame we feel, when we're violated, is shame at being human",
      "- Lin, describing imprisonment, in Shantaram",
    ],
    [
      "Most of us pretend, with greater or lesser success, that the minute we live in is something we can share. But the past for every one of us is a desert island; and those like Khaled, who find themselves marooned there, are always alone.",
      "- Lin, in Shantaram",
    ],
    [
      "There's a little arrogance at the heart of every better self... And there's an innocence, essential and unblinking, in the heart of every determination to serve.",
      "- Lin, in Shantaram",
    ],
    [
      "It isn't a secret, unless keeping it hurts",
      "- Lin, quoting Karla, in Shantaram",
    ],
    [
      "Sooner or later, fate puts us together with all the people, one by one, who show us what we could, and shouldn't let ourselves become",
      "But fate loads the dice, of course, because we usually find ourselves loving or pitying almost all of those people. And it's impossible to despise someone who you honestly pity, and to shun someone you truly love.",
      "- Lin, in Shantaram",
    ],
    [
      "You know, I admonished him, Karla says that depression only happens to people who don't know how to be sad",
      "Well she is wrong! he declared. I am an expret in the tristesse. It is the perfect, definitive human performance.",
      "- Lin and Didier, in Shantaram",
    ],
    [
      "It seemed, with Khader, thath he never felt or expressed any one emotion without feeling something of its opposite",
      "- Lin, in Shantaram",
    ],
    [
      "It's said that you can never go home again, and it's true enough, of course. But the opposite is also true. You must go back, and you always go back, and you can never stop going back, no matter how you try.",
      "- Lin, in Shantaram",
    ],
    [
      "In the end, when it was sure that Prabaker would die, and we all knew it, and we all accepted the fact that he had to die, we went through four days and nights of watching his brave little body suffer..",
      "I loved him so much that in the end... I fell to my knees on a place marked by two wet footprints, and I begged God to let him die. And then he did die.",
      "At first, when we truly love someone, our greatest fear is that the loved one will stop loving us.",
      "What we should fear and dread, of course, is that we won't stop loving them, even after they're dead and gone. For I still love you with the whole of my heart, Prabaker. I still love you. And sometimes, my friend, the love that I have, and can't give to you, crushes the breath from my chest. Sometimes, even now, my heart is drowning in a sorrow that has no stars without you, and no laughter, and no sleep",
      "- Lin, describing the loss of his first friend in India, in Shantaram",
    ],
    [
      "assassin grief",
      "The enemy stalks you, step for step, and knows your every move before you make it. The enemy is your own grieving heart, and when it strikes, it can't miss.",
      "- Lin, in Shantaram",
    ],
    [
      "Every human heartbeat is a universe of possibilities. Every human will has the power to transform its fate",
      "I'd always thought fate was something unchangeable. BUt I suddenly realised that life is stranger and more beautiful than that.",
      "- Lin, in Shantaram",
    ],
    [
      "Never mind favorites. You're allowed to have one. The point is, you've been mine.",
      "- Alison in Meet Joe Black",
    ],
    [
      "Don't ever apologize for needing your family. Blood is blood. The only thing that matters",
      "- Pop in Mayans M.C.",
    ],
    [
      "In taking up another's cross, one must sometimes get crushed by the weight",
      "- Paul Kalanithi",
    ],
    [
      "Putting lifestyle first is how you find a job -- not a calling",
      "- Paul Kalanithi",
    ],
    ["We have to believe that Sisyphus was happy", "- Albert Camus"],
    [
      "Pessimists are never accused of being naïve, no matter how wrong they are",
      "- David Kang & Xinru Ma, Power Transitions: Thucydides Didn't Live in East Asia",
    ],
    [
      "Democracy is a method of doing the impossible",
      "- W.E.B. Du Bois, The African Roots of War",
    ],
    [
      "If you were feeling generous, you could give your money to the poor; you cannot give your friends to the friendless",
      "- Kwame Anthony Appiah, The Ethicist, The New York Times",
    ],
    ["Que sera sera", "- Miley Cyrus"],
    [
      "When you're a kid you cry because you feel lied to. Because life is unfair and you don't understand anything. And then as an adult you cry because life still isn't fair but you do understand it",
      "- Jonathan Goldstein, Reply All ep. 16",
    ],
    [
      "You give your children enough money to do something, but not enough to do nothing",
      "- Matt in The Descendents",
    ],
    [
      "If you look into the camera and you see something you recognize, don't click the shutter",
      "- a mentor to Yasuhiro Wakabayashi",
    ],
    [
      "Living every day in the presence of those who refuse to acknowledge your humanity takes great courage",
      "- Min Jin Lee, Pachinko",
    ],
    [
      "There's no such thing as a benevolent leader... You have to remember that no matter what, the men who are in charge are just men--so they're not much smarter than pigs. And we eat pigs.",
      "- Min Jin Lee, Pachinko",
    ],
    [
      "A God that did everything we thought was right and good wouldn't be the creator of the universe. He would be our puppet. He wouldn't be our God. There's more to everything than we can know",
      "- Min Jin Lee, Pachinko",
    ],
    [
      "Is that... that's the end of the story?",
      "I mean, it's not a story, it was like a detail",
      "- Midnight in Paris",
    ],
    [
      "Service to others is the rent you pay for your room here on earth",
      "- Muhammad Ali",
    ],
    [
      "It's always nice to be important but it's more important to be nice",
      "- Dwayne Johnson",
    ],
    [
      "They say nothing lasts forever but they're just scared it will last longer than they can love it",
      "- Ocean Vuong, On Earth We're Briefly Gorgeous",
    ],
    [
      "Let no one mistake us for the fruit of violence -- but that violence, having passed through the fruit, failed to spoil it.",
      "- Ocean Vuong, On Earth We're Briefly Gorgeous",
    ],
    [
      "Freedom, I am told, is nothing but the distance between the hunter and its prey.",
      "- Ocean Vuong, On Earth We're Briefly Gorgeous",
    ],
    [
      "Two languages cancel each other out, suggests Barthes, beckoning a third",
      "- Ocean Vuong, On Earth We're Briefly Gorgeous",
    ],
    [
      "With friends like that you don't need enemies",
      "- Jeff in Thunderbolt & Lightfoot",
    ],
    [
      "He was too simple to wonder when he had attained humility. But he knew he had attained it and he knew it was not disgraceful and it carried no loss of true pride",
      "- Ernest Hemingway, The Old Man and the Sea",
    ],
    [
      "First you borrow. Then you beg",
      "- Ernest Hemingway, The Old Man and the Sea",
    ],
    [
      "I have no luck anymore. But who knows? Maybe today. Every day is a new day. It is better to be lucky. But I would rather be exact. Then when luck comes you are ready.",
      "- Ernest Hemingway, The Old Man and the Sea",
    ],
    [
      "You are killing me, fish, the old man thought. But you have a right to. Never have I seen a greater, or more beautiful, or a calmer or more noble thing than you, brother. Come on and kill me. I do not care who kills who.",
      "- Ernest Hemingway, The Old Man and the Sea",
    ],
    [
      "'I wanted to take him fishing but I was too timid to ask him. Then I asked you to ask him and you were too timid.'",
      "'I know. It was a great mistake. He might have gone with us. Then we would have that for all of our lives.'",
      "- Ernest Hemingway, The Old Man and the Sea",
    ],
    [
      "Do not think about sin. It is much too late for that and there are people who are paid to do it. Let them think about it.",
      "- Ernest Hemingway, The Old Man and the Sea",
    ],
    [
      "And if all others accepted the lie which the Party imposed -- if all records told the same tale -- then the lie passed into history and became truth... All that was needed was an unending series of victories over your own memory",
      "- George Orwell",
    ],
    [
      "Muscle is created by lifting things",
      "that are designed to wiegh us down.",
      "When your shoulders are heavy",
      "stand up straight and call it exercise.",
      "Life is a gym membership",
      "with a really complicated cancellation policy.",
      "- Rudy Francisco, Helium",
    ],
    [
      "Choice is a great burden. The call to invent one's life, and to do it continuously, can sound unendurable. Totalitarian regimes aim to stamp out the possibility of choice, but what aspiring automcrats do is promise to relieve one of the need to choose.",
      "- Masha Gessen, Stories of a Life",
    ],
    [
      'In speaking about immigrants we tend to privilege choicelessness... We focus on the distinction between refugees and "economic migrants", without asking why the fear of hunger and destitution qualifies as a lesser reason for migration than the fear of imprisonment or death by gunshot wound',
      "- Masha Gessen, Stories of a Life",
    ],
    [
      "At the end of Heart of Darkness, Conrad describes at length the suffering of a mass murderer's widow, though he glossed over that of the murderer's victims... We invade your countries, destroy your economies, demolish your infrastructures, murder hundreds of thousands of your citizens, and a decade or so later we write beautifully restrained novels about how killing you made us cry.",
      "- Rabih Alameddine, Comforting Myths",
    ],
    [
      "The truth is: sometimes I am afraid of what I write. You should be a little afraid of the story you are telling, too. And if you're not afraid that someone won't like it, you're still not telling the truth",
      "- Lacy M. Johnson, On Likability",
    ],
    [
      "\"Paranoia is strange because it's simultaneously comforting and disturbing. It's disturbing to think people are spying on you, but it's also comforting to have an explanation for why your world sucks.\"",
      "- Danny O'Brien, quoted in Jean Guerrero's My Father Says He's a \"Targeted Individual\"",
    ],
    [
      "When a man ain’t got no ideas of his own, he’d ought to be kind o’careful who he borrows ‘em from",
      "- Owen Wister, The Virginian",
    ],
    [
      "Do you think there ought to be fifteen varieties of good people? There ain’t fifteen. There’s one kind. And when I meet it, I respect it. It is not praying nor preaching that has ever caught me and made me ashamed of myself, but one or two people I have known that never said a superior word to me. They thought more o’ me than I desired, and that made me behave better than I naturally wanted to. And if ever I was to have a son, I would wish their lot to be to know one or two good folks mighty well",
      "- Owen Wister, The Virginian",
    ],
    ["You waste years by not being able to waste hours", "- Amos Tversky"],
    [
      "This one comes in two parts. It is from a book narrated by a butler reminiscing over his life.",
      "Part 1: In looking back over my career thus far, my chief satisfaction derives from what I achieved during those years, and I am today nothing but proud and grateful to have been given such a privilege",
      "Part 2: Surely it is enough that the likes of you and I at least *try* to make our small contribution count for something true and worthy. And if some of us are prepared to sacrifice much in life in order to pursue such aspirations, surely that is in itself, whatever the outcome, cause for pride and contentment",
      "- Kazuo Ishiguro, The Remains of the Day",
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
      "What more can you expect of me than the stories I am now telling?",
      "- D.J. Waldie, Holy Land",
    ],
    [
      "At some point in your story grief presents itself. Now, for the first time, your room is empty, not merely unoccupied",
      "- D.J. Waldie, Holy Land",
    ],
    [
      "Every map is a fiction. Every map offers choices. It's even possible to choose something beautiful.",
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
