function showCart() {
    hideAll();
    mainTitle.innerHTML = 'Twoje zamówienie:';
    formSubpage.style.display = "none";
    cartTable.style.display = "";
    sideMenuHide();
    window.scrollTo(0,0);
}

// jQuery

const $addToCartBtn = $('button');

$addToCartBtn.on('click', addToCart);
function addToCart() {
    alert('Dodano produkt do koszyka.');
    const $imgSrc = $(this).prevAll('img')[0].src;
    const $name = $(this).prevAll('h6')[0].innerText;
    const $prise = $(this).prevAll('h5')[0].innerText;

    const $itemsPrise = $prise.value + 1;
    
    $('#main-table').append('<tr><td><img src="'+$imgSrc+'"/></td><td>'+$name+'</td><td>'+$prise+'</td><td>1</td><td>'+$itemsPrise+'</td></tr>')

}

// dodanie ilości produktów do ikony koszyka