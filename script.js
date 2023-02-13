//seleciona o elemento HTML através da tag "form" e armazena na na variável form.
const form = document.querySelector("form");

//Adiciona um evento submit ao formulário. Ao envialo é executado. 
form.addEventListener("submit", function (event) {
    event.preventDefault();

    //Obtem valor dos elementos (inputs) do formuláripo e guarda nas variáveis através da tag "name".
    const fullName = form.elements.fullName.value;
    const phone = form.elements.phone.value;
    const email = form.elements.email.value;
    const number = form.elements.number.value;

    //Verifica o valor do número inserido no formulário e exibe a mensagem correspondete. 
    let response = "";

    if (number % 3 == 0) {
        response = "Primeiro Nome: " + fullName.split(" ")[0];
    }
    
    if (number % 5 == 0) {
        response = "DDD do Telefone: " + phone.substring(0, 4);
    }
    
    if (number % 7 == 0) {
        response = "Domínio do E-mail: " + email.split("@")[1];
    }
    
    if (!response) {
        const fullNameLength = fullName.replace(/ /g, "").length;
        response = "Quantidade de Letras do Nome Completo: " + fullNameLength;
    
        const emailWithoutAtAndDots = email.replace(/[@.]/g, "");
        const emailLength = emailWithoutAtAndDots.length;
    
        response += "<br>Quantidade de Caracteres Excluindo @ e Pontos do E-mail: " + emailLength;
    }
    
    //Exibe com h1 o valor correspondente da variável "response", e um botão para voltar ao fomrulário.
    document.querySelector("body").innerHTML = "<h1>Resposta</h1><p>" + response + "</p><br><button id='backButton'>Voltar para o Formulário</button>";

    //Adiciona um evento ao botão "voltar para o formulário" para recarregar a página e voltando ao formulário.
    const backButton = document.querySelector("#backButton");
    backButton.addEventListener("click", function () {
        location.reload();
    });


});

//Mácara de telefone
const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    if (value.length > 11) {
        value = value.slice(0, 11)
    }
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}