
function adicionaParagrafo(qtd) {
    //console.log("A quantidade informada é: " + qtd);
    for(let i = 0; i < qtd; i++) {

        let p = "Lorem ipsum dolor sit amet consectetur" 
        + "adipisicing elit. Repellat aperiam veniam deleniti, "
        + "maxime nobis ratione commodi voluptas iste, "
        + "reprehenderit a delectus assumenda. Nihil voluptas, "
        + "illo saepe pariatur nulla dolorum odit.";

        let paragrafo = document.createElement("p");
        paragrafo.innerHTML = p;
        paragrafo.id = i;
        paragrafo.className = "p";

        let div = document.getElementById("p");

        div.appendChild(paragrafo);

    }
}