function checkSpam(str) {
  let str1 = str.toUpperCase();
  let spam = "1XBET";
  let anotherSpam = "XXX";
if(str1.includes(spam)||str1.includes(anotherSpam)){
  return true}
else return false;
}
