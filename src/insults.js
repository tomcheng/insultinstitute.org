import buckets from "./buckets";

const VOWELS = ["a","e","i","o","u"];

const isVowel = letter => VOWELS.some(function(vowel) { return vowel === letter; });

const beginsWithVowel = str => isVowel(str[0].toLowerCase()) && str.slice(0,3) !== "use";

const endsWithS = str => str[str.length - 1] === "s";

const endsWithVowel = str => isVowel(str[str.length - 1]);

const secondLastLetterIsVowel = str => isVowel(str[str.length - 2]) && !["eat","poop"].includes(str);

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const applyModifier = (phrase, modifier) => {
  let output = phrase;

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
      output = endsWithS(output) || output === "fish"
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

const replacePatternWithModifier = (_, modifier, bucketName) => applyModifier(select(bucketName), modifier);

const replaceSimplePattern = (_, bucketName) => select(bucketName);

function parse(str) {
  return str
    .replace(/\((.)\)\[(.*?)]/g, replacePatternWithModifier)
    .replace(/\[(.*?)]/g, replaceSimplePattern);
}

function select(bucketName) {
  const bucket = buckets[bucketName];
  const index = getRandomNumber(0, bucket.length - 1);
  const string = bucket[index];

  return parse(string);
}

const getInsult = () => {
  const output = select("insults").replace("'", "’");

  return output[0].toUpperCase() + output.slice(1);
};

export default getInsult;
