const btnAdd=document.querySelector('.btnadd')
const ul=document.querySelector('.todolist')
btnAdd.onclick=function(){
    let todo=document.querySelector('#todoitem').value
    let li=document.createElement('li')
    li.innerText=todo
    console.log(li)
    ul.appendChild(li)
    document.querySelector('#todoitem').value=""
    let btnRemove=document.createElement('button')
    btnRemove.innerText='X'
    li.appendChild(btnRemove)
    btnRemove.classList.add('btn')
    btnRemove.classList.add('btn-danger')
    btnRemove.classList.add('remove')
    btnRemove.addEventListener('click',function(){
       
        let parent_ul=this.parentElement.parentElement
        let remove_li=this.parentElement
        parent_ul.removeChild(remove_li)
    })
}


