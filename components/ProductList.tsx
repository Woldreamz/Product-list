import ProductCard from './ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </ul>
);

export default ProductList;
