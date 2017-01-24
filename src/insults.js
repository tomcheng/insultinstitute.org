const VOWELS = ["a","e","i","o","u"];
const BUCKETS = {
  insults: [
    "Get [disease] and [die][you_blank].",
    "I hope [bad_thing_happens_to_you][you_blank].",
    "I hope [bad_thing_happens_to_you_2][you_blank].",
    "I hope [mildly_bad_thing_happens] on your [nice_day][you_blank].",
    "I hope [mildly_bad_thing_happen_to_you][you_blank].",
    "[you_smell] like [animal_excrement].",
    "[you_are] (s)[adj] [noun].",
    "[you_are] (s)[noun] and your [relative] is (s)[noun].",
    "I hope you get [hit] in the [sex_anat][you_blank].",
    "a thousand (p)[sex_anat] upon [your_face].",
    "you are (s)[walking] [anat].",
    "you are worth less than (s)[worthless_thing][you_blank].",
    "[your_or_your_relatives] [body_part_or_parts_are_ugly].",
    "[noun].",
  ],
  your_or_your_relatives: ["your", "your [relative]'s"],
  body_part_or_parts_are_ugly: ["[body_part] is [ugly]", "[body_parts] are [ugly]"],
  bad_thing_happens_to_you: [
    "[you_get] [disease]",
    "[you_get] [hiccups]",
    "your child grows up (s)[adj] [noun]",
    "[you_get] [raped] by a [pack] of (p)[animal]",
    "you fall [off_a_cliff] and die",
    "[you_get] [crucified]",
    "[you_get] [hanged]",
  ],
  bad_thing_happens_to_you_2: [
    "[you_get] [slapped]",
    "you spontaneously combust",
    "your [relative] has an affair with your [relative]",
    "[you_get] stabbed with (s)[dirty] [knife]",
    "your [relative] marries a [racist]",
    "you lose your job",
  ],
  animal_excrement: [
    "[animal] [excrement]",
    "fresh [animal] [excrement]",
    "a piece of [animal] [feces]",
    "a fresh piece of [animal] [feces]",
  ],
  racist: ["racist", "nazi"],
  knife: ["knife","knife","pitchfork","fork"],
  dirty: ["dirty","rusty","AIDS-infected"],
  crucified: ["crucified","crucified upside-down"],
  hanged: ["hanged","hanged for (v)[fuck] (p)[animal]"],
  slapped: ["slapped","bitch-slapped","slapped silly","spat on"],
  hit: ["hit","kicked","punched","karate chopped","elbowed","kneed"],
  off_a_cliff: ["off a cliff","down a well","off a mountain"],
  you_blank: ["",", you [adj] [noun]"],
  you_get: ["your [relative] gets","you get"],
  you_smell: ["you smell","your [relative] smells", "your breath smells"],
  you_are: ["you are","your [relative] is"],
  you_have: ["you have", "your [relative] has"],
  your: ["your","your [relative]'s"],
  your_face: ["you","your face","your family","you and your family"],
  stick: ["stick", "shove"],
  yourself: ["yourself","your [relative]"],
  relative: ["brother","best friend","child","sister","dad","mom","grandpa","grandma","dog","cat"],
  disease: [
    "AIDS",
    "cholera",
    "ebola",
    "smallpox",
    "leprosy",
  ],
  hiccups: [
    "hiccups",
    "jock-itch",
    "sunburn",
    "athlete's foot",
    "bad breath",
    "frizzy hair",
    "a papercut",
  ],
  adj: [
    "[compound_adj]",
    "[single_word_adj]",
    "[single_word_adj], [compound_adj]",
    "[compound_adj], [compound_adj]",
    "[single_word_adj], [single_word_adj]",
  ],
  compound_adj: [
    "[smelly_noun]-sucking",
    "[fluid]-(v)[guzzle]",
    "[feces]-(v)[eat]",
    "[relative]-(v)[fuck]",
    "[excrement]-stained",
    "[animal]-(v)[fuck]",
    "[disease]-ridden",
    "[animal]-infested",
  ],
  single_word_adj: [
    "bloody",
    "brain-dead",
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
    "miserable",
    "pathetic",
    "puerile",
    "rancid",
    "repulsive",
    "ridiculous",
    "slack-jawed",
    "ugly",
    "vulgar",
    "worthless",
  ],
  noun: [
    "[anat]",
    "[fluid_container]",
    "[smelly_noun]-[food]",
    "[smelly_noun]-face",
    "[smelly_noun]-breath",
    "piece of [feces]",
    "son of (s)[animal]",
    "[buffoon]",
    "[fluid]-(n)[guzzle]",
    "[feces]-(n)[eat]",
    "[relative]-(n)[fuck]",
    "[animal]-(n)[fuck]",
    "[fruit]-[sex_anat]",
    "[excrement]-stain",
    "[sex_anat]-monster",
  ],
  fluid_container: ["[fluid]-[container]","[container] of [fluid]"],
  container: ["bag","sack","bucket","bowl"],
  buffoon: ["buffoon","moron","nincompoop","idiot","loser","dummy"],
  anat: ["[penis]","[pube]","[anus]","canker","pustule","wart","ovary","tit","testicle"],
  smelly_noun: ["[penis]","[anus]","[fluid]","[feces]","fart"],
  sex_anat: ["[penis]","[anus]"],
  anus: ["anus","ass","rectum","butt"],
  penis: ["cock","dick","penis","dong"],
  animal: [
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
    "warthog",
  ],
  fuck: ["fist","fuck","hump","molest","slap","violate"],
  excrement: ["[feces]","[semen]","[urine]","[vomit]","douche"],
  fluid: ["[semen]","[urine]","[vomit]","douche","diarrhea","spit"],
  feces: ["turd","poop","shit"],
  eat: ["eat","lick","sniff"],
  semen: ["cum","jizz"],
  guzzle: ["chug","drink","guzzle"],
  urine: ["piss","urine"],
  vomit: ["puke","vomit"],
  pube: ["pube","pubic hair"],
  raped: ["eaten","banged","fucked","humped","violated"],
  pack: ["group","family","pack","swarm"],
  fruit: ["banana","lemon","mango","kiwi","cheese"],
  food: ["burger","sandwich","cake"],
  small_object: ["[fruit]","[small_animal]"],
  small_animal: ["rat","gerbil","hamster","kitten","insect","maggot"],
  worthless_thing: [
    "papercut",
    "burnt-out lightbulb",
    "toe-nail clipping",
    "[animal]'s [excrement]",
    "canker sore",
    "used condom",
    "[feces]-stained rock",
    "[container] of [animal] [urine]",
  ],
  nice_day: ["wedding day", "anniversary", "birthday"],
  walking: ["walking", "talking"],
  die: ["die", "fall down a set of stairs", "run into a wall", "walk into oncoming traffic"],
  mildly_bad_thing_happens: [
    "it smells like [smelly_noun]",
  ],
  mildly_bad_thing_happen_to_you: [
    "you get [hiccups]",
    "(s)[fly] [flies_in_your_eye]",
    "you stub your toe",
    "you lose your keys",
    "your leg falls asleep",
  ],
  fly: ["mosquito", "gnat", "bee"],
  flies_in_your_eye: ["lands on your eye", "lands in your ear", "flies up your butt", "flies in your mouth"],
  ugly: [
    "sub-par in appearance",
    "vomit-inducing",
    "disgusting",
    "deformed",
    "malformed",
    "ugly",
    "gross",
    "nauseating",
    "too big",
    "too small",
  ],
  body_part: [
    "face",
    "nose",
    "head",
    "beard",
    "skin",
  ],
  body_parts: [
    "ears",
    "eyes",
    "arms",
    "legs",
  ],
};

const isVowel = letter => VOWELS.some(function(vowel) { return vowel === letter; });

const beginsWithVowel = str => isVowel(str[0].toLowerCase());

const endsWithS = str => str[str.length - 1] === "s";

const endsWithVowel = str => isVowel(str[str.length - 1]);

const secondLastLetterIsVowel = str => isVowel(str[str.length - 2]) && str !== "eat";

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const replacePatternWithModifier = (_, modifier, bucketName) => {
  let output = select(bucketName);

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
        output += "r";
      } else if (secondLastLetterIsVowel(output)) {
        output += output[output.length - 1] + "er";
      } else {
        output += "er";
      }
      break;
    case "v":
      if (endsWithVowel(output)) {
        output = output.slice(0, output.length - 1) + "ing";
      } else if (secondLastLetterIsVowel(output)) {
        output += output[output.length - 1] + "ing";
      } else {
        output += "ing";
      }
      break;
    default:
      break;
  }

  return output;
};

const replaceSimplePattern = (_, bucketName) => select(bucketName);

function parse(str) {
  return str
    .replace(/\((.)\)\[(.*?)]/g, replacePatternWithModifier)
    .replace(/\[(.*?)]/g, replaceSimplePattern);
}

function select(bucketName) {
  const bucket = BUCKETS[bucketName];
  const index = getRandomNumber(0, bucket.length - 1);
  const string = bucket[index];

  return parse(string);
}

const getInsult = () => {
  const output = select("insults").replace("'", "’");

  return output[0].toUpperCase() + output.slice(1);
};

export default getInsult;
