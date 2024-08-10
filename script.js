// Array containing information about different products
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Function to display product information on the webpage
function displayProducts() {
    // Get the container where products will be displayed
    const productList = document.getElementById('product-list');

    // Clear existing content
    productList.innerHTML = '';

    // Loop through each product and create HTML elements to display them
    products.forEach(product => {
        // Create a div for each product
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        // Create and append the product name
        const productName = document.createElement('h2');
        productName.textContent = product.name;
        productDiv.appendChild(productName);

        // Create and append the product price
        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price.toFixed(2)}`;
        productDiv.appendChild(productPrice);

        // Create and append the product description
        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productDiv.appendChild(productDescription);

        // Append the product div to the container
        productList.appendChild(productDiv);
    });
}

// Event listener to trigger the display of products when the page loads
window.addEventListener('load', displayProducts);
