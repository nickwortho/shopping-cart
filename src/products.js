async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Failure while fetching product data: ', error.message);
        return null;
    }
};

export default fetchProducts;