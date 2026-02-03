function once(fn) {
    let a = false;
    return function (){
        if(!a){
            a = true;
            fn();
        }
    };
}
function greet(){
    console.log("Hello");
}
const greetOnce = once(greet);
greetOnce(); 
greetOnce(); 
greetOnce();
