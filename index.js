// Btn play click
const play = document.getElementById("play");
play.addEventListener("click", function(){
    const container = document.getElementById("container");
    container.style.display = "flex";
    // Crea celle
    for(let i=1; i<=100; i++){
        const cella = document.createElement("div");
        cella.classList.add("cella");
        cella.textContent = i;
        // Btn cella click
        cella.addEventListener("click", function(){
            if(cella.style.backgroundColor == "blue"){
                cella.style.backgroundColor = "transparent";
            }else{
                cella.style.backgroundColor = "blue";
                console.log("Hai cliccato sulla cella numero " + i);
            }
        })
        // Mostra il contenuto in pagina
        container.appendChild(cella);
    }
})