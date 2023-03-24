const countingWords = (text) =>{
  let frequencyCount = {};
  
  // lets split text into words
  
  let words = text.split(' ');
  
  // lets iterate through words and add them to frequency count
  
  words.forEach(word => {
    if(frequencyCount.hasOwnProperty(word)) {
      frequencyCount[word] += 1;
    } else {
      frequencyCount[word] = 1;
    }
    
  });
  
  // lets sort words by frequency
  let sortedWords = Object.entries(frequencyCount).sort((a,b) => b[1] - a[1]);
  
  // return sorted words and frequency
  
  return sortedWords;
  
}
console.log(countingWords('This is a sentence with some words in it'));
// Output: [['with', 1], ['some', 1], ['in', 1], ['it', 1], ['is', 1], ['a', 1], ['sentence', 1], ['This', 1]]