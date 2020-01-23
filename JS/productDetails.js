const $details = $('.details');
$details.on('click', getDetails)

function getDetails() {

    const $imgSrc = $(this).children('img')[0].src;
    const $name = $(this).children('.product-name')[0].innerText;
    const $brand = $(this).children('.brand')[0].innerText;
    const $description = $(this).children('.description')[0].innerText;
    const $h5 = $(this).children('h5');
    var $prize = $h5.find('.product-prize')[0].innerText;


    $('#myModal3').find('.modal-content').append(`
    <div class="modal-header">
        <h5 class="modal-title">${$name}</h5>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
    </div>
    <div class="modal-body">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <img src="${$imgSrc}" alt="zdjęcie produktu">
                </div>
                <div class="col-sm-6">
                    <p><b>Firma:</b> ${$brand}</p>
                    <p class="description"><b>Opis produktu:</b> ${$description}</p>
                    <h5><span class="product-prize">${$prize}</span> zł</h5>                  
                </div>
            </div>
        </div>
    </div>
    `)
}

// remove details from $myModal3


// console.log($details.children);