import { useParams } from "react-router";

const Product = () => {
  const {productId, productName} = useParams();
  return (
    <div className="product">
      <h1>Product Id: {productId}</h1>
      <h2>Product Name: {productName}</h2>
    </div>
  );
}

export default Product;