// ... (Your existing JavaScript code) ...

// Function to fetch product price
function fetchProductPrice(productNumber) {
  // Update the following URL with the actual API endpoint
  const apiUrl = 'https://zylalabs.com/api/2346/amazon+pricing+data+api/2264/price+product';

  // Make a request to the API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Assuming the API returns the price information
      const productPrice = data.price;

      // Update the product information on the page
      document.getElementById(`productPrice${productNumber}`).innerText = `₹ ${productPrice}`;
    })
    .catch(error => console.error('Error fetching product price:', error));
}
