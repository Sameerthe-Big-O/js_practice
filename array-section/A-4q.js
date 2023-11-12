//* Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
const filterRange = (array, a, b) => {
  const newArray = array.filter((ele) => ele <= b && ele >= a);
  return newArray;
};
