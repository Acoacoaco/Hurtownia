// get products
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var allProducts = JSON.parse(this.responseText);
    for(i=0;i<allProducts.length;i++) {
        const newNode = 
            $(`
            <div class="col-6 col-sm-4 col-md-3 product ${allProducts[i].type}">
                <div class="product-card">
                    <div class="details" data-toggle="modal" data-target="#myModal3">
                        <img src=${allProducts[i].imgSrc} alt="zdjęcie produktu">
                        <h6 class="product-name">${allProducts[i].name}</h6>
                        <p class="brand">${allProducts[i].brand}</p>
                        <div class="progress">
                            <div class="progress-bar w-${allProducts[i].qty}" role="progressbar" aria-valuenow="${allProducts[i].qty}" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="description">${allProducts[i].description}</p>
                        <h5><span class="product-prize">${allProducts[i].prize}</span> zł</h5>
                    </div>
                    <button class="add-button" data-toggle="modal" data-target="#myModal1">Dodaj do koszyka</button>
                </div>
            </div>
            `);
            $('#all-products').append(newNode)
        }
    }
};
xmlhttp.open("GET", "../productsBase.json", true);
xmlhttp.send();