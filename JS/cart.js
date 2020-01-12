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
    const $img = $(this).prevAll('img');
    const $name = $(this).prevAll('h6')[0].innerText;
    const $prise = $(this).prevAll('h5');

    const $itemsPrise = $prise.value + 1;
    
    $('#main-table').append('<tr><td>'+$img+'</td><td>'+$name+'</td><td>'+$prise+'</td><td>1</td><td>'+$itemsPrise+'</td></tr>')

    console.log($img);
    console.log($name);
    console.log($prise);
}

// dodanie ilości produktów do ikony koszyka