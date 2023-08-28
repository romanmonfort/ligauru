const DATA_DT = "entrenadores.json";
const mostrarResultados = document.querySelector(".eldt");

fetch(DATA_DT)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error al cargar.');
        }
        return response.json();
    })
    .then((data) => {
        const entrenadores = data.entrenador; 
        let content = '<h1 class="titulo">Entrenadores urugarcha</h1>'; 

        entrenadores.forEach((entrenador) => {
            content += `
                <div class="entrenador"> 
                    <h2 class="nombre">${entrenador.nombre}</h2>
                    <p class="especialidad">${entrenador.especialidad}</p>
                    <p class="experiencia">${entrenador.experiencia}</p>
                    <p class="titulos">Títulos: ${entrenador.titulos}</p>
                </div>`;
        });
        mostrarResultados.innerHTML = content;

    })
    .catch((error) => {
        console.error(error);
    });
