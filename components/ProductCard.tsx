import { motion } from 'framer-motion';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <motion.li
    className="p-4 border rounded shadow hover:shadow-lg transition duration-300"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5 }}
  >
    <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover rounded mb-4" />
    <div className="text-center">
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-lg text-blue-600 mb-2">${product.price}</p>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-300">Add to Cart</button>
    </div>
  </motion.li>
);

export default ProductCard;
