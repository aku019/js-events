const url=document.querySelector('#url');
const encode=document.querySelector('#encode');
const decode=document.querySelector('#decode');
const output=document.querySelector('#output-url');
encode.addEventListener('click',event => 
{
    output.value= encodeURIComponent(url.value);
});

decode.addEventListener('click',event => 
{
    output.value= codeURIComponent(url.value);
});