const hora = new Date().getHours();
let saudacao;

if (hora < 12) {
    saudacao = "bom dia";
} else if (hora<18) {
    saudacao = "boa tarde";
} else {
    saudacao = "boa noite";
}
//querySelector encontra o elemento, # procura pelo id, textcontent é o texto dentro dele
document.querySelector("#saudacao").textContent = saudacao;

const habilidades = ["Comunicação" , "Trabalho em equipe" , "resolução de problemas", "Aprendizado contínuo"];

const lista = document.querySelector("#habilidades");

for (const habilidade of habilidades) {
    lista.innerHTML += `<li>${habilidade}</li>`;
}

const projetos = [
    {titulo: "Minicurso no CID", categoria:
    "Extensão" , texto:"Criação de portifólio"},
    {titulo: "Iniciação científica", categoria:"pesquisa",
    texto: "pesquisa sobre inclusão"},
    {titulo: "semana acadêmica", categoria:"Extensão",
    texto:"Apresentação de trabalho"}
];

const cards = document.querySelector("#cards");

function mostrarProjetos(filtro) {
    cards.innerHTML = "";
    for (const projeto of projetos) {
        if(filtro === "Todos" || projeto.categoria === filtro){
            cards.innerHTML += `<article class="card">
                <small>${projeto.categoria}</small>
                <h3>${projeto.titulo}</h3>
                <p>${projeto.texto}</p>
            </article>`;
        }
    }
}

mostrarProjetos("Todos");

for (const botao of document.querySelectorAll(".filtro")) {
    botao.addEventListener("click", function() {
        mostrarProjetos(botao.dataset.filtro);
    });
}

//como e so 1 evento (mudar para claro ou escuro) nao precisa do for para o escutador de eventos
const tema = document.querySelector("#tema");
tema.addEventListener("click", function(){
    document.body.classList.toggle("claro");
    if (document.body.classList.contains("claro")){
        //guardar o valor mesmo se fechar a pagina setItem guarda a etiqueta e o valor do tema
        localStorage.setItem("tema", "claro");
    }else {
        localStorage.setItem("tema", "escuro");
    }
});

if (localStorage.getItem("tema") === "claro") {
    document.body.classList.add("claro");
}

const botaotopo = document.getElementById("voltartopo");

botaotopo.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
    });
});