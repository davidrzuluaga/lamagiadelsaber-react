import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="banner">
        <div className="logo offset-sm-2">
          <Link className="nav-link" to="/">
            <img
              width="160"
              heigth="160"
              src="https://s3.us-east-2.amazonaws.com/lamagiadelsaber.edu.co/logomagiadelsaber.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="drops"></div>
    </div>
  );
};
