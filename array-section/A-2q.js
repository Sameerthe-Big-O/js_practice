
//*evese the array without without using the second array
const reverseArray = (array) => {
    let arrayLength = Math.floor(array.length / 2);
    let lastIndex = 1;
    for (let i = 0; i < arrayLength; i++) {
        let temp = array[i];
        array[i] = array[array.length - lastIndex];
        array[array.length - lastIndex] = temp;
        lastIndex++;
    }

}