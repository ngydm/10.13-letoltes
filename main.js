
//await
// JSON JavaScript Object Notation
async function init(){
const response = await fetch('https://petrik-12e-2026-default-rtdb.europe-west1.firebasedatabase.app/kutyak.json');
console.log("header-ök letölteve")

const adatok = await response.json();

console.log("tartalom letöltve")

const main = document.getElementsByTagName('main')[0];
for (const kutya of adatok) {
    const p = document.createElement('p');
    p.textContent = `${kutya.nev} - ${kutya.eletkor} - ${kutya.fajta} - ${kutya.suly}`;
    main.appendChild(p);
}
}
init();
console.log("betöltött")

/*fetch('/tartalom.txt')
    .then(response =>{
    console.log("header-ök letölteve")
    return response.text();
}).then(text => {
    console.log("tartalom letöltve")
    const main = document.getElementsByTagName('main')[0];
    main.textContent = text;
})
console.log("betöltött")*/