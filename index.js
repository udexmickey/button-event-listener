

var buttonClick = document.getElementsByClassName("btn")[0];
var isClicked = true;
var body = document.querySelector("body");
const messageHead = document.getElementsByTagName("h1")[0];
buttonClick.addEventListener("click", function(){    
    
    if (buttonClick){
        this.style.color = "#f0ff0f";
        this.style.backgroundColor = "black"
        body.style.background = "#f0ff0f";
        this.textContent  = "I was clicked by you!";
        messageHead.innerHTML = "I have been clicked upon thats why i changed <br> my background color is now 'yellow'";
        messageHead.style.color = "#fff";
    } else {
        this.style.color = "#f23db0";
        this.style.backgroundColor = "black"
        body.style.background = "#f23db0";
        this.textContent  = "Click me!";
        messageHead.innerHTML = "I have been onclicked <br> my background color is now 'purple' ";
        messageHead.style.color = "#fff";
    }

    // isClicked = !isClicked;
    buttonClick = !buttonClick;
});
