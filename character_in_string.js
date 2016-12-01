function find_chars(string1, string2){
  var uniqStr1 = new Set(string1.split(""));
  var uniqStr2 = new Set(string2.split("");
  var intersection = new Set([...uniqStr1].filter(x => uniqStr2.has(x))).;
  return intersection;
}
