const form = document.getElementById("novoItem")

form.addEventlistener("submit", () => {
    evento.preventDefault();

    console.log(evento);
    console.log(evento.target[0].value);
});
