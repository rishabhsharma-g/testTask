function sortProducts() {

    let container = document.getElementById("products");
    let products = Array.from(container.children);

    let order = document.getElementById("sortPrice").value;

    products.sort(function(a, b) {

        let priceA = Number(a.dataset.price);
        let priceB = Number(b.dataset.price);

        if (order === "low") {
            return priceA - priceB;
        }

        if (order === "high") {
            return priceB - priceA;
        }

    });

    products.forEach(function(product) {
        container.appendChild(product);
    });
}
