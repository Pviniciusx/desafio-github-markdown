const button = document.createElement("button");

button.type = "button";
button.textContent = "Clique aqui";
button.addEventListener("click", () => {
    button.textContent = "Você clicou!";
});

document.body.appendChild(button);