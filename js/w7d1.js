//Arithmeti  Operations
let num1=345
let num2=500
console.log("Addition "+(num1+num2))
console.log("Subtraction "+ (num1-num2))
console.log("Multiplication "+(num1*num2))
console.log("Division "+(num1/num2))
console.log("Remainder "+(num1%num2))
console.log("Power "+ (num1**3))

//number text element
const txt_celsius=document.getElementById('celsius')
console.log(txt_celsius)

//btn element
const btn_convert=document.getElementById('btn_convert')
console.log(btn_convert)
btn_convert.onclick=function(){
    let temp_celsius=txt_celsius.value
    console.log("Celsius "+temp_celsius)
    let temp_fah=(temp_celsius*9/5)+32
    console.log("tem fah "+temp_fah)
    const txt_fah=document.getElementById('fah')
    txt_fah.value=temp_fah
}

//Comparison Operations ( <, > , ==,<=,>=,!=) => true or false
console.log(5==10)
console.log(5<10)

//condition with comparision operations
//if(condition)

if(num1<num2)
{
    console.log(num1+" is less than "+num2)
    console.log(`${num1} is less than ${num2}`)
}
else if(num1>num2){
    console.log(`${num1} is greater than ${num2}`)
}
else{
    console.log(`${num1} is equal to ${num2}`)
}

let txt_num1=document.getElementById('num1')
let txt_num2=document.getElementById('num2')
const btn_check=document.getElementById('btn_check')
let result=document.getElementById('message')
console.log(txt_num1)

console.log("num 1"+txt_num1.value)
btn_check.onclick=function(){
    num1=parseInt(txt_num1.value)
    num2=parseInt(txt_num2.value)
    console.log(num1 + " , "+num2)
    if(num1<num2)
    {
        console.log(`${num1} is less than ${num2}`)
        result.innerHTML="Less than"
    }
    else if(num1>num2){
        console.log(`${num1} is greater than ${num2}`)
        result.innerText=`${num1} is greater than ${num2}`
    }
    else{
        console.log(`${num1} is equal to ${num2}`)
        result.innerText=`${num1} is equal to ${num2}`
    } 
}

//logical operators ( && (and) , || (or))
//true and true => true, true and false => flase, false and false => false
let student_status=true
let age=23

if(age<20 && student_status==true)
{
    let price=120
    console.log("price "+price)
}
else{
    let price=150
    console.log("price "+price)
}

if(age<20 || student_status==true)
{
    let price=120
    console.log("price "+price)
}
else{
    let price=150
    console.log("price "+price)
}

//assignment operators +=, -=, *=.....
let total1=0
 total1+=num1

//Unary operators
let count=0
count++ //count=count+1
count--
++count
--count

//Operators Oprecedence



