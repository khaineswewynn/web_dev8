console.log("Javascript file")
document.write("Write in document page")

//variables declaration
//let,var,const
var name="David"
console.log("Name is "+name)

//Naming convention
// meaningful, short to the point, multiwords (Camel case, snake case)
// start with small letter

{
    let adminName="Admin" // better use in function 
    console.log("Admin name "+adminName)
}
//console.log("Admin name outside block"+adminName)

const pi=3.14
console.log('pi value is '+pi)
// pi=3.142
// console.log('pi value is '+pi)

console.log(typeof(pi))

let status=false
console.log("status is "+status)

var element=null
console.log("element is "+null)

var ele=undefined
console.log("element is "+ele)

//Non-primitive objects (series or using index)
var students=[] // start with index 0
students[0]="David"
students[1]="david@gmail.com"
students[2]=23
console.log("students are "+students)
