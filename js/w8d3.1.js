document.addEventListener('click',function(event){
    let element=event.target
    console.log(element.tagName)
    if(element.tagName=='TD')
    {     
        let div=document.createElement('div')
        div.innerText="No title" 
        div.classList.add('bg-warning')

        if(element.classList.contains('bg-danger'))
        {
            element.classList.remove('bg-danger')
            element.removeChild(element.firstElementChild)
        }
        else{
            element.classList.add('bg-danger')
            element.appendChild(div)
        }
        console.log(element)
    }
    else{
        console.log(element)
        element.onchange=function(){
            const result=document.querySelector('.result')
            console.log(element.options[element.selectedIndex].value)
            if(element.options[element.selectedIndex].value=='day')
            {
                result.classList.add('bg-info')
            }
            else if(element.options[element.selectedIndex].value=='week')
            {
                result.classList.add('bg-warning')
            }
            else{
                result.classList.add('bg-danger')
            }
        }
    }
})