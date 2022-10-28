import { useNavigate } from "react-router-dom";

// importing style sheet
import "./404Page.css";

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div className="page-404">
      <h1>404 Page Not Found</h1>
      <p>Pages are still in development, go to the below links</p>
      <div className="help-components">
        <button onClick={() => navigate("/")} className="help-btn btn-green disable-btn" disabled>
          Home
        </button>
        <button onClick={() => navigate("/login")} className="help-btn btn-mad">
          Login
        </button>
        <button
          onClick={() => navigate("/create-account")}
          className="help-btn"
        >
          Create account
        </button>
      </div>
    </div>
  );
};

export default Page404;
