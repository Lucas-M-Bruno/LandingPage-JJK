document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelectorAll('[data-tab-button]');

    
    //SEÇAO DE ATRAÇOES, PROGRAMAÇAO DAS ABAS
    for(let i = 0; i<button.length; i++) {
        button[i].addEventListener('click', function(botao) {
            const tabTarget = botao.target.dataset.tabButton 
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);

            escondeAbas();
            tab.classList.add('characters__list--active');
            removeBotaoAtivo();
            botao.target.classList.add('characters__tabs__buttons--active')
        })
    }
});

function removeBotaoAtivo() {
    const button = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i<button.length; i++) {
        button[i].classList.remove('characters__tabs__buttons--active')
    }
}

function escondeAbas() {
    const tabContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i<tabContainer.length; i++) {
        tabContainer[i].classList.remove('characters__list--active');
    }
}