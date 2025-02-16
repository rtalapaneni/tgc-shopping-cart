import { Link } from "react-router";
import { API_URL } from "../util/constant";

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3">
      <div className="card flex-md-row mb-4 box-shadow h-md-250">
        <div className="card-body d-flex flex-column align-items-start">
          <strong className="d-inline-block mb-2 text-primary">
            {product.brand}
          </strong>
          <h3 className="mb-0">
            <Link to={`/products/view/${product.id}`} className="text-dark">
              {product.model} - {product.name}
            </Link>
          </h3>
          <div className="mb-1 text-muted">{product.price}</div>
          <p className="card-text mb-auto">{product.description}</p>
        </div>
        <img
          className="card-img-right flex-auto d-none d-md-block"
          data-src="holder.js/200x250?theme=thumb"
          alt="Thumbnail [200x250]"
          src={product.imageUrl}
          data-holder-rendered="true"
          style={{ width: "200px", height: "250px" }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
