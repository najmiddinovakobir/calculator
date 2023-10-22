function solve(){
    let x = document.getElementById('result').value
    let y = eval(x);
    document.getElementById('result').value = y
    return y
    
}
function clearScreen(){
    document.getElementById('result').value = ''
}
function display(val){
    const tom1 = new Audio("mouse-click-153941.mp3")
    tom1.play();
    document.getElementById('result').value += val
    return val
}   
document.addEventListener("keypress" , function (clear) {
    if (clear.key === "c") {
        document.getElementById('result').value = ''
    }
});
