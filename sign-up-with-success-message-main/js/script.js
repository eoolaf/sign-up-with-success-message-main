// está função será executada após a pagina ser recarregada
window.addEventListener('load', function(){
    email.value = '';
})

const email = document.querySelector('#campoEmail');
const spanRequire = document.querySelector('.required');
const buttonSubscribe = document.querySelector('.button-subscribe');
const dismissMessage = document.querySelector("#dismiss-message");
const container = document.querySelector('#container-subscribe');  
const containerSucess = document.querySelector('#container-sucess');


const validateEmail = () => {
    const emailRegex =  /\S+@\S+\.\S+/;

    if (!emailRegex.test(email.value)) {
        // erro no campo
        setError();
    } else {
        // sucesso no campo
        removeError();
    };

};

function setError() {
    email.style.border = '1px solid red';
    spanRequire.style.display = 'block';
};

function removeError() {
    email.style.border = '1px solid green';
    spanRequire.style.display = 'none';
};


buttonSubscribe.addEventListener('click', function(){
    const emailUser = document.querySelector('.emailUser');

    if (!email.value.match(/\S+@\S+\.\S+/)) {
        // Se o email ainda não for válido, exiba um erro
        setError();
    } else {
        // Se o email for válido, remover o container e mostrar campo de sucesso  
        email.style.border = '1px solid hsl(231, 7%, 60%)'

        container.style.display = 'none';
        containerSucess.style.display = 'block';

        emailUser.textContent = email.value;
    }

});

dismissMessage.addEventListener('click', function(){
    container.style.display = 'block';
    containerSucess.style.display = 'none';
    email.value = '';
})


