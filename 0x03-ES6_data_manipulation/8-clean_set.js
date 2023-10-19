// Create a function named cleanSet that returns a string of all
// the set values that start with a specific string (startString).

// It accepts two arguments: a set (Set) and a startString (String).

// When a value starts with startString you only append the rest of
// the string. The string contains all the values of the set separated by -.

export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    return '';
  }
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }
  let res = ''; // Initialize an empty string to store the result

  for (let x of set) {
    if (typeof x === 'string' && x.startsWith(startString)) {
      // Check if x is a string and starts with the specified string
      x = x.slice(startString.length); // Remove the starting string from x
      res = `${res}${x}-`; // Concatenate x to the result string with a dash
    }
  }
  if (res.length > 0) {
    res = res.slice(0, -1); // Remove the trailing dash if there are elements in the result
  }

  return res;
}
