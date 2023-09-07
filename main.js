//retrieve all the buttons in the page
const btns = Array.from(document.getElementsByTagName("button"));
btns.forEach(function(btn){
    btn.addEventListener("click",function(evt){
        alert('You have added 1 item to your cart');
        gtag("event","add_to_cart",{
            "event_category":"conversion",
            "event_label":"One item has been added to cart"
        });
    })
});

