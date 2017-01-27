import buckets from "./buckets";

const isVowel = letter => ["a","e","i","o","u"].includes(letter.toLowerCase());

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const addIndefiniteArticle = str => {
  if (str.slice(0,3) === "use") {
    return "a " + str;
  }

  if (isVowel(str[0])) {
    return "an " + str;
  }

  return "a " + str;
};

export const capitalize = str => str[0].toUpperCase() + str.slice(1);

export const pluralize = str => {
  if (str.slice(-1) === "s") {
    return str + "es";
  }
  if (str.slice(-2) === "sh") {
    return str + "es";
  }
  return str + "s";
};

export const nounify = str => {
  if (str.slice(-3) === "ate") {
    return str.slice(0, str.length - 1) + "or";
  }

  if (isVowel(str.slice(-1))) {
    return str + "r";
  }

  if (isVowel(str[str.length - 2]) && isVowel(str[str.length - 3])) {
    return str + "er";
  }

  if (isVowel(str[str.length - 2])) {
    return str + str.slice(-1) + "er";
  }

  return str + "er";
};

export const ingify = str => {
  if (isVowel(str.slice(-1))) {
    return str.slice(0, str.length - 1) + "ing";
  }

  if (isVowel(str[str.length - 2]) && isVowel(str[str.length - 3])) {
    return str + "ing";
  }

  if (isVowel(str[str.length - 2])) {
    return str + str.slice(-1) + "ing";
  }

  return str + "ing";
};

const replacePatternWithModifier = (_, modifier, bucketName) => {
  const phrase = select(bucketName);

  switch (modifier) {
    case "s":
      return addIndefiniteArticle(phrase);
    case "c":
      return capitalize(phrase);
    case "p":
      return pluralize(phrase);
    case "n":
      return nounify(phrase);
    case "v":
      return ingify(phrase);
    default:
      return phrase;
  }
};

const replaceSimplePattern = (_, bucketName) => select(bucketName);

function parse(str) {
  return str
    .replace(/\((.)\)\[(.*?)]/g, replacePatternWithModifier)
    .replace(/\[(.*?)]/g, replaceSimplePattern);
}

function select(bucketName) {
  const bucket = buckets[bucketName];
  const phrase = bucket[getRandomNumber(0, bucket.length - 1)];

  return parse(phrase);
}

const getInsult = () => {
  const output = select("insults").replace("'", "’");

  return capitalize(output);
};

export default getInsult;
