import React from "react";
import { useState } from "react";
import FormFunc from "./FormFunc/FormFunc";

function Form() {
  return (
    <div className="form-wrapper">
      <h1 className="form-title">NFT Access</h1>
      <p className="form-text">
        Please fill your detail to access your account.
      </p>
      <form className="form">
        <FormFunc />
        <div className="wrapper">
          <label className="form-label checkbox">
            <input type="checkbox" className="form-check" />
            Remember me
          </label>
          <a href="#" className="form-link">
            Forgot Password?
          </a>
        </div>
        <button type="submit" className="form-submit">
          Sign in
        </button>
        <a href="#" className="form-log">
          <img width="24" height="24" src="./assets/Google.svg" alt="" />
          <span>Sign in with Google</span>
        </a>
      </form>
      <a href="#" className="form-register">
        Don’t have an account? <span>Sign up</span>
      </a>
    </div>
  );
}

export default Form;
