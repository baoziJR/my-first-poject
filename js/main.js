// let button = document.getElementById('changeBackground');
// button.addEventListener('click', function(){
//     let header = document.querySelector ('.header');
//     header.style.backgroundImage = 'url("images/bgbg2.png")';
// });

let button = document.getElementById('changeBackground');
button.addEventListener('click', function(){
    let header = document.querySelector('.header');
    if (header.style.backgroundImage === 'url("images/bgbg2.png")') {
        header.style.backgroundImage = 'url("images/bgbg.jfif")'; 
    } else {
        header.style.backgroundImage = 'url("images/bgbg2.png")'; 
    }
});