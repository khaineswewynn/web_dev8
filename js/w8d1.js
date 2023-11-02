const btn_submit=document.getElementById('btn_submit')
const hotelname=document.getElementById('name')
const address=document.getElementById('address')
const email=document.getElementById('email')
const total=document.getElementById('total')
const booking=document.getElementById('booking')
const message=document.getElementById('message')

btn_submit.onclick=function(event){
    event.preventDefault()
//Object Declaration
var hotel={
    name:hotelname.value,
    address:address.value,
    email:email.value,
    total_rooms:total.value,
    booking:booking.value,
    checkAvaialbility:function(){
        console.log(this.total_rooms-this.booking)
    }
    }
    
    console.log(hotel)
    console.log(hotel.email)
    for (const key in hotel) {
        console.log(key+":"+hotel[key])
    }
    hotel.checkAvaialbility()
    message.innerHTML="<h2>"+hotel.name+"</h2>"
    message.innerHTML+="<p>"+hotel.email+"</p>"

    hotelname.value=""

    //Object using Object Contrstutor
    var hotel1=new Object()
    hotel1.name="Sedona"
    hotel1.email="sedona@gmail.com"

    var hotel2=new Object()
    hotel2.name="Swan"
    hotel2.email="swan@gmail.com"
    hotel2.address="mdy"
    
    //Object Constructor Function
    function Hotel(name,address){       
        this.name=name
        this.address=address
    }
    var hotel3=new Hotel("Sedona","Ygn") //=> Object
    console.log(hotel3.name)

}
// class keyword ClassName ( starting with Capital)
class Hotel{
    // construct object
constructor(){
this.name="Mingalar Mandjalay"
}
 displayInfo(){
console.log(this.name)
}
}

let sedona=new Hotel()
sedona.displayInfo()
