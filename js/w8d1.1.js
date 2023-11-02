const items=document.getElementsByClassName('item')
console.log(items[0])
console.log(items.length)

let posts=[
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      }
]
for(let index=0;index<items.length;index++)
{
    items[index].innerHTML=""
   for (const key in posts[index]) {
    items[index].innerHTML+="<p>"+posts[index][key]+"</p>"
   }
}

const divs=document.getElementsByTagName('div') //HTML Collection 
console.log(divs)

const item=document.querySelector('.item') //Element
console.log(item)

const itemList=document.querySelectorAll('.item') //Node List
console.log(itemList)

const category=document.querySelectorAll('#category') //Node List
console.log(category[0])

//Element Property
//innerHTML, innerText, style, css class

const popularItems=document.querySelectorAll('.popular')
popularItems.forEach((element,index) => {
    element.innerText="Popular Item"
   // element.style.backgroundColor="red"
   // element.style.color="white"
    if(index%2!=0){
        element.classList.add('feature')
    }
});