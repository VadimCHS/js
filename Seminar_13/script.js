"use script"

let volumeValue = 0;

// Добавление элементов
const containerEl = document.querySelector('div.container-video');
const videoEl = document.createElement('video');

const newDivEl = document.createElement('div');

const playEl = document.createElement('div');
const pauseEl = document.createElement('div');
const stopEl = document.createElement('div');
const volumeEl = document.createElement('div');
const fullScreen = document.createElement('div');

const rangeEl = document.createElement('input');
const rangeVolumeEl = document.createElement('input');


// Добавление классов
videoEl.classList.add('video');

newDivEl.classList.add('media');

playEl.classList.add('media__play');
pauseEl.classList.add('media__pause');
stopEl.classList.add('media__stop');
volumeEl.classList.add('media__volume');
fullScreen.classList.add('media__full-screen');

rangeEl.classList.add('media__range');

//Добавление аттрибутов
videoEl.setAttribute('src', './video/zakat.mp4');

rangeEl.setAttribute('type', 'range');
rangeEl.setAttribute('min', '0');
rangeEl.setAttribute('max', '100');
rangeEl.setAttribute('value', '0');

rangeVolumeEl.setAttribute('type', 'range');
rangeVolumeEl.setAttribute('min', '0');
rangeVolumeEl.setAttribute('max', '100');
rangeVolumeEl.setAttribute('value', '100');



rangeEl.addEventListener('change', function (e) {
    console.log(e.target.value);
    videoEl.currentTime = (e.target.value/100)*videoEl.duration;
});

videoEl.addEventListener('timeupdate', function (e) {
    rangeEl.setAttribute('value', Math.round((videoEl.currentTime/videoEl.duration)*100));
    console.log();
});






rangeVolumeEl.addEventListener('change', function (e) {
    // console.log(e.target.value);
    videoEl.volume = e.target.value/100;
});

videoEl.addEventListener('volumechange', function (e) {
    rangeVolumeEl.setAttribute('value', videoEl.volume * 100);
    if (rangeVolumeEl.getAttribute('value') !== '0') {
        volumeEl.style.background = 'url(./svg/volume.svg) no-repeat';
    } else {        
        volumeEl.style.background = 'url(./svg/noVolume.svg) no-repeat';
    }  
});



playEl.addEventListener('click', function (e) {
    playEl.style.display = 'none';
    pauseEl.style.display = 'block';
    videoEl.play();
});

pauseEl.addEventListener('click', function (e) {
    playEl.style.display = 'block';
    pauseEl.style.display = 'none';
    videoEl.pause();
});

stopEl.addEventListener('click', function (e) {
    playEl.style.display = 'block';
    pauseEl.style.display = 'none';
    videoEl.currentTime = 0;
    rangeEl.setAttribute('value', '0');
    videoEl.pause();
    
});

volumeEl.addEventListener('click', function (e) {
    if (rangeVolumeEl.getAttribute('value') !== '0') {
        volumeValue = videoEl.volume*100;
        console.log(volumeValue);
        videoEl.volume = 0;
        rangeVolumeEl.setAttribute('value', '0');
    } else {
        videoEl.volume = volumeValue/100;
        rangeVolumeEl.setAttribute('value', volumeValue);
    }    
});

fullScreen.addEventListener('click', function (e) {
    if (containerEl.style.width === '90%') {
        containerEl.style.width = '50%';
    } else {
        containerEl.style.width = '90%';
    }
    
});


// document.querySelectorAll('.range_box input').forEach(item => {

//     item.addEventListener('mousemove', function() {

//         this.closest('.range_box').querySelector('.rangeValue').innerHTML = this.value;
//     })

// });

newDivEl.appendChild(playEl);
newDivEl.appendChild(pauseEl);
newDivEl.appendChild(stopEl);
newDivEl.appendChild(volumeEl);
newDivEl.appendChild(rangeEl);
newDivEl.appendChild(rangeVolumeEl);
newDivEl.appendChild(fullScreen);


containerEl.appendChild(videoEl);
containerEl.appendChild(newDivEl);