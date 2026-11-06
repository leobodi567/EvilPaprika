let Count = 0;
let Paprikacount = 0;
const Cookie = document.getElementById("Button");
const Paprika = document.getElementById("Button1");
const Paprikacost = 10;

Paprika.onclick = Buy;
Cookie.onclick = Increase;

function update() {
    document.getElementById("Number").textContent =
        Count;
}


function Increase() {
    Count += 1 + Paprikacount;
    update();

    
    
}


function Buy() {
    if (Count >= Paprikacost) {
        const EvilPaprika = document.createElement("img");

        EvilPaprika.src = "EvilPaprika.jpg";
        EvilPaprika.style.width = "70px";

        document.getElementById("container").appendChild(EvilPaprika);
        Count = Count - Paprikacost;
        update();
        Paprikacount ++;
    }
}