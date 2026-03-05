function indexOfIgnoreCase(s1, s2) {
  // write your code hereif (subStr.length === 0) return 0;
    // Convert both strings to lowercase and use indexOf
    return str.toLowerCase().indexOf(subStr.toLowerCase());
}

// Examples
console.log(indexOfIgnoreCase("Hello World", "world")); // 6
console.log(indexOfIgnoreCase("apple", "Ple"));        // 2
console.log(indexOfIgnoreCase("test", "aaa"));         // -1
console.log(indexOfIgnoreCase("abc", "")); 
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
