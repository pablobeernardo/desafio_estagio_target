function countA(str) {
    let count = 0;
    for (let char of str) {
      if (char.toLowerCase() === 'a') {
        count++;
      }
    }
    return count;
  }
  
  const string = "Arapaça";
  const count = countA(string);
  
  if (count > 0) {
    console.log(`A letra 'a' aparece ${count} vezes na string.`);
  } else {
    console.log("A letra 'a' não aparece na string.");
  }
  