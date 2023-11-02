const editBtns=document.querySelectorAll('.edit')
const deleteBtns=document.querySelectorAll('.delete')

for(let index=0;index<editBtns.length;index++)
{
    editBtns[index].onclick=editRow
    deleteBtns[index].onclick=deleteRow
}

function editRow(){
const tr=this.parentElement.parentElement
const labels=tr.querySelectorAll('label')
const textboxes=tr.querySelectorAll('input[type=text]')
    if(!tr.classList.contains('editMode'))
    {
        for(let index=0;index<labels.length;index++)
        {
            if(index!=labels.length-1)
            {
                textboxes[index].value=labels[index].innerText
                textboxes[index].classList.remove('d-none')
                textboxes[index].classList.add('d-block')
                labels[index].classList.add('d-none')
                tr.classList.add('editMode')
            }
            else
            {
                labels[index].classList.add('d-none')
                let selectbox=labels[index].nextElementSibling
                selectbox.classList.remove('d-none')
                selectbox.classList.add('d-block')
                for(let count=0;count<selectbox.options.length;count++)
                {
                    if(selectbox.options[count].text==labels[index].innerText){
                        selectbox.options[count].selected=true
                    }
                }
            }
        
        }
    }
    else
    {
        for(let index=0;index<labels.length;index++)
        {
        labels[index].innerText=textboxes[index].value
        textboxes[index].classList.add('d-none')
        textboxes[index].classList.remove('d-block')
        labels[index].classList.add('d-block')
        labels[index].classList.remove('d-none')
        tr.classList.remove('editMode')
        }
   
    }
}

function deleteRow(){
console.log(this)
}