
hom = ['el sol reverbera en la arena',
        "las cejas en el medio tienen vellos",
        "la tía en la cara se unta crema",
        "de sus labios la piel descaspa",
        "el gordo se traga un eructo con el puño en la boca",
        "desde la sala el cortauñas lo escuchan",
        "raspadas arden las rodillas",
        "el indiferente se acuesta en el frío suelo",
        "el estudiante en clase cabecea",
        "por insomnio en la cama me reacomodo"];

nat = ["me saco el dedo amarillo del oído",
        "los recién nacidos polluelos",
        "el pantano en el pasto se entiesa",
        "el viento estremece las ramas",
        "de la alcantarilla el agua rebosa",
        "las hojas secas se quiebran",
        "las freidoras calientes efervescen",
        "el marcador rechina en el tablero",
        "la leña crepita en la hoguera",
        "el transformador en la noche zumba"];



function whatthehaiku(){
    hai = Math.floor(Math.random() * nat.length);
    kus = Math.floor(Math.random() * hom.length);
    document.getElementById("nat").innerHTML = nat[hai];
    document.getElementById("hom").innerHTML = hom[kus];
}

console.log(random, nat[hai]);
console.log(random, nat[kus]);