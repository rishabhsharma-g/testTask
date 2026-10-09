
function filterProducts(category) {

    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {

        if (category === "all") {
            product.style.display = "block";
        }
        else if (product.classList.contains(category)) {
            product.style.display = "block";
        }
        else {
            product.style.display = "none";
        }

    });
}
