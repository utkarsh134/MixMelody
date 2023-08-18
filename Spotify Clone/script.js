console.log("Welcome to Spotify")

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/4.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgrssBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName') ;
let songItems = Array.from(document.getElementsByClassName('songItem')) ;


let songs = [
    { songName: "Mere-Rashke-Qamar", filePath: "songs/1.mp3", coverPath: "covers/cvr1.jpg" },
    { songName: "Tan Tana Tn TanTara", filePath: "songs/2.mp3", coverPath: "covers/cvr2.jpg" },
    { songName: "Shivaay", filePath: "songs/3.mp3", coverPath: "covers/cvr3.jpg" },
    { songName: "Badri ki Dulhaniya ", filePath: "songs/4.mp3", coverPath: "covers/cvr1.jpg" },
    { songName: "Aashiq banaya aapne ", filePath: "songs/5.mp3", coverPath: "covers/cvr2.jpg" },
    { songName: "Bharat", filePath: "songs/6.mp3", coverPath: "covers/cvr3.jpg" },
]

songItems.forEach((element,i) =>{
    console.log(element, i) ;
    element.getElementsByTagName("img")[0].src = songs[i].coverPath ;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName ;
})

// audioElement.play() ;
masterPlay.addEventListener('click', ()=> {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgrssBar.value = progress;
})

myProgrssBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgrssBar.value * audioElement.duration) / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-circle-pause') ;
        element.classList.add('fa-circle-play') ;
 })    
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
    element.addEventListener('click', (e)=>{
        makeAllPlays() ;
        songIndex = parseInt(e.target.id) ;
        e.target.classList.remove('fa-circle-play') ;
        e.target.classList.add('fa-circle-pause') ;
        audioElement.src = `songs/${songIndex+1}.mp3` ;
        masterSongName.innerText = songs[songIndex].songName ;
        audioElement.currentTime = 0 ;
        audioElement.play() ;
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play') ;
        masterPlay.classList.add('fa-circle-pause') ;
        
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex = 0 ;
    }
    else{
        songIndex+= 1 ;
    }
    audioElement.src = `songs/${songIndex+1}.mp3` ;
    masterSongName.innerText = songs[songIndex].songName ;
    audioElement.currentTime = 0 ;
    audioElement.play() ;
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play') ;
    masterPlay.classList.add('fa-circle-pause') ;
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 5 ;
    }
    else{
        songIndex-= 1 ;
    }
    audioElement.src = `songs/${songIndex+1}.mp3` ;
    masterSongName.innerText = songs[songIndex].songName ;
    audioElement.currentTime = 0 ;
    audioElement.play() ;
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play') ;
    masterPlay.classList.add('fa-circle-pause') ;
})   

