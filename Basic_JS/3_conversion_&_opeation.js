// "93" => 93
score = "93"
console.log(score, typeof(score))

let converted_score = Number(score)
console.log(converted_score, typeof(converted_score))
console.log()


// "93abc" => NaN
score_1 = "93abc"
console.log(score_1, typeof(score_1))

let converted_score_1 = Number(score_1)
console.log(converted_score_1, typeof(converted_score_1))
console.log()


// null => 0
score_2 = null
console.log(score_2, typeof(score_2))

let converted_score_2 = Number(score_2)
console.log(converted_score_2, typeof(converted_score_2))
console.log()


// undefined => NaN
score_3 = undefined
console.log(score_3, typeof(score_3))

let converted_score_3 = Number(score_3)
console.log(converted_score_3, typeof(converted_score_3))
console.log()


// false => 0 / true => 1
score_4 = false
console.log(score_4, typeof(score_4))

let converted_score_4 = Number(score_4)
console.log(converted_score_4, typeof(converted_score_4))
console.log()


// string => NaN
score_5 = "SUPRIYO"
console.log(score_5, typeof(score_5))

let converted_score_5 = Number(score_5)
console.log(converted_score_5, typeof(converted_score_5))
console.log()


// 1 => true, 0 = > false
let isLoggedIn = 1
console.log(isLoggedIn, typeof(isLoggedIn));
let booleanIsLoggeIn = Boolean(isLoggedIn)
console.log(booleanIsLoggeIn, typeof(booleanIsLoggeIn));
console.log()


// "" => false, " " => true
let isLoggedIn1 = ""
console.log(isLoggedIn1, typeof(isLoggedIn1));
let booleanIsLoggeIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggeIn1, typeof(booleanIsLoggeIn1));
console.log()


// string => true
let isLoggedIn2 = "good-job"
console.log(isLoggedIn2, typeof(isLoggedIn2));
let booleanIsLoggeIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggeIn2, typeof(booleanIsLoggeIn2));
console.log()


// 33 => "33"
let num = 33
console.log(num, typeof(num));
let strnum = String(num)
console.log(strnum, typeof(strnum));
console.log()


// string => string
str = "Supriyo"
console.log(str, typeof(str));
strstr = String(str)
console.log(strstr, typeof(strstr));
console.log()


// boolean => string
bool = true
console.log(bool, typeof(bool));
strbool = String(bool)
console.log(strbool, typeof(strbool));
console.log()