function createStringWithDistinctCharacters(inputString) {
    const charSet = new Set();
    let result = '';
  
    for (let char of inputString) {
      if (!charSet.has(char)) {
        charSet.add(char);
        result += char;
      }
    }
  
    return result;
  }
  
  const inputString = "abracadabra";
  const distinctString = createStringWithDistinctCharacters(inputString);
  
  console.log(distinctString);