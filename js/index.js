import Typewriter from 'typewriter-effect/dist/core';



const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {
    deleteSpeed:20
})


    .typeString('Moi c\'est John Doe')
    .pauseFor(300)
    .typeString('<strong>, test test </strong>')
    .start();

