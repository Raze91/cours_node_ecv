
function sortArray(array) {
    return array.sort();
};



function randomArrayElement(array) {
    return array[Math.floor(Math.random() * array.length)];
};

module.exports = {
    sortArray,
    randomArrayElement
};