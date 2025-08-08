import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ farmerName }) {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    fetch("https://agricultureapp-md0l.onrender.com/api/logout", { method: "POST" });
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <Link to="/a/login/page1/me" className="navbar-left">🌾</Link>
      <div className="navbar-center">Your Crop Companion</div>
      <div className="navbar-right">
        {farmerName && <span></span>}
        <button className="menu-button" onClick={() => setOpen(!open)}>⋮</button>
        {open && (
          <div className="dropdown">
            <Link to="/a/predict">📈 Prediction</Link>
            <Link to="/a/cs">🌱 Suggestions</Link>
            <Link to="/a/price">Price Prediction</Link>
            <Link to="/a/view-profile">👤 View Profile</Link>

            <button className="dp" onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default function Page1() {
  const [crops, setCrops] = useState([]);
  const [farmerName, setFarmerName] = useState("");

  useEffect(() => {
    fetch("https://agricultureapp-md0l.onrender.com/api/items")
      .then((res) => res.json())
      .then((data) => {
        setCrops(data);
      })
      .catch((err) => {
        console.error("Error fetching crops:", err);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("https://agricultureapp-md0l.onrender.com/api/get-profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setFarmerName(data.name);
        });
    }
  }, []);

  return (
    <>
      <Navbar farmerName={farmerName} />
      <div className="crop-container">
        {crops.map((item) => (
          <div key={item.id} className="crop-card">
            <Link to={`/a/${item.id}`} className="card-link">
              <img src={item.imageUrl} alt={item.pname} className="crop-image" />
              <div className="crop-info">
                <h3>{item.pname}</h3>
                <p id="za">
                  <strong>Description:</strong> {item.discription}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
  <div>
      {/* Your main content goes here */}

      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0' }}>
        <p>&copy; 2025 MyAgri. All rights reserved.</p>
        <Link to="/privacy" style={{ marginRight: '10px' }}>Privacy Policy</Link> |
        <Link to="/terms" style={{ marginLeft: '10px' }}>Terms & Conditions</Link>
      </footer>
    </div>





    </>
  );
}
