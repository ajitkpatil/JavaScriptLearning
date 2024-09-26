/*Arrow Function Tutorial
Traditionally a function is defined as function functionName(parameters){code goes here}
Arrow function doesn't use keyword 'function' instead it uses characters =>
Arrow Function Syntax: (parameters) => {code goes here}
*/

const area = (width, height) => {
  return width * height;
};
console.log(
  "The area of a rectangle with 20cm width and 30cm height is: " + area(20, 30)
);
