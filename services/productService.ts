import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}

const API_URL = 'https://dummyjson.com/products';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get(API_URL);
  return response.data.products;
};
