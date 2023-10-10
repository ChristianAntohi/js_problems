function reverseWords(str) {
    const words = str.split(' ');
    const reversedWords = words.reverse();
    return reversedWords.join(' ');
}

function reverseWordsWithoutReverse(str) {
    const words = str.split(' '); // Desparte șirul în cuvinte
    let reversedStr = '';

    for (let i = words.length - 1; i >= 0; i--) {
        reversedStr += words[i]; // Adaugă cuvintele în ordine inversă
        if (i > 0) {
            reversedStr += ' '; // Adaugă spațiu între cuvinte (exceptând ultimul)
        }
    }

    return reversedStr;
}

function reverseWordsWithoutReverse_v2(str) {
    const words = str.split(' '); // Desparte șirul în cuvinte
    const reversedWords = [];

    for (let i = words.length - 1; i >= 0; i--) {
        reversedWords.push(words[i]); // Adaugă cuvintele în ordine inversă într-un tablou
    }

    return reversedWords.join(' '); // Creează șirul inversat prin unirea cuvintelor din tablou cu spații
}

console.log(reverseWords('Acesta este un test'))
console.log(reverseWordsWithoutReverse('Acesta este un test'))
console.log(reverseWordsWithoutReverse_v2('Acesta este un test'))