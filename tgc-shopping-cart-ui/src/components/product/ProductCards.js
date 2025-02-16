import ProductCard from "./ProductCard";

const ProductCards = ({ products }) => {
  return (
    <div className="row mb-4" key="products">
      {products.map((product) => (
        <ProductCard product={product} key={product.id}/>
      ))}
    </div>
  );
};

export default ProductCards;
