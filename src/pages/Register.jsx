import { useState } from "react";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  if (!email.includes("@")) {
    alert("Enter a valid email address");
    return;
  }

  if (
    name === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  alert("Registration Successful");
};

  return (
    <div className="login-bg d-flex justify-content-center align-items-center">

      <div className="glass-card" style={{ width: "500px", borderRadius: "15px" }}>

        <h2 className="text-center mb-4 gold-title">
  📝 Create Account
</h2>

        <div className="input-group mb-3">
  <span className="input-group-text">👤</span>

  <input
    type="text"
    className="form-control"
    placeholder="Enter Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
</div>

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
  <span
  className="input-group-text"
  style={{
    fontSize: "19px",
    padding: "0 10px",
    height: "42px"
  }}
>
  🔒
</span>
  <input
  type={showPassword ? "text" : "password"}
  className="form-control mb-3"
  placeholder="Enter Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
</div>

        <div className="input-group mb-3">
  <span
  className="input-group-text"
  style={{
    fontSize: "19px",
    padding: "0 10px",
    height: "42px"
  }}
>
  🔑
</span>

  <input
  type={showPassword ? "text" : "password"}
  className="form-control mb-3"
  placeholder="Confirm Password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
/>
</div>

        <button
  className="btn btn-secondary mb-3"
  onClick={() => setShowPassword(!showPassword)}
>
  {showPassword ? "Hide Password" : "Show Password"}
</button>
        <button
        className="btn gold-btn w-100"
        onClick={handleRegister}
        style={{
  background: "#FFD700",
  color: "#000",
  fontWeight: "bold",
  border: "none"
}}
>
Register Now
</button>
<p className="text-center text-light">
<span style={{ color: "#FFFFFF" }}>
  Already have an account?
</span> <a href="/login" className="text-decoration-underline">Login here</a>
</p>

      </div>

    </div>
  );
}

export default Register;