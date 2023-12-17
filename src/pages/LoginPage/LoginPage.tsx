import "./LoginPage.scss";
import logo from "../../assets/dashboard-logo.svg";
import image from "../../assets/login-image.svg";
import { useNavigate, useNavigation } from "react-router-dom";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const navigation = useNavigation();
  const { state } = navigation;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-page-container">
      <div className="left-side">
        <div className="logo-container">
          <img className="lendsqr-logo" src={logo} alt="lendsqr logo" />
        </div>
        <div className="image-container">
          <img src={image} alt="lendsqr illustration" className="lendsqr-image" />
        </div>
      </div>
      <div className="right-side">
        <div className="form-container">
           <div className="form-header">
          <h2 className="welcome">Welcome!</h2>
          <p className="login-text">Enter details to login.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="email-input"
            value={email}
            onChange={handleChange}
          />

          <div className="password-section">
            <input
              required
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="password-input"
              value={password}
              onChange={handleChange}
            />
            <button
              className="show-password-btn"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword((e) => !e);
              }}
            >
              {showPassword ? "HIDE" : "SHOW"}
            </button>
          </div>
          <p className="forgot-text">FORGOT PASSWORD?</p>
          <button className={email && password ? 'link' : 'btn-link'} disabled={!email || !password}>
            {state === "loading" ? (
              <ClipLoader size={"0.8rem"} color="#ffffff" />
            ) : (
              "LOG IN"
            )}
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
