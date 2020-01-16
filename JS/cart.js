function showCart() {
    hideAll();
    mainTitle.innerHTML = 'Twoje zamówienie:';
    formSubpage.style.display = "none";
    cartTable.style.display = "";
    sideMenuHide();
    window.scrollTo(0,0);
}

// jQuery

const $addToCartBtn = $('.add-button');
$addToCartBtn.on('click', addToCart);

function addToCart() {
    const $imgSrc = $(this).prevAll('img')[0].src;
    const $name = $(this).prevAll('h6')[0].innerText;
    const $h5 = $(this).prevAll('h5');
    var $prize = $h5.find('.product-prize')[0].innerText;

    // console.log($imgSrc);
    // console.log($('.cart-img'));

    // if () {
    //     alert('Ten produkt jest już w koszyku!');
    // } else {
    //     alert('Dodano produkt do koszyka.');
        $('#main-table').prepend('<tr><td><img class="cart-img" src="'+$imgSrc+'"<br/><br/><input class="qty" type="number" value="1" onchange="cartCalulator()" aria-label="qty"></input> szt.</td><td><span class="added-name">'+$name+'</span><br/>Cena 1 szt. to <span class="in-table-prize">'+$prize+'</span> zł</td></tr>');
        cartCalulator();
    // }
}

function  cartCalulator() {
    // calculate carts
    let $sum = 0;
    const $qtyInTable = $('.qty');
    const $prizesInTable = $('.in-table-prize');
    for (i = 0; i < $prizesInTable.length; i++) {
        if (isNaN($qtyInTable[i].value) || $qtyInTable[i].value < 1) {
            $qtyInTable[i].value = 1;
        } 
        $sum = +$sum + (+$prizesInTable[i].innerText * +$qtyInTable[i].value);
    }
    $sum = Math.round($sum*100)/100;
    $('#sum').text('SUMA ZAMÓWIENIA: '+$sum+' zł');
}

// te same produkty - produkt już w koszyku
// dodanie ilości produktów do ikony koszyka