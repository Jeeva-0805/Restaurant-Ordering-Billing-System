import { useState } from "react";
import "../App.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    alert("Login Successful");
  };

  return (
    <div className="login-bg d-flex justify-content-center align-items-center">

    <div className="glass-card"
     style={{ width: "500px" }}>
        <h2 className="text-center mb-4 gold-title">
  🍽 Restaurant Login
</h2>

        <div className="input-group mb-3">
    <span className="input-group-text">📧</span>
    <input
        type="email"
        className="form-control"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
</div>

        <div className="input-group mb-3">
    <span className="input-group-text">🔒</span>

    <input
        type={showPassword ? "text" : "password"}
        className="form-control"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
</div>
        <div className="d-flex justify-content-between mb-3">

    <div>
        <input type="checkbox" id="remember" />
        <label
  htmlFor="remember"
  style={{ color: "#FFFFFF" }}
>
  Remember Me
</label>
    </div>

    <a href="#">Forgot Password?</a>

</div>

        <button
          className="btn gold-btn w-100"
          onClick={handleLogin}
          style={{
  background: "#FFD700",
  color: "#000",
  fontWeight: "bold",
  border: "none"
}}
        >
            
          Login
        </button>

        <button
            className="btn btn-secondary mt-2"
            onClick={() => setShowPassword(!showPassword)}
        >
            {showPassword ? "Hide" : "Show"} Password
        </button>

        <p
  className="text-center mt-3"
  style={{
    color: "#FFFFFF",
    fontWeight: "500"
  }}
>
  Welcome to Restaurant Ordering System
</p>

      </div>

    </div>
  );
}

export default Login;