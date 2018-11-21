// define a function called getTokens which takes one argument (rawString).
function getTokens(rawString) {
// turn rawString to all lowercase letters(.toLowerCase())
// split rawString when you meet one of these characters: whitespace, !,.,";: or -  
// Also remove any falsy items from it (.filter(Boolean))
// Then sort alphabetically 
return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

// define a function with one argument
function mostFrequentWord(text) {
// this has a varaible called words which is the saved value from the above function
let words = getTokens(text);
// define an object called wordFrequencies 
let wordFrequencies = {};
// for each instance of words...
for (let i = 0; i <= words.length; i++) {
// if it appears in the object wordFrequences... 
if (words[i] in wordFrequencies) {
// then add one to the counter
wordFrequencies[words[i]]++;
//but if it does not appear already in wordFrequency then add it as the 1 and only copy of that 'words' to wordFrequencies
} else {
wordFrequencies[words[i]] = 1;
}
}
// define a variable which is the first ([0]) indexed key from wordFrequencies  
let currentMaxKey = Object.keys(wordFrequencies)[0];
// define an array which stores the Object (wordFrequencies) value at index 0
let currentMaxCount = wordFrequencies[currentMaxKey];
// iterating over wordFrequency...
for (let word in wordFrequencies) {
// if word appears more times than the value of max count...
if (wordFrequencies[word] > currentMaxCount) {
//then update that word to have max count and highest frequency
currentMaxKey = word;
currentMaxCount = wordFrequencies[word];
}
}
//fianlly return the word with highest frequency
return currentMaxKey;
}











