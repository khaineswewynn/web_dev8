const btnAdd=document.querySelector('.add')
const container=document.querySelector('.content')
btnAdd.onclick=function(){
    let row=document.createElement('div')
    row.classList.add('row')
    row.classList.add('mt-3')

    let col1=document.createElement('div')
    col1.classList.add('col-md-3')
    let input=document.createElement('input')
    input.setAttribute('type','text')
    input.classList.add('form-control')
    col1.appendChild(input)

    let col2=document.createElement('div')
    col2.classList.add('col-md-3')
    let start=document.createElement('input')
    start.setAttribute('type','date')
    start.classList.add('form-control')
    col2.appendChild(start)

    let col3=document.createElement('div')
    col3.classList.add('col-md-3')
    let end=document.createElement('input')
    end.setAttribute('type','date')
    end.classList.add('form-control')
    col3.appendChild(end)

    let col4=document.createElement('div')
    col4.classList.add('col-md-3')
    let button=document.createElement('button')
    button.innerText="Remove"
    button.classList.add('btn')
    button.classList.add('btn-danger')
    col4.appendChild(button)

    row.appendChild(col1)
    row.appendChild(col2)
    row.appendChild(col3)
    row.appendChild(col4)

    container.appendChild(row)

}