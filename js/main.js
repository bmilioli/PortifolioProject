//Declarando variáveis
var btnContact = document.querySelector('.jl-btn-contact');

//Page preloader
window.addEventListener('load', function () {
    var pagePreloader = document.querySelector('.jl-preloader');
    pagePreloader.classList.add('jl-fade-out');

    setTimeout(function () {
        pagePreloader.style.display = 'none';
    }, 3000);
});

//Abrindo e fechando informações de Contato
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.jl-contact-info');
    boxContact.classList.toggle('jl-is-open');

    this.classList.toggle('jl-change-icon');
});