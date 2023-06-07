function selectedVideo(event) {
    let validFile = false;
    if (window.File && window.FileReader && window.FileList) {
        console.log('Se soportan todas las APIs.');
    } else {
        alert('Este navegador no soporta la API de File.');
    }

    const video = document.getElementById('video');
    const buttons = document.getElementById('buttonsZone');
    const input = document.getElementById('file');
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        const type = file.type;
        const name = file.name;
        validFile = (type.startsWith('video')) && ((name.endsWith('.mp4')) || (name.endsWith('.ogv')) || (name.endsWith('.webm')));
        if (validFile) {
            video.src = reader.result;
            video.removeAttribute('hidden');
            buttons.removeAttribute('hidden');
            alert("Cargando vídeo...");
        } else {
            input.value = '';
            alert("Archivo inválido.");
        }
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

function playVideo() {
    const video = document.getElementById('video');
    video.play();
}

function pauseVideo() {
    const video = document.getElementById('video');
    video.pause();
}

function volumeUp() {
    const video = document.getElementById('video');
    if (video.volume < 1)
        video.volume += 0.1;
    else
        alert("Volumen máximo.");
}

function volumeDown() {
    const video = document.getElementById('video');
    if (video.volume > 0.1)
        video.volume -= 0.1;
    else 
        alert("Volumen mínimo.");
}