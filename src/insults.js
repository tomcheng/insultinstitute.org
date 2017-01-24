const VOWELS = ["a","e","i","o","u"];
const BUCKETS = {
  insults: [
    "Get [disease] and [die][you_blank].",
    "I [hope] [bad_thing_happens_to_you][you_blank].",
    "I [hope] [bad_thing_happens_to_you_2][you_blank].",
    "I [hope] it [rains] on your [nice_day][you_blank].",
    "I [hope] [mildy_bad_thing_happen_to_you] on your [nice_day][you_blank].",
    "[you_smell] like [animal_excrement].",
    "[you_are] (s)[adj] [noun].",
    "go [choke_on] (s)[animal]'s [penis][you_blank].",
    "you are (s)[adj] [noun]. You are also (s)[adj] [noun].",
    "your [relative] is (s)[noun] and [you_are] (s)[noun].",
    "I [hope] you get [hit] in your [sex_anat][you_blank].",
    "a thousand (p)[sex_anat] upon [your_face].",
    "you are (s)[walking] [anat].",
    "you are worth less than (s)[worthless_thing][you_blank]."
  ],
  bad_thing_happens_to_you: [
    "[you_get] [disease]",
    "[you_get] [hiccups]",
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
    "[you_get] stabbed with (s)[dirty] [knife]"
  ],
  animal_excrement: [
    "[animal] [excrement]",
    "fresh [animal] [excrement]",
    "a piece of [animal] [excrement]",
    "a piece of fresh [animal] [excrement]"
  ],
  knife: ["knife","knife","pitchfork","fork"],
  dirty: ["dirty","rusty","AIDS-infected"],
  crucified: ["crucified","crucified upside-down"],
  hanged: ["hanged","hanged for (v)[fuck] (p)[animal]"],
  stoned_to_death: ["stoned to death","stoned to death for (v)[fuck] (p)[animal]"],
  slapped: ["slapped","bitch-slapped","slapped silly","spat on"],
  hit: ["hit","kicked","punched","karate chopped","elbowed","kneed"],
  off_a_cliff: ["off a cliff","down a well","off a mountain"],
  you_blank: ["",", you [adj] [noun]"],
  you_get: ["your [relative] gets","you get"],
  you_smell: ["you smell","your [relative] smells"],
  you_are: ["you are","your [relative] is"],
  you_have: ["you have", "your [relative] has"],
  your: ["your","your [relative]'s"],
  your_face: ["you","your face","your family","you and your family"],
  stick: ["stick", "shove"],
  hope: ["hope","pray"],
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
    "sun burn",
    "athlete's foot",
    "bad breath",
    "frizzy hair"
  ],
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
    "asshole",
    "[fluid_container]",
    "[smelly_noun]-[food]",
    "[smelly_noun]-face",
    "[smelly_noun]-breath",
    "jerk-off",
    "piece of [feces]",
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
    "warthog"
  ],
  fuck: ["fist","fuck","hump","molest","slap","violate"],
  excrement: ["[feces]","[semen]","[urine]","[vomit]","douche"],
  fluid: ["[semen]","[urine]","[vomit]","douche","diarrhea","spit"],
  feces: ["turd","feces","poop","shit"],
  eat: ["eat","lick","sniff"],
  semen: ["cum","jizz"],
  guzzle: ["chug","drink","guzzle"],
  urine: ["piss","urine"],
  vomit: ["puke","vomit"],
  pube: ["pube","pubic hair"],
  raped: ["eaten","banged","fucked","humped","violated"],
  pack: ["group","family","pack","swarm"],
  fruit: ["banana","lemon","mango","kiwi","cheese"],
  food: ["burger","cheese","sandwich","cake"],
  small_object: ["[fruit]","[small_animal]"],
  small_animal: ["rat","gerbil","hamster","kitten","insect","maggot"],
  worthless_thing: [
    "papercut",
    "burnt-out lightbulb",
    "toe-nail clipping",
    "[animal]'s [excrement]",
    "canker sore",
    "used condom",
    "[feces]-stained rock"
  ],
  rains: ["rains", "hails", "smells like [smelly_noun]"],
  nice_day: ["wedding day", "anniversary", "birthday"],
  walking: ["walking", "talking"],
  die: ["die", "fall down a set of stairs", "run into a wall", "walk into oncoming traffic"],
  choke_on: ["choke on", "eat", "steal"],
  mildy_bad_thing_happen_to_you: [
    "you get [hiccups]",
    "(s)[fly] [flies_in_your_eye]",
    "stub your toe",
    "lose your keys"
  ],
  fly: ["mosquito", "gnat", "bee"],
  flies_in_your_eye: ["lands on your eye", "lands in your ear", "flies up your butt"]
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
