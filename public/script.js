async function enviar() {

    const input = document.getElementById("pergunta");
    const mensagens = document.getElementById("mensagens");

    const pergunta = input.value;

    if (pergunta === "") return;

    mensagens.innerHTML += `
        <p><strong>Você:</strong> ${pergunta}</p>
    `;

    const resposta = await fetch("/perguntar", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            pergunta
        })

    });

    const dados = await resposta.json();

    mensagens.innerHTML += `
        <p><strong>Bob:</strong> ${dados.resposta}</p>
    `;

    input.value = "";

}