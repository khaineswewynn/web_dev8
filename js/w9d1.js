const new_task=document.querySelector('#new-task')
const btn_add=document.querySelector('.add')
const incomplete_tasks=document.querySelector('#incomplete-tasks')
const complete_task=document.querySelector('#completed-tasks')

btn_add.onclick=addTask

function addTask(){
let newTask=new_task.value
if(newTask.length>0){
let li=document.createElement('li')

let checkbox=document.createElement('input')
checkbox.type='checkbox'

let label=document.createElement('label')
label.innerText=newTask

let textbox=document.createElement('input')
textbox.type='text'

let btn_edit=document.createElement('button')
btn_edit.innerText='Edit'
btn_edit.classList.add('edit')

let btn_delete=document.createElement('button')
btn_delete.innerText='Delete'
btn_delete.classList.add('delete')

li.appendChild(checkbox)
li.appendChild(label)
li.appendChild(textbox)
li.appendChild(btn_edit)
li.appendChild(btn_delete)

incomplete_tasks.appendChild(li)
new_task.value=''

checkbox.onclick=moveTo
btn_edit.onclick=edit
btn_delete.onclick=deleteTask
}
}

function moveTo(event)
{
    console.log(this)
        let li=this.parentElement
        let ul=this.parentElement.parentElement
        ul.removeChild(li)
    if(this.checked==true)
    {        
        complete_task.appendChild(li)
    }
    else{        
        incomplete_tasks.appendChild(li)
    }   
 
}

function edit(){
    let li=this.parentElement
    let label=li.querySelector('label')
    let textbox=li.querySelector('input[type=text]')
    if(!li.classList.contains('editMode'))
    {
        li.classList.add('editMode')
        textbox.value=label.innerText
    }
    else
    {
        li.classList.remove('editMode')
        label.innerText=textbox.value
    }
}

function deleteTask(){
    let li=this.parentElement
    let ul=this.parentElement.parentElement
    ul.removeChild(li)
}

let list_li=incomplete_tasks.querySelectorAll('li')
for(let index=0;index<list_li.length;index++)
{
    console.log(list_li[index])
    let checkbox=list_li[index].querySelector('input[type=checkbox]')
    checkbox.onclick=moveTo

    let edit_btn=list_li[index].querySelectorAll('button')[0]
    let delete_btn=list_li[index].querySelectorAll('button')[1]

    edit_btn.onclick=edit
    delete_btn.onclick=deleteTask
}