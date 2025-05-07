function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true) {
    return input.toUpperCase();
  } else if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

const res = formatString("hello from the level 2 course");
const res1 = formatString("first course", true);
const res2 = formatString("hello from the level 2 course", false);
console.log(res);
console.log(res1);
console.log(res2);
