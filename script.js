const button = document.createElement("button");

button.type = "button";
button.textContent = "Clique aqui";
button.addEventListener("click", () => {
    window.location.href = "https://github.com/Pviniciusx/desafio-github-markdown";
});

document.body.appendChild(button);