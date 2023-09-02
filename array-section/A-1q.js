
//*larget and smallest
const minmax = (array) => {
    let smallestNumber = array[0];
    let largestNumber = array[0]
    array.forEach((ele, i) => {
        if (ele < smallestNumber) {
            smallestNumber = ele;
        } else {
            largestNumber = ele;
        }
    })
    return [smallestNumber, largestNumber];
}