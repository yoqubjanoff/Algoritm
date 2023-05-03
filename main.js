// boshladik
//! STRING-1 
// todo go challenge 
//? 1-masala Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!"
// const hi = prompt("Ismingizni kiriting")
// alert(`hello ${hi}`)

// ?  2-masala Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
// function addString(a,b){
//     return a + b + b + a
// }
// console.log(addString("hi","bye"));

//? 3-masala The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word "Yay". Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".
// function makeTags(tag, word){
//     return "<" + tag + ">" + word + "</" + tag + ">"
// }
// console.log(makeTags("i", "world"));

//? 4-masala   Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. "<<word>>". Note: use str.substring(i, j) to extract the String starting at index i and going up to but not including index j.
// function makeOutWord(one, twou){
//     return one.slice(0,2) + twou + one.slice(2)
// }
//  console.log(makeOutWord("<<>>", "yay"));

//?  5-masala   Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.
// function extraEnd(str){
//     return str.slice(str.length-2) + str.slice(str.length-2) + str.slice(str.length-2);
// }
// console.log(extraEnd("Hello"));

//?  6-masala  Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.
// function firstTwo(str){
//    return str.slice(0,2)
// }
// console.log(firstTwo("ab"));


//?  7-masala   Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".
// function firstHalf(str){
//     if(str.length % 2 == 0){
//         return str.slice(str.length % 2)
//     }else{
//         return str
//     }
// }
// console.log(firstHalf("WooHoo"));


//?  8-masala   Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.
// function withoutEnd(str){
//     return str.substring(1, str.length-1)
// }
// console.log(withoutEnd("WooHoo"));


//?  9-masala     Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).
// function comboString(a,b){
//     if(a.length < b.length){
//         return a + b + a
//     }
//     else{
//         return b + a + b
//     }
// }
// console.log(comboString( "s","katta"));


//?  10-masala   Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.
// function nonStart(str){
//     if(str.length > 2) {
//         return str.slice(2) + str.slice(0, 2);
//       } else {
//         return str;
//       }
// }
// console.log(nonStart("Hello"));


//? 11-masala  Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.
// function right2(str){
//    if (str.lenght >= 2) {
//        return str
// }else{
//         return str.slice(-2) + str.slice(0,-2)
//     }
// }
// console.log(right2("Hello"));


//?  12-masala Given a string, return a string length 1 from its front, unless front is false, in which case return a string length 1 from its back. The string will be non-empty.
// function theEnd(str, front){
//     if(front){
//         return str.slice(0,1)
//     }else{
//         return str.slice(-1)
//     }
// }
// console.log(theEnd("Hello", false));



//? 12-masala Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.
// function withoutEnd2(str){
//     if(str.length <=2 ){
//        return ""
//       }else{
//         return str.slice(1,-1)
//       }
//   }
//   console.log(withoutEnd2("hi"));

//? 13-masala  Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2.
// function middleTwo(str){
//     let mid = str.length / 2;
//   return str.slice(mid - 1, mid + 1);
// }
// console.log(middleTwo("Practice"));



//? 14-masala Given a string, return true if it ends in "ly".
// function endsLy(str){
//     if(str.lenght < 2){
//         return false
//     }
//     return str.slice(-2)=="ly"
// }
// console.log(endsLy("odd"));


//? 15-masala Given a string and an int n, return a string made of the first and last n chars from the string. The string length will be at least n.
// function nTwice(str, n){
//     return str.slice(0,n) + str.slice(-n)
// }
// console.log(nTwice("Chocolate"));

//? ikinchi yechimi
// function nTwice(str, n){
//     var firstNChars = "";
//     for (var i = 0; i < n; i++) {
//       firstNChars += str[i];
//     }
//     var lastNChars = "";
//     for (var j = str.length - n; j < str.length; j++) {
//       lastNChars += str[j];
//     }
//     return firstNChars + lastNChars;
    
//   }
// console.log(nTwice("Chocolate"));


//? 16-masala Given a string and an index, return a string length 2 starting at the given index. If the index is too big or too small to define a string length 2, use the first 2 chars. The string length will be at least 2.
// function twoChar(str, index){
//     if(index + 2 > str.lenght || index < 0){
//         return str.slice(0,2)
//     }
//     return str.slice(index, index + 2)
// }
// console.log(twoChar("java", 3));


//? 17-masala Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.
// function middleThree(str){
//     console.log(str.length);
//     if(str.length < 3 ){
//         return str;
//     }else{
//         const centerWord = Math.floor(str.length / 2);
//         return str.slice(centerWord -1, centerWord +2 )
//     }
// }
// console.log(middleThree("hlo"));


//? 18-masala   Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.
// function hasBad(str){
//     if(str.length >=3){
//         if(str.substring(0,3) === "bad"){
//             return true;
//         }else if(str.length >= 4 && str.substring(1, 4) === "bad"){
//             return true
//         }
//     }
//     return false;
// }
// console.log(hasBad("xbadxx"));


//? 19-masala Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.
// function atFirst(str){
//     if (str.length >= 2) {
//         return str.slice(0,2);
//     }else{
//         return str.padEnd(2,"@")
//     }
// }
// console.log(atFirst("h"));


//? 20-masala Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.
// function lastChars(a,b) {
//         let first_char, last_char;
//         if (a.length === 0) {
//           first_char = "@";
//         } else {
//           first_char = a[0];
//         }
      
//         if (b.length === 0) {
//           last_char = "@";
//         } else {
//           last_char = b[b.length - 1];
//         }
      
//         return first_char + last_char;
    
      
// }
// console.log(lastChars("java", "chars"));
// console.log(lastChars('last', 'chars')); // konsolga: "ls" chiqadi
// console.log(lastChars('yo', 'java'));   // konsolga: "ya" chiqadi
// console.log(lastChars('hi', ''));       // konsolga: "h@" chiqadi


//? 21-masala Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".
// function conCat(a, b){
//     if(a[a.length -1] === b[0]){
//        return a.slice(0,a.length-1) + b
//      }else{
//        return a + b
//      }
//   }

//   console.log(conCat('abc', ''))


//? 22-masala Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".
// function swapLastTwoChars(str) {
//     if(str.length < 2){
//         return str;
//     }else{
//         return str.slice(0, -2) + str.slice(-1) + str.slice(-2, -1) 
//     }
// }
// console.log(swapLastTwoChars("cat"));

//? 23-masala Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.
// function seeColor(str){
//     if(str.startsWith("red")){
//         return str.slice(0,3)
//     }else if(str.startsWith("blue")){
//         return str.slice(0,4)
//     }else{
//         return ""
//     }
// }
// console.log(seeColor("redxx"));
// todo bu loop da yechimi
// function seeColor(str) {
//   const colors = ['red', 'blue'];
//   for (let i = 0; i < colors.length; i++) {
//     const color = colors[i];
//     if (str.startsWith(color)) {
//       return color;
//     }
//   }
//   return '';
// }
// console.log(seeColor('bluejkjkj')); // konsolga: "red" chiqadi






