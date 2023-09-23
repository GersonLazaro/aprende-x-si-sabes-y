var str = "Las rosas son rojas";
var strLen = str.length; // Longitud del string --> 19
var substr = str.substring(14, 19); // "rojas"
var n = str.replace(/a/g, "D"); // Reemplazar "a" globalmente  --> "LDs rosDs son rojDs"
var strUpperCase = str.toUpperCase(); // A mayúsculas --> "LAS ROSAS SON ROJAS"
var strLowerCase = str.toLowerCase(); // A minúsculas --> "las rosas son rojas"
var concatStr = str + ", Las violetas azules!"; // --> "Las rosas son rojas, Las violetas azules!"