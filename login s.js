var fs = require("fs")
const readline = require("readline-sync")
var user = readline.question("if you want to do login/singup")
if (user == "s") {
    var NAME = readline.question("enter the name of user")
    var PASSWORD = readline.question("enter the password")
    var p = /^[\s\S]{8,32}$/,
        upper = /[A-Z]/,
        lower = /[a-z]/,
        number = /[0-9]/,
        special = /[!@#$&]/;
    let s = fs.readFileSync("f.json", "utf8")
    if (s.includes(NAME && PASSWORD)) {
        console.log("your account is already exists.")
    } else {
        if (p.test(PASSWORD) && upper.test(PASSWORD) && lower.test(PASSWORD) && number.test(PASSWORD) && special.test(PASSWORD)) {
            var C_PASSWORD = readline.question("enter the conform password")
            if (PASSWORD == C_PASSWORD) {
                console.log("your password is valid")
                var DESCRIPTION = readline.question("enter a description")
                var BIRTH_DATE = readline.question("enter the bith date")
                var HOBBIES = readline.question("enter your hobbies")
                var GANDER = readline.question("enter your gander")
                console.log("your singnup is sucessfully")
                user_detail = { user: { "NAME": NAME, "password": PASSWORD }, "profile": { "DESCRIPTION": DESCRIPTION, "HOBBIES": HOBBIES, "GANDAR": GANDER } }
                let file = JSON.stringify(user_detail, null, 4)
                fs.writeFileSync(NAME + ".json", file)
            } else {
                console.log("password is not valid")
            }
        } else {
            console.log("password should contain capital latter, small latter ,numbers,special character")
        }
    }
} else if (user == "l") {
    var NAME_1 = readline.question("enter your name")
    var PASSWORD_1 = readline.question("enter your password")
    d = fs.readFileSync(NAME_1 + ".json", "utf8")
    a = JSON.parse(d)
    if (d.includes(NAME_1 && PASSWORD_1)) {
        console.log("your login sucssesfully")
        console.log()
        console.log("information:-")
        console.log("user:-", a["user"])
        console.log("profile:-", a["profile"])
    } else {
        console.log("invalid account")
    }
}