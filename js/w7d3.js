function greet()
{
   console.log("Hello....") ;
}
greet()

//function with parmater
function greeting(name,email){
    console.log("Hello...."+name)
    console.log("email"+email)
}
greeting("David","david@gmail.com")

//function with parameter and return value
function calculateSalary(basic_salary,leave_days)
{
    let salary_day=basic_salary/30
    let net_salary= basic_salary-(salary_day*leave_days)
    return net_salary
}

let salary=calculateSalary(350000,3)

if(salary > 300000)
{
    console.log("bonus")
}
else{
    console.log(" no bonus")
}

let marks=[
    [56,80,78],
    [66,87,92],
    [45,56,71],
    [80,89,96]
]

// avg function 

function calcAvg(mark)
{
let total=0;
mark.forEach(element => {
    total+=element
});
let avg=total/mark.length
return avg
}

marks.forEach((element)=>{
    let average=calcAvg(element)
    if(average>=80)
    {
        console.log("grade A")
    }
    else if(average>=75)
    {
        console.log("Grade B")
    }
    else
    {
        console.log("Grade C")
    }
})

let products=[
    {
        name:"AA medical Product",
        price:1200,
        qty:30
    },
    {
        name:"Noodle",
        price:2800,
        qty:5
    },
    {
        name:"Juice",
        price:8700,
        qty:12
    }
]

let total_amount=0
let calTotal=(product)=>{
    return product.price * product.qty
}

products.forEach((element)=> {
    total_amount+=calTotal(element)
});

console.log("Total amount "+total_amount)

// function calTotal(product){
//     return product.price * product.qty
// }


//Anonymous Function
let checkStatus=function(){
    console.log("Chec kStatus ")
}

checkStatus()

// .onclick=function(){

//}
//arrow function
let hello=(name)=>{
    console.log("Hello function" + name)
}
hello("John")

//array API

let array1=[2,4,6,8,10]
let array2=[1,3,5,7,9]
let array3=[]
console.log(" array 1 before concat "+array1)
array3=array1.concat(array2)

console.log("array1 after concat "+array3)

let even=array3.filter((num)=> num%2==0)
console.log("even array "+even)

//create new array using filter method
let product_array=products.filter((product)=> product.price>5000)
console.log(product_array)

//create new array with new format
let cube_array=array1.map((num)=>num**3)
console.log(cube_array)

//get a new value from array
let total=array1.reduce((result,num)=>result+num,0)
console.log("totla is "+total)

let result=0
let double_array=array1.map((num)=>{
    result+=num
    return num**2
})
console.log("Double array "+double_array)
console.log("rEsult "+result)

array1.push(12)
console.log(array1)
array1.pop()
