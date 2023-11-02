//two dimensional array (5*3)
let marks=[
    [56,78,90],
    [66,70,85],
    [78,90,96],
    [55,47,67],
    [70,78,62]
]

for(let row=0;row<marks.length;row++)
{
    //console.log(marks[row])
    for(let col=0;col<marks[row].length;col++)
    {
        console.log(marks[row][col])
    }
}

marks.forEach(element => {
    console.log("Student ")
    element.forEach(mark=> {
        console.log("Mark "+mark)
    });
    
});

let student={
    name:'David',
    age:24,
    address:'Mdy'
}

//only array
// student.forEach(element => {
//     console.log(element)
// });

for (const key in student) {
    console.log(key + ":"+student[key])
}
//only array
// for (const iterator of student) {
//     console.log(iterator)
// }

const row=document.getElementById('marklist')
let html_output=''
marks.forEach(element => {
    html_output+="<div class='col-md-3 border border-dark'>"
    element.forEach(mark => {
        html_output+="<h2>"
        html_output+=mark
        html_output+="</h2>"
    });
    html_output+="</div>"
});

row.innerHTML=html_output

const student_row=document.getElementById('student')
let output="<div class='col-md-6 bg-warning'>"
for (const key in student) {
    output+= "<p>" + key+":"+student[key] +"</p>"
}
output+="</div>"
student_row.innerHTML=output


