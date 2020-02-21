// get products
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var allProducts = JSON.parse(this.responseText);
        for(i=0;i<allProducts.length;i++) {
            const newNode = 
                $(`
                <tr>
                    <td>${allProducts[i].type}</td>
                    <td><img src=../${allProducts[i].imgSrc}></td>
                    <td>${allProducts[i].name}</td>
                    <td>${allProducts[i].brand}</td>
                    <td>${allProducts[i].qty}</td>
                    <td>${allProducts[i].description}</td>
                    <td>${allProducts[i].prize} zł</td>
                </tr>
            `);
                $('table').append(newNode)
        }
    }
};
xmlhttp.open("GET", "../productsBase.json", true);
xmlhttp.send();

