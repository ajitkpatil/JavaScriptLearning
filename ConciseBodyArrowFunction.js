/*
    Concise body arrow function tutorial
    Function with only one parameter:
        Functions that take only a single parameter do not need that parameter to be enclosed in parentheses.
        Syntax: const functionName = parameter => {code goes here};

        Functions that take zero (0) or more than one (1) parameters, parantheses are required
        zero parameters Syntax: const functionName = () => {code goes here}
        more than 1 params Syntax: const functionName = (param1, param2) => {code goes here}

        A function body with single-line block doesn't need curly braces and return keyword can be removed
        Syntax const functionName = parameter => parameter + parameter
        e.g. const numberSquare = num1 => num1 * num1;

        A function body with multi-line block requires curly braces
        Syntax const functionName = parameter => {
            const constName = parameter * parameter;
            return constName};
        e.g. const numberSuare = number => {
            const suqare = number * number;
            return square};
*/
//Single parameter example with single-line block
const numberSquare = (num) => num * num;
console.log('Example of a single parameter')
console.log("The square of 20 is " + numberSquare(20));

//Single parameter example with multi-line block
const numberSquare1 = (num) => {
    const suqare = num * num;
    return suqare;
};
console.log('\nExample of a single parameter with multi-line block');
console.log("The square of 20 is " + numberSquare(20));

//multiple parameters with single-line block
const area = (num1,num2) => num1*num2;
console.log('\nExample of multiple parameters and single-line block');
console.log('The area of rectangle with 20cm width and 30cm height is ' + area(10,20));

//multiple parameters with multi-line block
const are1 = (num1, num2) => {
    const area1 = num1 * num2;
    return area1;
};
console.log('\nExample of a single parameter with multi-line block');
console.log('The area of rectangle with 20cm width and 30cm height is ' + are1(10,20));