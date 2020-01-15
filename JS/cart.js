function showCart() {
    hideAll();
    mainTitle.innerHTML = 'Twoje zamówienie:';
    formSubpage.style.display = "none";
    cartTable.style.display = "";
    cartCalculate();
    sideMenuHide();
    window.scrollTo(0,0);
}

// jQuery

const $addToCartBtn = $('.add-button');

$addToCartBtn.on('click', addToCart);
function addToCart() {
    // alert('Dodano produkt do koszyka.');
    const $imgSrc = $(this).prevAll('img')[0].src;
    const $name = $(this).prevAll('h6')[0].innerText;
    const $h5 = $(this).prevAll('h5');
    const $prize = $h5.find('.product-prize')[0].innerText;

    $('#main-table').prepend('<tr><td><img src="'+$imgSrc+'"<br/><br/><input class="qty" type="number" value="1" aria-label="qty"></input> szt.</td><td><span class="added-name">'+$name+'</span><br/>'+$prize+' zł</td></tr>');
}

// calculate cart
function cartCalculate() {
    
}



// dodanie ilości produktów do ikony koszyka