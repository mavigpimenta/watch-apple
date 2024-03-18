
const img = document.getElementById('imagem-visualizacao');
const img0 = document.getElementById('0-imagem-miniatura');
const img1 = document.getElementById('1-imagem-miniatura');
const img2 = document.getElementById('2-imagem-miniatura');
const titulo = document.getElementById('titulo-produto');
let idTamanho = 1;
let idCor = 1;
const imagens = ["imagem 1", "imagem 2", "imagem 3"]
const cores = ["verde-cipreste", "azul-inverno", "meia-noite", "estelar", "rosa-claro"]
const tamanhos = ["41 mm", "45 mm"];
const nomeCor = document.getElementById("nome-cor-selecionada")

function trocarTamanho(){
    const opcao_tamanho = document.querySelector('[name="opcao-tamanho"]:checked').id;
    idTamanho = opcao_tamanho.charAt(0);
    titulo.innerText = "Pulseira loop esportiva " + cores[idCor] + " para caixa de  " + tamanhos[idTamanho];

    if(tamanhos[idTamanho] == "41 mm"){
        img.classList.add('caixa-pequena');
    }else {
        img.classList.remove('caixa-pequena');
    }
}

function trocaCor() {
    const opcao_cor = document.querySelector('[name="opcao-cor"]:checked').id;
    idCor = opcao_cor.charAt(0);
    titulo.innerText = "Pulseira loop esportiva " + cores[idCor] + " para caixa de  " + tamanhos[idTamanho];
    if (cores[idCor] == "verde-cipreste"){
        img.setAttribute('src', `./imagens/opcoes-cores/imagens-verde-cipreste/imagem-1.jpeg`)
        img0.setAttribute('src', `./imagens/opcoes-cores/imagens-verde-cipreste/imagem-0.jpeg`)
        img1.setAttribute('src', `./imagens/opcoes-cores/imagens-verde-cipreste/imagem-1.jpeg`)
        img2.setAttribute('src', `./imagens/opcoes-cores/imagens-verde-cipreste/imagem-2.jpeg`)
        nomeCor.innerText = "Cor: Verde-Cipreste"
    } 
    if (cores[idCor] == "azul-inverno"){
        img.setAttribute('src', `./imagens/opcoes-cores/imagens-azul-inverno/imagem-1.jpeg`)
        img0.setAttribute('src', `./imagens/opcoes-cores/imagens-azul-inverno/imagem-0.jpeg`)
        img1.setAttribute('src', `./imagens/opcoes-cores/imagens-azul-inverno/imagem-1.jpeg`)
        img2.setAttribute('src', `./imagens/opcoes-cores/imagens-azul-inverno/imagem-2.jpeg`)
        nomeCor.innerText = "Cor: Azul-Inverno"
    } 
    if (cores[idCor] == "meia-noite"){
        img.setAttribute('src', `./imagens/opcoes-cores/imagens-meia-noite/imagem-1.jpeg`)
        img0.setAttribute('src', `./imagens/opcoes-cores/imagens-meia-noite/imagem-0.jpeg`)
        img1.setAttribute('src', `./imagens/opcoes-cores/imagens-meia-noite/imagem-1.jpeg`)
        img2.setAttribute('src', `./imagens/opcoes-cores/imagens-meia-noite/imagem-2.jpeg`)
        nomeCor.innerText = "Cor: Meia-Noite"
    } 
    if (cores[idCor] == "estelar"){
        img.setAttribute('src', `./imagens/opcoes-cores/imagens-estelar/imagem-1.jpeg`)
        img0.setAttribute('src', `./imagens/opcoes-cores/imagens-estelar/imagem-0.jpeg`)
        img1.setAttribute('src', `./imagens/opcoes-cores/imagens-estelar/imagem-1.jpeg`)
        img2.setAttribute('src', `./imagens/opcoes-cores/imagens-estelar/imagem-2.jpeg`)
        nomeCor.innerText = "Cor: Estelar"
    } 
    if (cores[idCor] == "rosa-claro"){
        img.setAttribute('src', `./imagens/opcoes-cores/imagens-rosa-claro/imagem-1.jpeg`)
        img0.setAttribute('src', `./imagens/opcoes-cores/imagens-rosa-claro/imagem-0.jpeg`)
        img1.setAttribute('src', `./imagens/opcoes-cores/imagens-rosa-claro/imagem-1.jpeg`)
        img2.setAttribute('src', `./imagens/opcoes-cores/imagens-rosa-claro/imagem-2.jpeg`)
        nomeCor.innerText = "Cor: Rosa-Claro"
    } 
    
}

function trocarImagem() {
    const opcao_imagem = document.querySelector('[name="opcao-imagem"]:checked').id;
    idImagem = opcao_imagem.charAt(0);

    if (imagens[idImagem] == "imagem 1") {
        img.setAttribute('src', `./imagens/opcoes-cores/imagens-` +cores[idCor]+ `/imagem-0.jpeg`)
    }
    else if (imagens[idImagem] == "imagem 2") {
        img.setAttribute('src', `./imagens/opcoes-cores/imagens-` +cores[idCor]+ `/imagem-1.jpeg`)

    }
    else if (imagens[idImagem] == "imagem 3") {
        img.setAttribute('src', `./imagens/opcoes-cores/imagens-` +cores[idCor]+ `/imagem-2.jpeg`)

    }
}




