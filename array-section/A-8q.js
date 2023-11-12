const copySorted = (lm) => {
  //*we can also make the copy by using the arr.slice() this solution is for the number but if we the  inputs will be the string of array then we can simply do it like sort
  const copy = [...lm];
  copy.sort((a, b) => a - b);
  return copy;
};

const copySorteds = (arr) => {
  //*returns a new array copying to it all items from index start to end (not including end).
  const copy = arr.slice().sort();
  return copy;
};
