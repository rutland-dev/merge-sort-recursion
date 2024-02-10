const array = [3, 2, 1, 13, 8, 5, 0, 1, 20];

function mergeSort(array) {
    if (array.length < 2) return array;

    const middle = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middle);
    const rightArray = array.slice(middle);

    const merge = (leftArray, rightArray) => {
        let mergedArray = [];

        while (leftArray.length && rightArray.length) {
            if (leftArray[0] <= rightArray[0]) {
                mergedArray.push(leftArray.shift());
            } else {
                mergedArray.push(rightArray.shift());
            }
        }

        while (leftArray.length) {
            mergedArray.push(leftArray.shift());
        }

        while (rightArray.length) {
            mergedArray.push(rightArray.shift());
        }

        return mergedArray;
    }

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}