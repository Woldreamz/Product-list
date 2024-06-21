"use client";

import Header from '../components/Header';
import ProductList from '../components/ProductList';
import SortFilter from '../components/SortFilter';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/productService';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortType, setSortType] = useState('default');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
        setFilteredProducts(products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSort = (type: string) => {
    setSortType(type);
    let sortedProducts = [...filteredProducts];
    if (type === 'price-asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (type === 'price-desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedProducts);
  };

  const handleSearch = (query: string) => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center">Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <Header />
      <SortFilter handleSort={handleSort} sortType={sortType} handleSearch={handleSearch} />
      <ProductList products={filteredProducts} />
      <Footer />
    </div>
  );
}

export default Home;
