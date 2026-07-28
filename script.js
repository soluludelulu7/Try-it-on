VANTA.RINGS({
    el: "body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
})

function randomColor() {
    var items = "0123456789ABCDEF";
    var final = "#"

    for (var oibaka = 0; oibaka < 6; oibaka++) {
        var randomNumbers = Math.floor(Math.random() * 16);
        final += items[randomNumbers];
    }

    return final;
}

var button = document.querySelector(".random");

button.onclick = function () {
    document.querySelector(".card-1").style.backgroundColor = randomColor();
    document.querySelector(".card-2").style.backgroundColor = randomColor();
    document.querySelector(".card-3").style.backgroundColor = randomColor();
    document.querySelector(".card-4").style.backgroundColor = randomColor();
};
