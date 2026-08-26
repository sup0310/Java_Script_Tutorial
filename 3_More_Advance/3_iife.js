// Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined. It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.


(function add() {
    // Named IIFE
    var a = 10;
    var b = 20;
    console.log(a + b);
})();

(() => {
    // Unnamed IIFE
    var a = 20;
    var b = 30;
    console.log(a + b);
})();

((var1, var2) => {
    // Unnamed IIFE with parameters
    console.log(var1 + var2);
})(30, 40);