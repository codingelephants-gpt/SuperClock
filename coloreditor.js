document.getElementById("change").addEventListener("click", function () {
    const r2 = Math.floor(Math.random() * 256);
    const g2 = Math.floor(Math.random() * 256);
    const b2 = Math.floor(Math.random() * 256);
    const formatted = `rgb(${r2}, ${g2}, ${b2})`;

    document.getElementById("kl").style.color = formatted;

    console.log("Button clicked");
});
