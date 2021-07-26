hom = ["reverbera en la arena",
        "cejas con pelos en el medio",
        "en la cara se unta crema",
        "de sus labios la piel descaspa",
        "el se traga un eructo",
        "desde la sala lo escuchan",
        "las rodillas raspadas arden",
        "en el subsuelo se acuesta",
        "en la clase se cabecea",
        "por insomnio me acomodo"];

nat = ["del oído se lo saca",
        "recién nacidos polluelos",
        "el pantano se entiesa",
        "se estremecen las ramas",
        "la cloaca se rebosa",
        "las hojas secas se quiebran",
        "las freidoras efervescen",
        "rayando chilla la tabla",
        "hoguera crepita leña",
        "el transformador resuena"];

function whatthehaiku(){
    hai = Math.floor(Math.random() * nat.length);
    kus = Math.floor(Math.random() * hom.length);
    document.getElementById("nat").innerHTML = nat[hai];
    document.getElementById("hom").innerHTML = hom[kus];
}

console.log(random, nat[hai]);
console.log(random, nat[kus]);
