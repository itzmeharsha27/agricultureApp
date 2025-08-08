// Page1.js
import { Link } from "react-router-dom";

export default function Page1() {
  return (
    <>
    <div className="welcome-container">
      <h1>Welcome to Smart Farmer App</h1>

   <div className="button-group">

      <Link to="/a/login">
<button className="btn">Login</button>      </Link>

      <Link to="/a/register">
<button className="btn">Register</button>      </Link>
    </div>
    </div>
    
    </>
  );
}
