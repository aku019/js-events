const hex = document.querySelector("#input");
const op = document.querySelector("#color");

hex.addEventListener('input', event => {
    op.style.backgroundColor = hex.value;
});