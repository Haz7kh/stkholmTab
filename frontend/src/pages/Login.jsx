import { useState, useContext } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { login } from "../api";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login: loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      loginUser(response.data.token, response.data.isAdmin);
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Logga in</h1>
          <div>
            <label>E-post</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Lösenord</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Logga in</button>
          <div className="signup-link">
            <p>
              Inte medlem? <Link to="/register">Skapa konto</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
