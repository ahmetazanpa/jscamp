console.log("Merhaba Kodlama.io")


let dolarBugun = 9.20;

let dolarDun = 9.50;

{
    let dolarDun = 9.10;
}

console.log(dolarDun)

const euroDun = 10.55;
//euroDun = 11; const üstte tanımlanıp değeri verildiğinden bu satırdaki değeri kabul etmiyor.


console.log(euroDun)

//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
   console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")

console.log(konutKredileri)