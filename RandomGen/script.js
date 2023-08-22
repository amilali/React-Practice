let h2 = document.querySelector("h2");

let button = document.querySelector("button");

NumGenerator = ()=>{
    let num = Math.random().toString(8).slice(2,3);
    if(num > 1 && num<7)
    {
    h2.textContent = num;
    }
    else{
        h2.textContent = num;
    }
}
button.addEventListener("click", NumGenerator);