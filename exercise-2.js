const add=document.querySelector('#exercise-2-add');
const sub=document.querySelector('#exercise-2-sub');
const val=document.querySelector('#val');
add.addEventListener('click',event => 
{
    console.log(val.value++);
});

sub.addEventListener('click',event => 
{
    console.log(val.value--);
});