// app.js
const Klok = document.getElementById("kl")

function Update() {
    const now = new Date()

    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')

    const formattedTime = `${hours}:${minutes}.${seconds}`

    Klok.textContent = formattedTime

}

setInterval(Update, 1000)