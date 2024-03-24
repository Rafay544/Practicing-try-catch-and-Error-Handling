 let a = prompt("Enter first number")
 let b = prompt("Enter second number")

 if (isNaN(a) || isNaN(b)){
    throw SyntaxError ("Sorry this is not allowed")
 }

 let sum = parseInt(a) + parseInt(b)


 function main(){
   let x = 2
 try {
    console.log('The number is', sum * x);
    return true
 } catch (error) {
    console.log('Only put the number');
    return false
 }

 finally{
    console.log('files are being closed and dp connection is also being closed');
    
 }
}
let c = main()