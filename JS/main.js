// varaibles

const allProducts = document.getElementsByClassName('product');
const newProducts = document.getElementsByClassName('new');
const promoProducts = document.getElementsByClassName('promo');
const militaryProducts = document.getElementsByClassName('military');
const toysProducts = document.getElementsByClassName('toys');
const gadgetsProducts = document.getElementsByClassName('gadgets');
const mainTitle = document.getElementById('main-title');
const formSubpage = document.getElementById('form');
           
// onload
formSubpage.hidden = true;

// JS functions
function hideAll() {
    for (x=0; x < allProducts.length; x++) {
        allProducts[x].hidden = true;
    }
}

// onclick 

function showNew() {
    hideAll();
    mainTitle.innerHTML = 'Nowości';
    for (x=0; x < newProducts.length; x++) {
        newProducts[x].hidden = false;
    }
}

function showPromo() {
    hideAll();
    mainTitle.innerHTML = 'Promocje';
    for (x=0; x < promoProducts.length; x++) {
        promoProducts[x].hidden = false;
    }
}

function showAllProducts() {
    mainTitle.innerHTML = 'Wszystkie produkty';
    for (x=0; x < allProducts.length; x++) {
        allProducts[x].hidden = false;
    }
}

function showMilitary() {
    hideAll();
    mainTitle.innerHTML = 'Militarne';
    for (x=0; x < militaryProducts.length; x++) {
        militaryProducts[x].hidden = false;
    }
}

function showToys() {
    hideAll();
    mainTitle.innerHTML = 'Zabawki';
    for (x=0; x < toysProducts.length; x++) {
        toysProducts[x].hidden = false;
    }
}

function showGagets() {
    hideAll();
    mainTitle.innerHTML = 'Gadżety';
    for (x=0; x < gadgetsProducts.length; x++) {
        gadgetsProducts[x].hidden = false;
    }
}

function showForm() {
    hideAll();
    mainTitle.innerHTML = 'Formularz zgłoszenia';
    formSubpage.hidden = false;
}