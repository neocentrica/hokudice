hom = ["reverbera en la arena",
        "cejas con vellos en el medio",
        "en la cara se unta crema",
        "de los labios la piel descaspa",
        "no se tapa el eructo",
        "se escucha desde la sala",
        "las rodillas raspadas arden",
        "en el subsuelo se acuesta",
        "en la clase se cabecea",
        "por insomnio me acomodo"];

nat = ["de la oreja lo saca",
        "polluelos recién nacidos",
        "el pantano se entiesa",
        "las ramas se estremecen",
        "el contador se rebosa",
        "las hojas secas se quiebran",
        "las freidoras efervescen",
        "la tiza chilla agudo",
        "hoguera crepita leña",
        "el transformador rezumba"];

function whatthehaiku(){
    hai = Math.floor(Math.random() * nat.length);
    kus = Math.floor(Math.random() * hom.length);
    document.getElementById("nat").innerHTML = nat[hai];
    document.getElementById("hom").innerHTML = hom[kus];
}

console.log(random, nat[hai]);
console.log(random, nat[kus]);
