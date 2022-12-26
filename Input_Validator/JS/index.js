const click = document.getElementById('button')
const userInput = document.getElementById('input')
const output = document.getElementById('output')

click.onclick = ()=>{
    if (userInput.value.length > 3 || userInput.value.length == 3){
        const def = `Hello ${userInput.value}`;
        output.textContent =  def;
}
    else{
        output.textContent = 'There are less than 3 characters';
    }
}