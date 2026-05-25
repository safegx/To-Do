    let texto = document.getElementById("texto");
    let lista = document.getElementById("lista");
    let reproductor = document.getElementById("reproductor");
    let reproductorV = document.getElementById("reproductorv");
    let reproductorB = document.getElementById("reproductorB");

    const guardar = document.getElementById("guardar");
    const borrarTodo = document.getElementById("borrarTodo");


    function addToDO(){
        let contenido = texto.value;
        if(contenido.trim() === ""){
            alert("No empty task allowed.");
            return;
        }

        const tarea = document.createElement("div");
        tarea.classList.add("tarea");

        const marcador = document.createElement("input");
        marcador.type = "checkbox";
        marcador.classList.add("marcador");

        const textoT = document.createElement("p");
        textoT.textContent = contenido;

        const borrar = document.createElement("button");
        borrar.textContent = "X";
        borrar.classList.add("borrar");

        borrar.addEventListener("click",()=>{
            tarea.remove();
        });


        marcador.addEventListener("change", () => {
        if(marcador.checked){
            textoT.style.textDecoration = "line-through";
            textoT.style.opacity = "0.5";
            tarea.style.backgroundColor = "#B0A8B9";
        } else {
            textoT.style.textDecoration = "none";
            textoT.style.opacity = "1";
            tarea.style.backgroundColor = "#FFFDFD";
        }

    });



        tarea.appendChild(marcador);
        tarea.appendChild(textoT);
        tarea.appendChild(borrar);

        lista.appendChild(tarea);
        texto.value = "";

        


    }
    function extraerID(url) {

    const regex =
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;

    const match = url.match(regex);

    return match ? match[1] : null;
}

function ponerMusica() {

    const url = reproductorV.value;

    const videoID = extraerID(url);

    if (!videoID) {
        alert("Invalid YouTube URL");
        return;
    }

    // Limpia el reproductor anterior
    reproductor.innerHTML = "";

    // Crear iframe de YouTube
    const iframe = document.createElement("iframe");

    iframe.width = "300";
    iframe.height = "170";

    iframe.src =
        `https://www.youtube.com/embed/${videoID}?autoplay=1`;

    iframe.allow = "autoplay";
    iframe.allowFullscreen = true;

    iframe.style.border = "none";

    reproductor.appendChild(iframe);
}



borrarTodo.addEventListener("click", () => {
    lista.innerHTML = "";
});

guardar.addEventListener("click", addToDO);

reproductorB.addEventListener("click", ponerMusica);