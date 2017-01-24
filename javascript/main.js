(function () {
  var VOWELS = ["a","e","i","o","u"];
  var BUCKETS = {
    insults: [
      "Get [disease] and die[you_blank].",
      "I [hope] [bad_thing_happens_to_you][you_blank].",
      "I [hope] [bad_thing_happens_to_you_2][you_blank].",
      "go [fuck] [yourself][you_blank].",
      "[you_smell] like [animal] [excrement].",
      "[you_are] one [adj] [noun].",
      "go [eat] your [relative]'s [anat][you_blank].",
      "go choke on (s)[animal]'s [penis][you_blank].",
      "you are (s)[adj] [noun]. You are also (s)[adj] [noun].",
      "you are (s)[adj] [noun].",
      "go [fuck] (s)[adj_animal][you_blank].",
      "did you remember to feed the [pack] of (p)[animal] living in your [orifice]?",
      "you like to [stick] (p)[small_object] up your [orifice].",
      "your [relative] is (s)[noun] and [you_are] (s)[noun].",
      "I [hope] you get [hit] in your [slur] [sex_anat].",
      "a thousand (p)[sex_anat] upon [your_face].",
      "you are nothing but a walking [anat].",
      "you deserve nothing but [profound] [contempt][you_blank].",
      "[lunch] suggestion: [smelly_noun]-[food] [with_some_other_food].",
      "you are worth less than (s)[worthless_thing][you_blank].",
    ],
    contempt: ["contempt","hatred","loathing","misery","loneliness","despair"],
    profound: ["profound","absolute","infinite","unfathomable"],
    bad_thing_happens_to_you: [
      "[you_get] [disease]",
      "your kid grows up to be (s)[adj] [noun]",
      "[you_get] [raped] by a [pack] of (p)[animal]",
      "you fall [off_a_cliff] and die",
      "[you_get] [crucified]",
      "[you_get] [hanged]",
      "[you_get] [stoned_to_death]",
      "[you_get] skinned alive"
    ],
    bad_thing_happens_to_you_2: [
      "[you_get] [slapped]",
      "you spontaneously combust",
      "your [relative] has an affair with your [relative]",
      "you kill your [relative] in a car accident",
      "you get raped by your [relative]",
      "[you_get] stabbed with (s)[dirty] [knife]"
    ],
    knife: ["knife","knife","pitchfork","fork"],
    dirty: ["dirty","rusty"],
    crucified: ["crucified","crucified upside-down"],
    hanged: ["hanged","hanged for (v)[fuck] (p)[animal]"],
    stoned_to_death: ["stoned to death","stoned to death for (v)[fuck] (p)[animal]"],
    slapped: ["slapped","bitch-slapped","slapped silly","spat on"],
    hit: ["hit","kicked","punched","karate chopped"],
    off_a_cliff: ["off a cliff","down a well","off a mountain"],
    you_blank: ["",", you [adj] [noun]"],
    you_get: ["your [relative] gets","you get"],
    you_smell: ["you smell","your [relative] smells"],
    you_are: ["you are","your [relative] is"],
    you_have: ["you have", "your [relative] has"],
    your: ["your","your [relative]'s"],
    your_face: ["you","your face","your family","you and your family"],
    stick: ["stick", "shove"],
    hope: ["hope","await the day"],
    yourself: ["yourself","your [relative]"],
    relative: ["brother","best friend","child","sister","father","mother","grandfather","grandmother"],
    disease: ["AIDS","cholera","ebola","smallpox","leprosy"],
    adj: [
      "[compound_adj]",
      "[single_word_adj]",
      "[single_word_adj], [compound_adj]",
      "[compound_adj], [compound_adj]",
      "[single_word_adj], [single_word_adj]"
    ],
    compound_adj: [
      "[smelly_noun]-sucking",
      "[fluid]-(v)[guzzle]",
      "[feces]-(v)[eat]",
      "[relative]-(v)[fuck]",
      "[excrement]-stained",
      "[animal]-(v)[fuck]",
      "[disease]-ridden",
      "[animal]-infested"
    ],
    single_word_adj: [
      "bloody",
      "brain-dead",
      "churlish",
      "degenerate",
      "depraved",
      "despicable",
      "disgusting",
      "drooling",
      "fat",
      "festering",
      "filthy",
      "half-witted",
      "insignificant",
      "insecure",
      "jerk-off",
      "miserable",
      "offensive",
      "pathetic",
      "puerile",
      "putrescent",
      "repulsive",
      "ridiculous",
      "slack-jawed",
      "ugly",
      "vulgar",
      "worthless"
    ],
    noun: [
      "[anat]",
      "[slur]",
      "asshole",
      "[fluid_container]",
      "[smelly_noun]-[food]",
      "[smelly_noun]-face",
      "[smelly_noun]-breath",
      "jerk-off",
      "piece of shit",
      "son of (s)[animal]",
      "[buffoon]",
      "[fluid]-(n)[guzzle]",
      "[feces]-(n)[eat]",
      "[relative]-(n)[fuck]",
      "[animal]-(n)[fuck]",
      "[fruit]-[sex_anat]",
      "[excrement]-stain",
      "[sex_anat]-monster"
    ],
    fluid_container: ["[fluid]-[container]","[container] of [fluid]"],
    container: ["bag","sack","bucket"],
    buffoon: ["buffoon","moron","nincompoop","idiot","loser","dummy"],
    anat: ["[vagina]","[penis]","[pube]","[anus]","canker","pustule","wart","ovary","tit","testicle"],
    smelly_noun: ["[vagina]","[penis]","[anus]","[fluid]","[feces]"],
    sex_anat: ["[vagina]","[penis]"],
    orifice: ["[anus]","[vagina]"],
    anus: ["anus","ass","rectum"],
    vagina: ["twat","vagina"],
    penis: ["cock","dick","penis","prick"],
	  slur: ["racist"],
    animal: [
      "[slur]",
      "alligator",
      "ape",
      "baboon",
      "bear",
      "camel",
      "chicken",
      "chimpanzee",
      "chihuahua",
      "cow",
      "crocodile",
      "dog",
      "donkey",
      "elephant",
      "goat",
      "hippo",
      "horse",
      "hyena",
      "llama",
      "monkey",
      "pig",
      "rat",
      "skunk",
      "warthog"
    ],
    adj_animal: ["[animal]","AIDS-infected [animal]","rabid [animal]"],
    fuck: ["fist","fondle","fuck","hump","molest","slap","stroke","violate"],
    excrement: ["[feces]","[semen]","[urine]","[vomit]","douche"],
    fluid: ["[semen]","[urine]","[vomit]","douche","diarrhea","spit"],
    feces: ["crap","shit"],
    eat: ["eat","lick","sniff"],
    semen: ["cum","jizz"],
    guzzle: ["chug","drink","guzzle"],
    urine: ["piss","urine"],
    vomit: ["puke","vomit"],
    pube: ["pube","pubic hair"],
    raped: ["eaten","banged","fucked","humped","violated"],
    pack: ["bunch","group","family","pack","swarm"],
    fruit: ["banana","lemon","mango","kiwi","cheese"],
    food: ["burger","cheese","sandwich","cake"],
    small_object: ["[fruit]","[small_animal]"],
    small_animal: ["rat","gerbil","hamster","kitten","insect","maggot"],
    refreshing: ["cold","refreshing"],
    lunch: ["dinner","lunch"],
    with_some_other_food: [
      "washed down with (s)[refreshing] glass of your [relative]'s [fluid]",
      "topped with a purée of your [relative]'s [fluid]"
    ],
    worthless_thing: [
      "papercut",
      "burnt-out lightbulb",
      "toe-nail clipping",
      "[animal]'s [excrement]",
      "canker sore",
      "used condom",
      "shit-stained rock"
    ]
  };

  document.getElementById("root").textContent = getInsult();

  function getInsult() {
    var output = select("insults")
      .replace("'", "’");

    return output[0].toUpperCase() + output.slice(1);
  }

  function select(bucketName) {
    var bucket = BUCKETS[bucketName];
    var numItems = bucket.length;
    var index = getRandomNumber(0, numItems - 1);
    var string = bucket[index];

    return parse(string);
  }

  function parse(str) {
    return str
      .replace(/\((.)\)\[(.*?)\]/g, replacePatternWithModifier)
      .replace(/\[(.*?)\]/g, replaceSimplePattern);
  }

  function replacePatternWithModifier(_, modifier, bucketName){
    var output = select(bucketName);

    switch (modifier) {
      case "s":
        output = beginsWithVowel(output)
          ? "an " + output
          : "a " + output;
        break;
      case "c":
        output = output[0].toUpperCase() + output.slice(1);
        break;
      case "p":
        output = endsWithS(output)
          ? output + "es"
          : output + "s";
        break;
      case "n":
        if (endsWithVowel(output)) {
          output = output + "r";
        } else if (secondLastLetterIsVowel(output)) {
          output = output + output[output.length - 1] + "er";
        } else {
          output = output + "er";
        }
        break;
      case "v":
        if (endsWithVowel(output)) {
          output = output.slice(0, output.length - 1) + "ing";
        } else if (secondLastLetterIsVowel(output)) {
          output = output + output[output.length - 1] + "ing";
        } else {
          output = output + "ing";
        }
      default:
        break;
    }

    return output;
  }

  function replaceSimplePattern(_, bucketName){
    return select(bucketName);
  }

  function beginsWithVowel(str){
    return isVowel(str[0].toLowerCase());
  }

  function endsWithS(str){
    return str[str.length - 1] === "s";
  }

  function endsWithVowel(str){
    return isVowel(str[str.length - 1]);
  }

  function secondLastLetterIsVowel(str){
    return isVowel(str[str.length - 2]) && str !== "eat";
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function isVowel(letter) {
    return VOWELS.some(function(vowel) { return vowel === letter; });
  }
})();

