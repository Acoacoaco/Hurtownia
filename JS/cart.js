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
    productsCounterIncrease();
    const $imgSrc = $(this).prevAll('img')[0].src;
    const $name = $(this).prevAll('h6')[0].innerText;
    const $h5 = $(this).prevAll('h5');
    var $prize = $h5.find('.product-prize')[0].innerText;

    const $namesInTable = $('.added-name');

    for (i = 0; i < $namesInTable.length; i ++ )
        if ($name == $namesInTable[i].innerText) {
            alert('Ten produkt jest już w koszyku! Nie możesz dodać ponownie tego samego produktu. Możesz zwiększyć liczbę zamawianych sztuk w koszyku.');
            return;
        } 
    
    // alert('Dodano produkt do koszyka.');
    $('#main-table').prepend('<tr><td><img class="cart-img" src="'+$imgSrc+'"<br/><br/><input class="qty" type="number" value="1" onchange="cartCalulator()" aria-label="qty"></input> szt.</td><td><span class="added-name">'+$name+'</span><br/><span class="in-table-prize">'+$prize+'</span> zł</td><td><i class="fa fa-times" aria-hidden="true"></i></td></tr>');
    cartCalulator();
}

function  cartCalulator() {
    // calculate carts
    let $total = 0;
    const $qtyInTable = $('.qty');
    const $prizesInTable = $('.in-table-prize');
    for (i = 0; i < $prizesInTable.length; i++) {
        if (isNaN($qtyInTable[i].value) || $qtyInTable[i].value < 1) {
            $qtyInTable[i].value = 1;
        } 
        $total = +$total + (+$prizesInTable[i].innerText * +$qtyInTable[i].value);
    }
    $total = Math.round($total*100)/100;
    $('#total').text('SUMA ZAMÓWIENIA: '+$total+' zł');
}

// remove
$("#main-table").on("click", ".fa-times", function() {
    $(this).closest("tr").remove();
    cartCalulator();
    productsCounterDecrease();
   });

// dodanie ilości produktów do ikony koszyka
// let $productsNumber = $('#products-number').text();

// function productsCounterIncrease() {
//     $('#products-number').text(+$productsNumber +1);
//     // return $productsNumber;
// }

// function productsCounterDecrease() {
//     $productsNumber = +$productsNumber -1;
//     return $productsNumber;
// }

// console.log($productsNumber)