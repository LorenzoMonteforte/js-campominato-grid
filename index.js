// Btn play click
const play = document.getElementById("play");
play.addEventListener("click", function(){
    const container = document.getElementById("container");
    container.style.display = "flex";
    container.innerHTML = "";
    const numeroCelle = document.getElementById("numeroCelle").value;
    // Crea celle
    for(let i=1; i<=numeroCelle; i++){
        const cella = document.createElement("div");
        cella.classList.add("cella");
        // Verifica quante celle creare
        if(numeroCelle == "100"){
            cella.classList.add("cella100");
        }else if(numeroCelle == "81"){
            cella.classList.add("cella81");
        }else if(numeroCelle == "49"){
            cella.classList.add("cella49");
        }
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