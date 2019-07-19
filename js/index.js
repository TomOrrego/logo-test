const logo = document.querySelector('#bm');
let animation = bodymovin.loadAnimation({
     container: document.getElementById('bm'),
     renderer: 'svg',
     loop: false,
     autoplay: false,
     path: 'data.json'
})
logo.addEventListener('mouseover', playLoop);

function playLoop(){
     animation.playSegments([0,50], true);
}
