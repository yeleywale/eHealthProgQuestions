function find_chars(string1, string2) {
    let uniqStr1 = new Set(string1.split("")); // ES6 native set class comes in handy here
    let uniqStr2 = new Set(string2.split(""));

    //ES6 spread operator and fat arrow syntax comes in handy here
    let intersection = new Set([...uniqStr1].filter(x => uniqStr2.has(x)));
    var result = [...intersection].join("");
    return result;
}
