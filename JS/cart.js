function showCart() {
    hideAll();
    mainTitle.innerHTML = 'Twoje zamówienie:';
    formSubpage.style.display = "none";
    cartTable.style.display = "";
    menuSlide();
    window.scrollTo(0,0);
}

// jQuery
const $addToCartBtn = $('.add-button');
$addToCartBtn.on('click', addToCart);

function addToCart() {
    const $imgSrc = $(this).prev('div').find('img')[0].src;
    const $name = $(this).prev('div').find('.product-name')[0].innerText;
    const $h5 = $(this).prev('div').find('h5');
    var $prize = $h5.find('.product-prize')[0].innerText;
    const $namesInTable = $('.added-name');

    $('.modal-p')[0].innerText = 'Produkt dodano do koszyka!';

    for (i = 0; i < $namesInTable.length; i ++ ) {
        if ($name == $namesInTable[i].innerText) {
            $('.modal-p')[0].innerText = 'Ten produkt jest już w koszyku!\n\nNie możesz dodać ponownie tego samego produktu.\nMożesz zwiększyć liczbę zamawianych sztuk w koszyku.';
            return;
        }
    } 
    
    productsCounterIncrease();
    $('#main-table').prepend(`
    <tr>
        <td>
            <img class="cart-img" src="${$imgSrc}">
        </td>
        <td>
            <span class="added-name">${$name}</span><br/>
            <span class="in-table-prize">${$prize}</span>
             zł * 
            <input class="qty" type="number" value="1" onchange="cartCalulator()" aria-label="qty"></input>
            szt. = <span class="sum">${$prize}</span> zł
        </td>
        <td>
            <i class="fa fa-times" aria-hidden="true"></i>
        </td>
    </tr>
    `);
    cartCalulator();
}

function  cartCalulator() {
    // calculate carts
    let $total = 0;
    const $qtyInTable = $('.qty');
    
    const $prizesInTable = $('.in-table-prize');
    let $sum = 0;
    for (i = 0; i < $prizesInTable.length; i++) {
        if (isNaN($qtyInTable[i].value) || $qtyInTable[i].value < 1) {
            $qtyInTable[i].value = 1;
        } 
        if ($qtyInTable[i].value % 1 !== 0) {
            $qtyInTable[i].value = Math.round($qtyInTable[i].value);
        } 
        $sum = +$prizesInTable[i].innerText * +$qtyInTable[i].value;
        $sum = Math.round($sum*100)/100;
        $('.sum')[i].innerText = $sum.toFixed(2);
        $total = $total + $sum;
    }
    $total = Math.round($total*100)/100;
    $('#total').text(`SUMA ZAMÓWIENIA: ${$total.toFixed(2)} zł`);
}

// remove
$("#main-table").on("click", ".fa-times", function() {
    $(this).closest("tr").remove();
    cartCalulator();
    productsCounterDecrease();
   });

// products counter
function productsCounterIncrease() {
    let $productsNumber = $('#products-number').text();
    $('#products-number').text(+$productsNumber+1);
    hideShowOrderBtn();
    return $productsNumber;
}

function productsCounterDecrease() {
    let $productsNumber = $('#products-number').text();
    $('#products-number').text(+$productsNumber-1);
    hideShowOrderBtn();
    return $productsNumber;
}

// hide/show order btn
$('#order-btn')[0].style.display = 'none'; 
function hideShowOrderBtn() {
    if ($('#products-number').text() == 0) {
        $('#order-btn')[0].style.display = 'none';
    } else {
        $('#order-btn')[0].style.display = ''; 
    }
}
