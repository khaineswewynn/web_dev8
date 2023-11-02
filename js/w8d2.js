let photos=[
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      },
      {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
      },
      {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
      },
      {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
      },
      {
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://via.placeholder.com/600/56a8c2",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
      },
      {
        "albumId": 1,
        "id": 7,
        "title": "officia delectus consequatur vero aut veniam explicabo molestias",
        "url": "https://via.placeholder.com/600/b0f7cc",
        "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
      },
      {
        "albumId": 1,
        "id": 8,
        "title": "aut porro officiis laborum odit ea laudantium corporis",
        "url": "https://via.placeholder.com/600/54176f",
        "thumbnailUrl": "https://via.placeholder.com/150/54176f"
      },
      {
        "albumId": 1,
        "id": 9,
        "title": "qui eius qui autem sed",
        "url": "https://via.placeholder.com/600/51aa97",
        "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
      },
      {
        "albumId": 1,
        "id": 10,
        "title": "beatae et provident et ut vel",
        "url": "https://via.placeholder.com/600/810b14",
        "thumbnailUrl": "https://via.placeholder.com/150/810b14"
      },
      {
        "albumId": 1,
        "id": 11,
        "title": "nihil at amet non hic quia qui",
        "url": "https://via.placeholder.com/600/1ee8a4",
        "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
      },
      {
        "albumId": 1,
        "id": 12,
        "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
        "url": "https://via.placeholder.com/600/66b7d2",
        "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
      }
]
let html=""
const album=document.querySelector('.album')
photos.forEach((photo,index) => {
    if(index%2==0){
        html+="<div class='col-md-3'>"
        html+="<div class='card'>"
        html+="<img src='"+photo.url+"' class='card-img-top' height='200px'>"
        html+="<div class='card-body'>"
        html+="<h3 class='card-title text-primary'>"+photo.title+"</h3>"
        html+="</div>"
        html+="</div>"
        html+="</div>"
    }
    else{
        html+="<div class='col-md-3'>"
        html+="<div class='card'>"
        html+="<img src='"+photo.url+"' class='card-img-top' height='200px'>"
        html+="<div class='card-body'>"
        html+="<h3 class='card-title'>"+photo.title+"</h3>"
        html+="</div>"
        html+="</div>"
        html+="</div>"
    }
   
});
album.innerHTML=html

const btnAdd=document.querySelector('.addbtn')
const btnRemove=document.querySelector('.removebtn')
const btnToggle=document.querySelector('.togglebtn')

btnAdd.onclick=function(){
    album.classList.remove('d-none')
    let children=album.children
    console.log(children)
    let parent=album.parentElement
    console.log(parent)
}
btnRemove.onclick=function(){
    album.classList.add('d-none')
}

btnToggle.onclick=function(){
    if(album.classList.contains('d-none'))
    {
        album.classList.remove('d-none')
    }
    else
    {
        album.classList.add('d-none')
    }
}

