function getTokens(rawString) { //declares a function called getTokens with rawString as the argument
  // NB: `.filter(Boolean)` removes any falsy items from an array
  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}// returns the items(words) passed in it toLowerCase and splits it using ,!.";"-. Then it sorts the words in ascending order after removing the falsy items.
  
function mostFrequentWord(text) { //declaring a new function; taking text as an argumnet
  const words = getTokens(text); // the words variable saves the value returned from getTokens function
  const wordFrequencies = {}; //an empty object is being declared
  for (let i = 0; i <= words.length; i++) {// here i goes into a loop and iterates till the last word in the text is reached
    if (words[i] in wordFrequencies) {//if the same word has repeated more than once, increase the counter by 1.
      wordFrequencies[words[i]]++;
    }
    else {
      wordFrequencies[words[i]]=1; //otherwise, assign 1 to it.
    }
  }
  let currentMaxKey = Object.keys(wordFrequencies)[0];//defined a variable having value of 0 indexed key from the wordFrequencies object.
  let currentMaxCount =  wordFrequencies[currentMaxKey];// declaring a new array called currentMacCount which stores wordFrequencies value at index[0];
  
  for (var word in wordFrequencies) {
    if (wordFrequencies[word] > currentMaxCount) {
      currentMaxKey = word;
      currentMaxCount = wordFrequencies[word];
    }// if frequency of word is greater than the current max count, then update that word to be having the maximum count and 
    // therefore the word with highest frequency
  }
  return currentMaxKey; //to return the word with highest frequency
}

