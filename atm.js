let readlineSync = require("readline-sync");
var language= readlineSync.question("welcome to JS national bank\nselesct language\na.hindi   b.english")
var currnt_balance=100000;
if (language=="a"){
    var pincod=readlineSync.question("INSERT  YOUR CARD\n ENTER YOUR PINCODE")
    if (pincod>999 && pincod<9999){
        console.log("CORRECT PINCODE" )
        var transaction=readlineSync.question("select your transection\na.balance enquiry  b.withdrew money")
        if (transaction=="a"){
            console.log(`you have ${currnt_balance}rs`)
            var money_transection=readlineSync.question("trancefer money ?\na.yes  b.no ")
            if (money_transection=="a"){
                var amount=readlineSync.question("myNumber")
                if (amount>=1000 && amount<=50000){
                    console.log(`transfer process suceed ${amount+currnt_balance}`)
                }
                else{
                    console.log("can't withdrew money")
                }
            }
            else{
                console.log("take your receipt\nthanks....");
            }
        }
        else if (transaction=="b"){
            var account=readlineSync.question("select your account")
            if (account=="current"){
                var withdrew_a=readlineSync.question("enter the amount you want to withdrew")
                if (withdrew_a>=100 && withdrew_a<=10000){
                    console.log("collect your amount\n thanks...")
                    console.log(`your current amount is ${currnt_balance-withdrew_a}thanks...`)
                }
                else{
                    console.log("can't withdrew money")
                }
            }
            else{
                console.log("retry")
            }
        }
        else{
            console.log("error")
        }
    }
    else{
        console.log("not vailed try agian")
    }
}
else if(language=="b"){
    var pincod=readlineSync.question("Apna card dale")
    if (pincod>999 && pincod<9999){
        console.log("sahi hai" )
        var transaction=readlineSync.question("Apna transection chune \na.balance enquiry  b.pese nikalna")
        if (transaction=="a"){
            console.log("you have 100000 rs")
            var money_transection=readlineSync.question("trancefer money ?\na.yes  b.no ")
            if (money_transection=="a"){
                // console.log("enter  the amount")
                var amount=readlineSync.question("Pese ka bugtan kare")
                if (amount>=1000 && amount<=50000){
                    console.log("transfer prakriya safal hui")
                }
                else{
                    console.log("pese nhi nikal sakte")
                }
            }
            else{
                console.log("Apni rassed le \Dhanyvvad....");
            }
        }

        else if (transaction=="b"){
            var account=readlineSync.question("Apna khata chune")
            if (account=="current"){
                var withdrew_a=readlineSync.question("Aaharan rashi darj kare")
                if (withdrew_a>=100 && withdrew_a<=10000){
                    console.log("Pese le or nikal")
                }
                else{
                    console.log("pese nhi hai ")
                }

            }
            else{
                console.log("sahi dal")
            }

        }
        else{
            console.log("Glat hai kuch")
        }
    }
    else{
        console.log("sahi se dal na re")
    }

}




// const input = require("readline-sync");
// console.log('Welcome to ATM')
// console.log('Please enter your card')
// let Balance = 10000;
// let language = input.question("Enter your language Hindi or English: ")
// if (language == 'Hindi') {
//    console.log('Hindi is not available')
// }
// else if (language == 'English') {
//    let pin = input.question('Enter your pin');
//    if (pin == '3456') {
//        console.log('your pin is correct')
//        console.log('1.CASH WITHDRAWAL \n 2.BALANCE INQUIRY')
//        let option1 = input.question('Enter option anyone 1 or 2: ')
//        if (option1 == '1') {
//            console.log('CASH WITHDRAWAL')
//            console.log('1.SAVING \n 2.CURRENT \n 3.CREDIT')
//            let option2 = input.question('Enter your option 1 or 2 or 3 : ')
//            if (option2 == '1') {
//                console.log('your saving', Balance, 'balance');
//            }
//            else if (option2 == '2') {
//                console.log('CURRENT');
//                let transaction = input.question('Enter your Amount : ')
//                if (transaction <= balance) {
//                    console.log(`your transaction is being processed \n 
//                                       Please wait \n Now in your account                          
//                                       ${balance - transaction} left`)
//                }
//                else if (transaction > balance) {
//                    console.log('In your account no extra transaction')
//                }
//                else if (option2 == '3') {
//                    console.log('CURRENT');
//                    let transaction = input.question('Enter your Amount : ')
//                    if (transaction <= balance) {
//                        console.log(`your transaction is being processed \n 
//                                       Please wait \n Now in your account                          
//                                       ${balance - transaction} left `)
//                    }
//                    else if (transaction > balance) {
//                        console.log('In your account no extra transaction')
//                    }
//                }
//                else if (option1 == '2') {
//                    console.log('BALANCE INQUIRY')
//                    console.log('you have', balance, 'balance')
//                }
//            }
//            else {
//                console.log('pin is not correct');
//                console.log('atm card blocked');
//            }
//        }
//    }
// }
 
