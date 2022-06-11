var question= [
    "How many continents are there?",             
    "What is the capital of India?",            
    "NG mei kaun se course padhaya jaata hai?"];
    
var options_list = [
        ["Four", "Nine", "Seven", "Eight"],
        ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
        ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
    ];
    
var solution_list = [3, 4, 1];

var _5050=["2.seven","3.Eight","3.chenai","4.delhi","1.Software Engineering","2.Agriculture"];

var a1=question.length;
var count=0;
var amount=5000;
var a=1;
var b=0;

for(var i=0; i<a1; i++){
    var  b1=options_list[i].length;
    console.log(question[i]);
    var k=i;
    for(var j=0; j<b1; j++){
        console.log(options_list[k][j]);
    
    }
    let readlineSync = require("readline-sync");
    let lifeline= readlineSync.question("Do you want lifeline: ")
    if (lifeline=="yes"){
        console.log(5050);
        if (count==0){
            console.log(_5050[b+i]);
            console.log(_5050[b+a]);
            answer=readlineSync.question("Enter the answer: ");
            if (answer==solution_list[i]){
                console.log("your answer is correct");
                console.log("you won ",amount);
            
            }
            else{
                console.log("your answer is wrong");
                console.log("you lose the game");
                break;
            }
            count+=1
        }
        else{
            console.log("you have already you the lifeline")
            e=readlineSync.question("Enter the answer: ");
            if (e==solution_list[i]){
                console.log("you answer is correct");
                console.log("you won ",amount);
            }
            else{
                console.log("your answer is wrong");
                console.log("you lose the game");
                break;    
            }
        }
        
    }
    else if (lifeline=="no"){
        f=readlineSync.question("Enter the answer: ");
        if (f==solution_list[i]){
            console.log("you answer is correct");
            console.log("you won ",amount);
        }
        else{
            console.log("your answer is wrong");
            console.log("you lose the game");
            break;
        }
    }
    else{
        console.log("nothing");
    }
    amount+=10000
    i+=1;
    a+=1;
    b+=1;

}