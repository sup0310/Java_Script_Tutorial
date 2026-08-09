const account_id = 14143719
let account_email = "supriyo.a.mandal@accenture.com"
var account_password = "192837465"
base_location = "Kolkata"

// single line comment

console.log(account_id)
console.log(account_email)
console.log(account_password)
console.log(base_location)

/*
MULTI LINE COMMENT
prefer not to use VAR
because of issue in block scope and functional scope
*/

account_email = "supriyoa.mondal@bsci.com"
account_password = "abcd1234"
base_location = "KDC1A"
let account_state

console.table([account_id, account_email, account_password, base_location, account_state])
