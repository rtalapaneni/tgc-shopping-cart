import { Link, Outlet } from "react-router";

const ProductList = () => {
  const products = [
    {
      product_ID: 0,
      product_type: "Shirt",
      product_name: "Oxford Cloth",
      size: "XS",
      colour: "red",
      price: 114,
      quantity: 66,
      description: "A red coloured, XS sized, Oxford Cloth Shirt",
    },
    {
      product_ID: 1,
      product_type: "Shirt",
      product_name: "Oxford Cloth",
      size: "S",
      colour: "red",
      price: 114,
      quantity: 53,
      description: "A red coloured, S sized, Oxford Cloth Shirt",
    },
    {
      product_ID: 2,
      product_type: "Shirt",
      product_name: "Oxford Cloth",
      size: "M",
      colour: "red",
      price: 114,
      quantity: 54,
      description: "A red coloured, M sized, Oxford Cloth Shirt",
    },
    {
      product_ID: 3,
      product_type: "Shirt",
      product_name: "Oxford Cloth",
      size: "L",
      colour: "red",
      price: 114,
      quantity: 69,
      description: "A red coloured, L sized, Oxford Cloth Shirt",
    },
    {
      product_ID: 4,
      product_type: "Shirt",
      product_name: "Oxford Cloth",
      size: "XL",
      colour: "red",
      price: 114,
      quantity: 47,
      description: "A red coloured, XL sized, Oxford Cloth Shirt",
    },
    {
      product_ID: 5,
      product_type: "Shirt",
      product_name: "Oxford Cloth",
      size: "XS",
      colour: "orange",
      price: 114,
      quantity: 45,
      description: "A orange coloured, XS sized, Oxford Cloth Shirt",
    },
  ];
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
          <div className="card">
            <h1>{product.product_ID}</h1>
            <div className="card-body">
              <Link to={`/products/${product.product_ID}/${product.product_name}`}>
                <h5 className="card-title">{product.product_name}</h5>
              </Link>
              <p className="card-text">${product.price}</p>
              <p className="card-text">${product.description}</p>
            </div>
          </div>
        </div>
      ))}
      <Outlet />
    </div>
  );
};

export default ProductList;