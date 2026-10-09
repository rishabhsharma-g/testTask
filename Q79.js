function showDetails(name, description, price) {

    document.getElementById("productName").textContent = name;

    document.getElementById("productDescription").textContent = description;

    document.getElementById("productPrice").textContent = price;

    document.getElementById("productModal").style.display = "block";
}


function closeModal() {

    document.getElementById("productModal").style.display = "none";
}

