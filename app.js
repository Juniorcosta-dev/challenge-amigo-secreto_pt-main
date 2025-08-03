let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    let adicionaAmigos = document.getElementById("amigo");
    let amigoAdicionado = adicionaAmigos.value.trim();

    // validação do campo
    if (amigoAdicionado === "") {
        alert("Por favor, insira um nome");
    } else {
        amigos.push(amigoAdicionado);
        atualizarListaDeAmigos();
    }

    adicionaAmigos.value = "";
}

// // Atualiza a lista visual de amigos
function atualizarListaDeAmigos() {
    let listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaDeAmigos.appendChild(li);
    }
}

// Sorteia um amigo da lista
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    let listaDeAmigos = document.getElementById("listaAmigos");

    if (amigos.length === 0) {
        alert("A lista de amigos está vazia!");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.textContent = `Amigo secreto sorteado é: ${amigoSorteado}`;

    // Limpa a lista visual e o array após o sorteio
    amigos = [];
    listaDeAmigos.innerHTML = "";
}
