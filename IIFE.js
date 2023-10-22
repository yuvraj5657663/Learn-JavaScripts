// immediately invoked function expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);

} )(); 
((name)=> {
    console.log(`DB CONNECTED TWO ${name}`); 
})("yuvraj")