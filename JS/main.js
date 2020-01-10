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
formSubpage.style.display = "none";

// JS functions
function hideAll() {
    for (x=0; x < allProducts.length; x++) {
        allProducts[x].style.display = "none";
        formSubpage.style.display = "none";
    }
}

// onclick 

function menuSlide() {
    const sideMenu = document.getElementById('product-menu');
    const searchBar = document.getElementById('search-bar');
    const basket = document.getElementById('basket'); 
    if (sideMenu.style.display == 'initial') {
        sideMenu.style.display = 'none';
        searchBar.style.display = 'none';
        basket.style.display = 'none';
    } else {
        sideMenu.style.display = 'initial';
        searchBar.style.display = 'block';
        basket.style.display = 'inline-block';
    }
}

function showNew() {
    hideAll();
    mainTitle.innerHTML = 'Nowości';
    for (x=0; x < newProducts.length; x++) {
        newProducts[x].style.display = "";
    }
}

function showPromo() {
    hideAll();
    mainTitle.innerHTML = 'Promocje';
    for (x=0; x < promoProducts.length; x++) {
        promoProducts[x].style.display = "";
    }
}

function showAllProducts() {
    mainTitle.innerHTML = 'Wszystkie produkty';
    for (x=0; x < allProducts.length; x++) {
        allProducts[x].style.display = "";
    }
}

function showMilitary() {
    hideAll();
    mainTitle.innerHTML = 'Militarne';
    for (x=0; x < militaryProducts.length; x++) {
        militaryProducts[x].style.display = "";
    }
}

function showToys() {
    hideAll();
    mainTitle.innerHTML = 'Zabawki';
    for (x=0; x < toysProducts.length; x++) {
        toysProducts[x].style.display = "";
    }
}

function showGagets() {
    hideAll();
    mainTitle.innerHTML = 'Gadżety';
    for (x=0; x < gadgetsProducts.length; x++) {
        gadgetsProducts[x].style.display = "";
    }
}

function showForm() {
    hideAll();
    mainTitle.innerHTML = 'Formularz zgłoszenia';
    formSubpage.style.display = "";
}

// search

function productSearch() {
    showAllProducts();
    mainTitle.innerHTML = 'Nie mamy przedmiotu o takiej nazwie. <br> Szukaj dalej ;)';
    // Declare variables
    var searchInput, ul, li, productName, i, txtValue;
    searchInput = document.getElementById('myInput').value.toUpperCase();
    productName = document.getElementById('product-name');
    ul = document.getElementById('all-products');
    li = ul.getElementsByClassName('product');    

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      productName = li[i].getElementsByClassName('product-name')[0];
      txtValue = productName.textContent || productName.innerText;
      if (txtValue.toUpperCase().indexOf(searchInput) > -1) {
        li[i].style.display = "";
        mainTitle.innerHTML = 'Oto wynik Twojego wyszukiwania:';
      } else {
        li[i].style.display = "none";
      }
    }
}

// enter key search

var input = document.getElementById('myInput');
input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById('search-icon').click();
  }
});