import { useState, useRef, useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import "../../Styles/inventory.css";
import {useNavigate} from 'react-router-dom';

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const authCtx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const API_KEY = "AIzaSyCCLwjiQHUnuVxnGWDVl8daoJedwYkCs5U";
    const isLoginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    const isSignUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    setIsLoading(true);
    let Url;
    isLogin ? (Url = isLoginUrl) : (Url = isSignUpUrl);
    const sendRequest = async function () {
      setIsLoading(true);
      const response = await fetch(Url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      const data = await response.json();
      setIsLoading(false);
      if (!response.ok) {
        setErrorMsg(data.error.message || "Authentication failed!");
        throw new Error(data.error.message);
      }
      setErrorMsg("");
      authCtx.login(data.idToken,data.expiresIn);
      navigate("/", {replace: true});
    };

    try {
      sendRequest();
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        {errorMsg ? (
          <label htmlFor="password" style={{ color: "red" }}>
            {errorMsg}
          </label>
        ) : (
          <label htmlFor="password"> </label>
        )}
        <div className={classes.actions}>
          {!isLoading ? (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          ) : (
            <button disabled> Loading... </button>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
