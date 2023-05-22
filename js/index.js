const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocarTema = document.querySelector(".imagem-botao");

//prmeiro o evento que vai ocorrer e após a virgula a ação que vai ocorrer após o evento
botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    if (modoEscuroAtivo) {
        body.classList.remove("modo-escuro");
        imagemBotaoTrocarTema.setAttribute("src", "./imagens/sun.png");
    } else {

        body.classList.add("modo-escuro");

        //no setAttribute primeiro se passa o atributo a ser modificado
        imagemBotaoTrocarTema.setAttribute("src", "./imagens/moon.png");
    }
});