const msgInput = document.querySelector("#msgInput");
const showbtn = document.querySelector("#showbtn");
const delay = document.querySelector("#delay");
const output = document.querySelector("#output");


let timerId;

showbtn.addEventListener("click", () => {
    let message = msgInput.value;

    clearTimeout(timerId);


    if (message.trim() === "") {
        output.innerText = "Please enter a message!";
        return;
    }

    let selectedDelay = Number(delay.value);
    console.log(selectedDelay);

    output.innerText = "Waiting...";



    timerId = setTimeout(() => {
        console.log("Timer completed");
        output.innerText = message;
    }, selectedDelay);

});




