console.log(3**4*2)
console.log(4*2**3)

const txt_mark=document.getElementById('mark')
const btn_grade=document.getElementById('grade')
const result=document.getElementById('result')

btn_grade.onclick=function(event){
    event.preventDefault()
    let marks=txt_mark.value
    // if(marks>=80)
    // {
    //     result.innerHTML="Grade A"
    // }
    // else if (marks>=75 && marks<80)
    // {
    //     result.innerHTML="Grade B"
    // }
    // else if(marks>=65 && marks<75)
    // {
    //     result.innerHTML="Grade C"
    // }
    // else
    // {
    //     result.innerHTML="Grade D"
    // }
    // switch(true){
    //     case (marks>=80):result.innerHTML="A";break;
    //     case (marks>=75 && marks<80):result.innerHTML="B";break;
    //     case (marks>=65 && marks<75):result.innerHTML="C";break;
    //     default: result.innerHTML="D"
    // }    
    marks >=80 ? result.innerHTML="Grade A"  : ((marks>=75 && marks<80)? result.innerHTML="Grade B": ((marks>=65 && marks<75)? result.innerHTML="Grade C": result.innerHTML="Grade D"))

    
}

for(let index=10;index<100;index+=2){
    console.log(index)
}
let student_marks=[45,56,78,89,90] //staring point=0
for(let count=0;count<student_marks.length;count++)
{
    console.log(student_marks[count])
}

//array and object
//element value,index
student_marks.forEach((mark,index) => {
    console.log("Mark "+mark)
    console.log("Index "+index)
})

//object and array
//array[key]=>value
for (const key in student_marks) {
    console.log(key+"=>"+student_marks[key])
}

//value
for (const iterator of student_marks) {
    console.log(iterator)
}

let salaries=[450000,300000,500000,700000]

let index=0
while(index<salaries.length){
    console.log("Salary " +salaries[index])
    index++
}

 index=0
do{
    console.log("Salaries "+salaries[index])
    index++;
}while(index<salaries.length)

