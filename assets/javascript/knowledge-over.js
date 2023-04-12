const conhecimento = document.querySelectorAll("div.knowledge-type")
const saida = document.querySelector(".saida-text")

conhecimento[0].addEventListener("mouseover", () => saida.innerText = "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.")
conhecimento[1].addEventListener("mouseover", () => saida.innerText = "React é uma biblioteca de JavaScript, open source, utilizada para construir user interfaces, nomeadas para aplicações de página única.")
conhecimento[2].addEventListener("mouseover", () => saida.innerText = "Angular é um framework JavaScript de código aberto mantido pela Google para a construção de SPA (Aplicações de Página Única).")
conhecimento[3].addEventListener("mouseover", () => saida.innerText = "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML.")
conhecimento[4].addEventListener("mouseover", () => saida.innerText = "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir.")
conhecimento[5].addEventListener("mouseover", () => saida.innerText = "O PostgreSQL é uma ferramenta que atua como sistema de gerenciamento de bancos de dados relacionados.")

conhecimento.forEach(item => {
    item.addEventListener('mouseout', () => {
        saida.innerText = "*Selecione o icone acima para mais detalhes sobre*"
    })
})
