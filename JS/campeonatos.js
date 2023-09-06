document.addEventListener("DOMContentLoaded", () => {



    const arbol = document.querySelector(".conteiner")
    
    fetch('DATA/campeonatos.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error al cargar.');
            }
            return response.json();
        })
        .then((data) => {
            const campeonatos= data;
            let content = '';
    
            campeonatos.forEach((campeonato) => {
                content += `
                    <div class="campeonato"> 
                        <h2 class="campeonato__nombre">${campeonato.nombre}</h2><br>
                        <img class="campeonato__img"  src="${campeonato.img}" alt="${campeonato.nombre}"<br><br>
                        <p class="campeonato__campeones">Campeones: ${campeonato.Campeones}</p>
                        <p class="campeonato__desarrollo">Desarrollo:${campeonato.Desarrollo}</p>
                        <p class="campeonato__entrenadores">Entrenadores: ${campeonato.Entrenadores}</p>
                    </div><br>`;
            });
    
            // Agregar el contenido al contenedor de entrenadores
            arbol.innerHTML = content;
        })
        .catch((error) => {
            console.error(error);
        });
    
 })