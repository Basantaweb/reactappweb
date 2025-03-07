import { useState } from "react";
import auth from "../services/authService";

export default function AuthModal({ show, onClose, setLoggedIn }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    auth.login(email, password, (success) => {
      if (success) {
        setLoggedIn(true);
        onClose();
      } else {
        setError("Invalid Credentials");
      }
    });
  };

  if (!show) return null;

  return (
    <div className="modal show d-block bg-dark bg-opacity-50" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{isLogin ? "Login" : "Register"}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {error && <p className="text-danger">{error}</p>}
            <input 
              type="email" 
              className="form-control mb-2" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="password" 
              className="form-control mb-2" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={handleSubmit}>
              {isLogin ? "Login" : "Register"}
            </button>
            <button className="btn btn-secondary" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Switch to Register" : "Switch to Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
