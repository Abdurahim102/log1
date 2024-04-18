const inp = document.querySelector('.pass')
function Changer() {
    if (inp.type == "password") {
        inp.type = "text"
    }else if(inp.type == "text"){
        inp.type = "password"
    }
}