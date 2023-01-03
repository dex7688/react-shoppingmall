import { useEffect, useState } from 'react';

export default function useFecthProducts(type) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${type}?limit=4`);
      const result = await response.json();
      setProducts(result);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return [products, loading, error];
}
