//retrieve all the buttons in the page
const btns = Array.from(document.getElementsByTagName("button"));
btns.forEach(function(btn){
    btn.addEventListener("click",function(evt){
        alert('You have added 1 item to your cart');
    })
});

const cards = Array.from(document.getElementsByTagName("article"));
const dialog = document.getElementById('dialog');
const desc = document.getElementById("desc");
for(let card of cards){
    card.addEventListener("click", evt=>{      
        dialog.style.display = "block";
        desc.style.display = "block";
        dialog.appendChild(card.cloneNode(true));
        dialog.appendChild(desc.cloneNode(true));
    })
}

const dialogCloser = dialog.getElementsByClassName("close")[0];
dialogCloser.addEventListener("click",evt=>{
    dialog.removeChild(dialog.getElementsByTagName("article")[0]);
    dialog.style.display = "none";
    dialog.removeChild(dialog.getElementsByTagName("article")[0]);
    dialog.style.display = "none";
})