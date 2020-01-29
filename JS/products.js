const storage = {
    products: [],
    addProductToStorage: function(product) {
        this.products.push(product);
        const newNode = product.makeProductNode();
        $('#all-products').append(newNode)
    },
    showStorage: function(){
        console.log(this.products);
    }
}

class Product {
    constructor(type, imgSrc, name, brand, qty, description, prize) {
        this.type = type,
        this.imgSrc = imgSrc, 
        this.name = name, 
        this.brand = brand, 
        this.qty = qty, 
        this.description = description, 
        this.prize = prize
    }
    makeProductNode() {
        return $(`
        <div class="col-6 col-sm-4 col-md-3 product ${this.type}">
            <div class="product-card">
                <div class="details" data-toggle="modal" data-target="#myModal3">
                    <img src=${this.imgSrc} alt="zdjęcie produktu">
                    <h6 class="product-name">${this.name}</h6>
                    <p class="brand">${this.brand}</p>
                    <div class="progress">
                        <div class="progress-bar w-${this.qty}" role="progressbar" aria-valuenow="${this.qty}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p class="description">${this.description}</p>
                    <h5><span class="product-prize">${this.prize}</span> zł</h5>
                </div>
                <button class="add-button" data-toggle="modal" data-target="#myModal1">Dodaj do koszyka</button>
            </div>
        </div>
        `)
    }

}

// products
const Product1 = new Product('gadgets promo', './images/shield.jpg', 'Szkło hartowane', 'Hard Shield', 25, 'Szkło hartowane dolor sit amet consectetur adipisicing elit. Sunt soluta atque corporis, tempora iste veritatis nam. Dicta id quam suscipit vel. Atque sed reiciendis quidem!', 9.99);
const Product2 = new Product('toys new', './images/wristwatch.jpg', 'Okulary do strzelania', 'TopGlass', 25, 'Okulary ochronne firmy TopGlass lorem bakslcn iudcbhhi3uv uiidbh usdcwbuc udbf uidbhf uhef uedo imd', 9.99);



storage.addProductToStorage(Product1);
storage.addProductToStorage(Product2);
storage.showStorage();