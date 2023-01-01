string = ""
//Audio
click = new Audio("click.wav")

buttons = document.getElementsByTagName('button')
text = document.getElementById('textbox')
buttons = Array.from(buttons)

for(btn of buttons){
    btn.addEventListener("click",(e)=>{
        text.style.animation = "textbox 3s infinite ease-in-out alternate-reverse"
//play audio
        click.play()

if( text.style.color == "cyan"){
    text.style.color = "white"
    text.style.fontSize= "3vw";
}
console.log(e.target.innerHTML)
if(e.target.innerHTML=="AC"){
    string = ""
    text.value = string
}
else if(e.target.innerHTML=="DE"){
    string = string.toString().slice(0,-1)
    text.value = string

}

       else if( string == "Syntex Error"){
        string = ""
        text.value = string
       }
        else if (e.target.innerHTML=="="){
            try{
            string = eval(string)
            text.value = string
            text.style.color = "cyan"
            text.style.fontSize= "5vw";
            } catch (Exception){
                string = "Syntex Error"
                text.value = string
            }
        }

       else{
        if(e.target.innerHTML=="X"){
        string+='*'
        text.value = string
        }
        else{
        string+=e.target.innerHTML
        text.value = string
        }
       }

    })
}


