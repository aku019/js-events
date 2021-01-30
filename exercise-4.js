const string=document.querySelector('#str');
const output=document.querySelector('#output');
string.addEventListener('input',event => 
{
    output.innerHTML= string.value.length;
});
