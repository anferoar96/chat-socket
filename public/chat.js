const socket=io()

//Dom elements
let message=document.getElementById("message");
let username=document.getElementById("username");
let btn=document.getElementById("send");
let output=document.getElementById("output");
let actions=document.getElementById("actions");

btn.addEventListener('click',()=>{
    socket.emit('mymessage',{
        message:message.value,
        username:username.value
    })
})

message.addEventListener('keypress',()=>{

    socket.emit('typing',username.value)
})

socket.on('mymessage',(data)=>{
    actions.innerHTML=''
    output.innerHTML+=`<p>
    <strong>${data.username}</strong> : ${data.message}
    </p>`
})

socket.on('typing',(data)=>{
    actions.innerHTML=`<p><en>${data} is typing</em></p>`
})