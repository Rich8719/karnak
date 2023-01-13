const randomNumber = Math.floor(Math.random() * 442)

function getFortune() {
    fetch("./data.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => document.getElementById("fortune").innerHTML = (data.fortune[randomNumber].text));
}