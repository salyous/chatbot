const chatInput =document.querySelector(".chat-input textarea");
const sendChatBtn =document.querySelector(".chat-input span");

let userMassage;
const handleChat = () =>{
    userMassage = chatInput.value.trim();
    console.log(userMessage);
}
sendChatBtn.addEventListener("click, handleChat")