//let PeronsaName = "Maarij khan";
//console.log(PeronsaName.toLowerCase());
//console.log(PeronsaName.toUpperCase());
//console.log(PeronsaName.replace(/\b\w/g, (char) => char.toUpperCase()));
var PeronsaName = "Maarij Khan";
console.log(PeronsaName.toLowerCase());
console.log(PeronsaName.toUpperCase());
console.log(PeronsaName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
