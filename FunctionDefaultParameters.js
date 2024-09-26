//JavaScript Functions Default Parameters Tutorial

console.log('Calling function without passing parameters');
function defaultParameters(item1 = "Milk", item2="Fruits", item3="Grocery"){
    console.log(`Item1 to buy ${item1}`);
    console.log(`Item 2 to buy ${item2}`);
    console.log(`Item 3 to buy ${item3}`);
}
//Call the function without passing parameters
defaultParameters();

//Call the function by passing parameters
console.log('\nNow calling function by passing parameters...');
defaultParameters('Veggies','Stationary','Apparels');