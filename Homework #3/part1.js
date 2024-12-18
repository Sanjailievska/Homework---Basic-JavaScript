function checkType(param) {
    let type = typeof param; 
    console.log(`The type of "${param}" is ${type}`);          
    return type;                
}
checkType({});
checkType(true);
checkType(13);
checkType("Hello Sanja");
checkType(undefined);