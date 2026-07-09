import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import fetchProducts from './products';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  const [cartProducts, setCartProducts] = useState([]);

  function addToCart(product) {
    if (product.qtyValue === 0) return;
    if (!cartProducts.find(cp => cp.id === product.id)) {
      // product not currently in cart, add
      setCartProducts(prevCps => {
        const newCps = [...prevCps];
        newCps.push(product);
        return newCps;
      });
    } else {
      // product already in cart, change qty
      setCartProducts(prevCps => {
        const newCps = [...prevCps];
        return newCps.map(cp =>
          cp.id === product.id
            ? { ...cp, qtyValue: cp.qtyValue + product.qtyValue }
            : cp);
      });
    }
  }

  function editCartQty(product) {
    if (!cartProducts.find(cp => cp.id === product.id)) return;
    if (product.qtyValue === 0) {
      // product qty is zero, remove from cart
      setCartProducts(prevCps => {
        const newCps = [...prevCps];
        return newCps.filter(cp =>
          cp.id !== product.id);
      });
    } else {
      // changing product quantity in cart
      setCartProducts(prevCps => {
        const newCps = [...prevCps];
        return newCps.map(cp =>
          cp.id === product.id
            ? { ...cp, qtyValue: product.qtyValue }
            : cp);
      });
    }
  }

  useEffect(() => {
    const loadProducts = (async () => {
      const productsData = await fetchProducts();
      if (productsData) {
        setProducts(productsData);
      } else {
        setFetchError(true);
      }
      setLoading(false);
    })();
  }, []);

  return loading
    ? (
      <>
        <h2>Loading...</h2>
      </>
    )
    : fetchError ?
      (
        <>
          <h2>Error: Failed to fetch shop data from FakeStore API.</h2>
        </>
      )
      :
      (
        <>
          <NavBar cartQty={cartProducts.length} />
          <Outlet context={[products, addToCart, cartProducts, editCartQty]} />
          <Footer />
        </>
      )
    ;
};

export default App;
