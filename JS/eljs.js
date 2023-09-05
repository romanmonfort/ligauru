document.addEventListener("DOMContentLoaded", () => {



const arbol = document.querySelector(".arbol")

fetch('entrandores.json')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error al cargar.');
        }
        return response.json();
    })
    .then((data) => {
        const entrandores= data;
        let content = '';

        entrandores.forEach((entrenador) => {
            content += `
                <div class="entrenadores"> 
                    <h2 class="entrenadores__nombre">${entrenador.nombre}</h2><br>
                    <img class="entrenadores__img"  src="${entrenador.img}" alt="${entrenador.nombre}"<br>
                    <p class="entrenadores__especialidad">Especialidad: ${entrenador.especialidad}</p>
                    <p class="entrenadores__experiencia">${entrenador.experiencia}</p>
                    <p class="entrenadores__titulo">Títulos: ${entrenador.titulos}</p>
                </div>`;
        });

        // Agregar el contenido al contenedor de entrenadores
        arbol.innerHTML = content;
    })
    .catch((error) => {
        console.error(error);
    });

})