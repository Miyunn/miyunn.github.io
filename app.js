const figets = ["Pop Open", "Close Shut", "Spin", "Spin Faster", 
"Triple Spin", "Double Spin", "Un Oh You almost dropped it",
 "Woohoo Quadruple Spin"];
const btn = document.getElementById("btn");
const fidget = document.querySelector(".fidget");

btn.addEventListener("click", function(){
    const randomFiget = getRandomFiget();
    fidget.textContent = figets[randomFiget];
});

function getRandomFiget(){
    return Math.floor(Math.random() * figets.length);
}

