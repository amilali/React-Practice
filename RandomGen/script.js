let h2 = document.querySelector("h2");

let button = document.querySelector("button");
// h2.textContent = "Please Wait";
NumGenerator = ()=>{
    let num = Math.random().toString(8).slice(2,3);
    if(num > 1 && num<=6)
    {
    h2.textContent = num;
    }
    else{
        h2.textContent = 1;
    }
}
button.addEventListener("click", NumGenerator);