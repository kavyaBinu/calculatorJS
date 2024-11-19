// function  to display conent
function displayContent(content) {
    result.value += content
    
}
// clear input
function calcclear() {
    result.value = ""
    
}
// result

function calcOutput() {
    result.value=eval(result.value)
    
}

//backspace

function removeLastDigit() {
    result.value = result.value.slice(0,-1)
}