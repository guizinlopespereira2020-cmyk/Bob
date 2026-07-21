const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Permite receber JSON
app.use(express.json());

// Pasta pública
app.use(express.static(path.join(__dirname, "public")));

// API do Bob
app.post("/perguntar", (req, res) => {

    const pergunta = req.body.pergunta.toLowerCase();

    let resposta = "";

    if (pergunta.includes("oi")) {
        resposta = "Olá! Como posso ajudar você?";
    }

    else if (pergunta.includes("nome")) {
        resposta = "Meu nome é Bob.";
    }

    else if (pergunta.includes("quem é você")) {
        resposta = "Sou o Bob, assistente da família.";
    }

    else if (pergunta.includes("idade")) {
        resposta = "Ainda sou um assistente em desenvolvimento.";
    }

    else {
        resposta = "Ainda não sei responder isso 😅";
    }

    res.json({
        resposta
    });

});

app.listen(PORT, () => {
    console.log(`🤖 Bob rodando em http://localhost:${PORT}`);
});