import React, { useState } from "react";

export default function FormFunc() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const clearEmail = () => {
    setEmail("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <label className="form-label">
        Email
        <input
          className="form-mail input"
          placeholder="debra.holt@example.com"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        <img
          width="24"
          height="24"
          src="./assets/xIcon.svg"
          alt=""
          onClick={clearEmail}
        />
      </label>
      <label className="form-label">
        Password
        <input
          type={showPassword ? "text" : "password"}
          className="form-pass input"
          placeholder="••••••••"
          value={password}
          onChange={handlePasswordChange}
        />
        <img
          width="24"
          height="24"
          src="./assets/hideIcon.svg"
          alt=""
          onClick={togglePasswordVisibility}
        />
      </label>
    </>
  );
}
