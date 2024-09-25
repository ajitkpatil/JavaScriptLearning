let userName = '';
let defaultName;

if(userName){
    console.log('The user name is '+userName);
}else{
    console.log('The user name is empty');
}

//Tweak the above code to make it Truthy/Falsy Assignment
//Truty/Falsy Assignment below
defaultName = userName || 'default.user';

//After Truty/Falsy (short-circuit assignment)
console.log('After the Truthy/Fasly aka short-circuit assignment');
if(defaultName){
    console.log('The user name is '+defaultName);
}else{
    console.log('The user name is empty');
}