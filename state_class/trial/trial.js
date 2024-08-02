// trial.js code 

function outer1(){
    let b = 10;
    function inner1(){
        let a = 20;
        console.log(a+b); 
    };
    inner1();
};
outer1(); // 30
try{
    inner1();
}catch(err){
    console.log(err.name + " : " + err.message); // ReferenceError : inner1 is not defined
}

function outer2(){
    let b = 10;
    function inner2(){
        let a = 20;
        console.log(a+b);
    };
    return inner2;
};
let yuvii = outer2();
yuvii(); // 30
// Toh isme hme Pehle outer function ko variable allot krna pdega 
// suppose let's say yuvii = outer(); ... ab isse ky hoga ki outer function jo hai 
// vo apne aap inner function ko return kr rha hai toh hme use ek variable main daalna hoga such that vo return value ko capture kr paaye
// kyuki agr hm seedhe outer(); ko call krdege toh vo return krega inner function
// ab use kya hoga outer() function inner() function bn jayega and apna reference kho dega
// isliye hi ki vo apni hi reference na lose krde hmne use ek variable assign krdia
// taaki inner or outer function ek time pr exist kr paaye 
// isse hm baad main yuvii function ko call kr paayege which would still have access to the variable in its closure