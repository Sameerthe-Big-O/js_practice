//* Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

//!each dash should have to be removed
//!each character After dash get Upper case

//*split wll get use since ti formed the the array by the given delimeter know as the on the character we've to make array it removes that word or the character left and right from that charater convert into the element

//*if we don't provie the delimeter then it make the each character as the element like then it use each character
[
  's',
  'a',
  'm',
  'e',
  'e',
  'r',
  ',',
  ' ',
  'h',
  'e',
  'l',
  'l',
  'o',
  ' ',
  ',',
  ' ',
  '2',
  '3',
  '2',
  '3',
];

//*we can also give the two character
//*toUpperCase actually returns the that character , aslo join joins btw the delimeter

const camelize = (str) => {
  const wordArray = str.split('-');
  const newArray = wordArray.map((ele) => {
    if (!ele) return;
    const singleStringArray = ele.split('');
    singleStringArray[0] = singleStringArray[0].toLocaleUpperCase();
    return wordArray.join('');
  });
  return newArray.join('');
};
