import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png" alt="not-found"/>
      <h4>
        Unfortunately the page you are looking for has been moved or deleted
      </h4>
      <Link to="/">
        <button className="btn btn-primary">GO TO HOMEPAGE</button>
      </Link>
    </div>
  );
};

export default NotFound;
