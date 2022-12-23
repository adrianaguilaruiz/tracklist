const requestURL = './json/canciones.json';

async function fetchSongsJson(){
    const response = await fetch(requestURL);
    const songs = await response.json();
    return songs;
}

fetchSongsJson().then(songs =>{
    for (let index = 0; index < songs.canciones.length; index++){
    
        const songsSection = document.getElementById('songSection');
        
        let id = songs.canciones[index].id;
        let track = songs.canciones[index].tema;
        let artist = songs.canciones[index].artista;
        let album = songs.canciones[index].album;
        let date = songs.canciones[index].fecha;
        let img = songs.canciones[index].caratula;
        let genre = songs.canciones[index].genero;
        let link = songs.canciones[index].enlace;

        songsSection.innerHTML += `
        <div class="card" style="width: 16rem;">
            <img src="${img}" class="card-img-top" alt="Carátula del álbum al que pertenece la canción">
            <div class="card-body" class="backCard">
                <h4 class="card-title">${track}</h4>
                <h6 class="card-title">Artista/Grupo: ${artist}</h6>
                <h8 class="card-title">Género musical: ${genre}</h8>
            </div>
            <div class="card-body">
                <a href="${link}" class="card-link" target="_blank">YouTube</a>
            </div>
        </div>
        `
    }
})

const buttonNewSong = document.querySelector('#buttonNewSong');
const formAddSong = document.querySelector('#formAddSong');

const getData = () => {
    const data = new FormData(formAddSong);
    const processedData = Object.fromEntries(data.entries());
    formAddSong.reset();
    return processedData;
}
const postData = async () => {
    const newSong= getData();
    try {
        const response = await fetch ('http://localhost:3000/canciones', {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(newSong)
        });

        if(response.ok){
            const jsonResponse = await response.json();
            const {tema, artista, genero, enlace} = jsonResponse;
        }
    } catch (error) {
        console.log(error);
    }
}

buttonNewSong.addEventListener('click', (event) => {
    event.preventDefault();
    postData();
})


