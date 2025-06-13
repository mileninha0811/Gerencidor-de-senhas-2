const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

for (i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;
}

geraSenha();

function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked) {
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked) {
        alfabeto = alfabeto + simbolos;
    }
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha(alfabeto.length);

}

function classificaSenha(tamanhoAlfabeto) {
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    console.log(entropia);
    forcaSenha.classList.remove('fraca', 'media', 'forte');
    if (entropia > 57) {
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57) {
        forcaSenha.classList.add('media');
    } else if (entropia <= 35) {
        forcaSenha.classList.add('fraca');
    }
    const valorEntropia = document.querySelector('.entropia');
    valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2 ** entropia / (100e6 * 60 * 60 * 24)) + " dias para descobrir essa senha.";
}
// Botão de abrir/fechar menu
const acessibilidadeBtn = document.getElementById('acessibilidadeBtn');
const menuAcessibilidade = document.getElementById('menuAcessibilidade');

acessibilidadeBtn.onclick = () => {
    if (menuAcessibilidade.style.display === 'none') {
        menuAcessibilidade.style.display = 'block';
    } else {
        menuAcessibilidade.style.display = 'none';
    }
};

// Modo escuro/claro
let modoEscuro = true;
function toggleModoEscuro() {
    modoEscuro = !modoEscuro;
    if (modoEscuro) {
        document.body.style.backgroundColor = '#0a0a0a';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = '#f0f0f0';
        document.body.style.color = 'black';
    }
}

// Aumentar/diminuir fonte
let tamanhoFonte = 100;
function aumentarFonte() {
    if (tamanhoFonte < 150) {
        tamanhoFonte += 10;
        document.body.style.fontSize = `${tamanhoFonte}%`;
    }
}
function diminuirFonte() {
    if (tamanhoFonte > 70) {
        tamanhoFonte -= 10;
        document.body.style.fontSize = `${tamanhoFonte}%`;
    }
}

// Traduzir para inglês
let traduzido = false;
function traduzirSite() {
    if (!traduzido) {
        document.querySelector('.titulo-principal').textContent = 'Password Generator';
        document.querySelector('.titulo-secundario').textContent = 'Instantly generate a random and secure password';
        document.querySelector('label[for="senha"]').textContent = 'Password';
        document.querySelector('.parametro-titulo').textContent = 'Customize your password';
        document.querySelectorAll('.parametro-senha__titulo')[0].textContent = 'Number of characters';
        document.querySelectorAll('.parametro-senha__titulo')[1].textContent = 'Password features';
        document.querySelectorAll('.parametro-senha__titulo')[2].textContent = 'Password strength';
        document.querySelectorAll('.checkbox + label')[0].textContent = 'Uppercase letters';
        document.querySelectorAll('.checkbox + label')[1].textContent = 'Lowercase letters';
        document.querySelectorAll('.checkbox + label')[2].textContent = 'Numbers';
        document.querySelectorAll('.checkbox + label')[3].textContent = 'Symbols';
        document.querySelectorAll('.parametro-senha-textos p')[0].textContent = 'Weak';
        document.querySelectorAll('.parametro-senha-textos p')[1].textContent = 'Medium';
        document.querySelectorAll('.parametro-senha-textos p')[2].textContent = 'Strong';
        traduzido = true;
    }
}