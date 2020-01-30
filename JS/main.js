// varaibles
const allProducts = document.getElementsByClassName('product');
const newProducts = document.getElementsByClassName('new');
const promoProducts = document.getElementsByClassName('promo');
const militaryProducts = document.getElementsByClassName('military');
const toysProducts = document.getElementsByClassName('toys');
const gadgetsProducts = document.getElementsByClassName('gadgets');
const mainTitle = document.getElementById('main-title');
const formSubpage = document.getElementById('form');
const cartTable = document.getElementById('cartTable');
const searchBar = document.getElementById('search-bar');
const cart = document.getElementById('cart'); 
           
// onload
formSubpage.style.display = "none";
cartTable.style.display = "none";

// JS functions
function hideAll() {
    for (x=0; x < allProducts.length; x++) {
        allProducts[x].style.display = "none";
        formSubpage.style.display = "none";
        cartTable.style.display = "none";
    }
}

// onclick 
function menuSlide() {
    if ($('.hamburger').css('display') == 'block') {
        $('#search-bar').slideToggle(200);
        $('#cart').slideToggle(200);
        $('#product-menu').slideToggle(200);
    }
}

function slideUp() {
    if ($('.hamburger').css('display') == 'block') {
        $('#search-bar').slideUp(200);
        $('#cart').slideUp(200);
        $('#product-menu').slideUp(200);
    }
}

function showNew() {
    hideAll();
    mainTitle.innerHTML = 'Nowości';
    for (x=0; x < newProducts.length; x++) {
        newProducts[x].style.display = "";
    }
    window.scrollTo(0,0);
}

function showPromo() {
    hideAll();
    mainTitle.innerHTML = 'Promocje';
    for (x=0; x < promoProducts.length; x++) {
        promoProducts[x].style.display = "";
    }
    menuSlide();
    window.scrollTo(0,0);
}

function showAllProducts() {
    hideAll();
    mainTitle.innerHTML = 'Wszystkie produkty';
    for (x=0; x < allProducts.length; x++) {
        allProducts[x].style.display = "";
    }
    menuSlide();
    window.scrollTo(0,0);
}

function showMilitary() {
    hideAll();
    mainTitle.innerHTML = 'Militarne';
    for (x=0; x < militaryProducts.length; x++) {
        militaryProducts[x].style.display = "";
    }
    menuSlide();
    window.scrollTo(0,0);
}

function showToys() {
    hideAll();
    mainTitle.innerHTML = 'Zabawki';
    for (x=0; x < toysProducts.length; x++) {
        toysProducts[x].style.display = "";
    }
    menuSlide();
    window.scrollTo(0,0);
}

function showGagets() {
    hideAll();
    mainTitle.innerHTML = 'Gadżety';
    for (x=0; x < gadgetsProducts.length; x++) {
        gadgetsProducts[x].style.display = "";
    }
    menuSlide();
    window.scrollTo(0,0);
}

function showForm() {
    hideAll();
    mainTitle.innerHTML = 'Formularz zgłoszenia';
    formSubpage.style.display = "";
    window.scrollTo(0,0);
}

// search
function productSearch() {
    hideAll();
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
    window.scrollTo(0,0);
}

// enter key search
var input = document.getElementById('myInput');
input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById('search-icon').click();
  }
});