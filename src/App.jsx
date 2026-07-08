import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import fetchProducts from './products';
import HomePage from './components/HomePage';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const loadProducts = (async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <Outlet context={products} />
    </>
  );
};

export default App;
