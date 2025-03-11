import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthModal from "./AuthModal";
import auth from "../services/authService";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(auth.isLoggedIn());
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedIn(auth.isLoggedIn()); // ✅ Sync state with localStorage
  }, []);

  const handleLogout = () => {
    auth.logout(() => {
      setLoggedIn(false);
      navigate("/");
    });
  };
  return (
     <>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">MySite</Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
            {loggedIn ? (
                <>
                  <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/task">Task</Link></li>
                  <li className="nav-item"><button className="btn btn-danger" onClick={handleLogout}>Logout</button></li>
                </>
              ) : (
                <li className="nav-item"><button className="btn btn-primary" onClick={() => setShowModal(true)}>Login</button></li>
              )}
        </ul>
      </div>
    </div>
  </nav>
      <AuthModal show={showModal} onClose={() => setShowModal(false)} setLoggedIn={setLoggedIn} />
    </>
  );
}