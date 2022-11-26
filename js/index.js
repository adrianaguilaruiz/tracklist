const requestURL = '../json/canciones.json';

//Llamada asíncrona para que lea todos los datos antes de continuar
async function fetchSongsJson(){
    const response = await fetch(requestURL);
    const songs = await response.json(); //canciones.json estará dentro de la variable "songs"
    return songs;
}

//Promesa para que lea el archivo json
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

        songsSection.innerHTML += `

        `

        console.log(songs.canciones[index].tema);
    }
})