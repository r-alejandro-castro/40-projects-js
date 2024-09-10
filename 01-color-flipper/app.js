const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener( 'click', () => {

    // console.log(document.body)

    const randomNumber = getRandomNumber();
    // console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});

const getRandomNumber = () => Math.floor(Math.random() * colors.length);