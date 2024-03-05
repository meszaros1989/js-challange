//Sports anagrams

function sportAnagrams(array) {
    const uniqueSet = new Set();
    const newArr = [];

    if(array.length === 0) return array;

    array.forEach(element => {
            if(!uniqueSet.has(sortText(element)[1])) newArr.push(sortText(element)[0])
            uniqueSet.add(sortText(element)[1]);
    });

    return newArr;
}

function sortText(text) {
    return [text, text.split('').sort().join('')];
}

console.log(sportAnagrams(['squatting', 'ingttauqs', 'running', 'gninnur', 'squatting']));

