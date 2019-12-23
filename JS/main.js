// varaibles
const special = document.getElementById('special');
const news = document.getElementById('news');
const promo = document.getElementById('promo');
const military = document.getElementById('military');
const toys = document.getElementById('toys');
const gadgets = document.getElementById('gadgets');
const form = document.getElementById('form');
           
// function onload
function hideAllExceptSpecial() {
    special.hidden = false;
    news.hidden = true;
    promo.hidden = true;
    military.hidden = true;
    toys.hidden = true;
    gadgets.hidden = true;
    form.hidden = true;
}


// JS functions
function hideAll() {
    hideAllExceptSpecial();
    special.hidden = true;
}

// onclick functions
function showNew() {
    hideAll();
    news.hidden = false;
}

function showPromo() {
    hideAll();
    promo.hidden = false;
}

function showProductsAll() {
    hideAll();
    military.hidden = false;
    toys.hidden = false;
    gadgets.hidden = false;
}

function showMilitary() {
    hideAll();
    military.hidden = false;
}

function showToys() {
    hideAll();
    toys.hidden = false;
}

function showGadgets() {
    hideAll();
    gadgets.hidden = false;
}

function showForm() {
    hideAll();
    form.hidden = false;
}
