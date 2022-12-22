import { useRef, useState, useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import classes from "./ProfileForm.module.css";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);
  const newPasswordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const Navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const newPassword = newPasswordInputRef.current.value;
    const confirmPassword = confirmPasswordInputRef.current.value;
    const API_KEY = "AIzaSyCCLwjiQHUnuVxnGWDVl8daoJedwYkCs5U";
    const Url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`;
    if (newPassword !== confirmPassword) {
      setErrorMsg("Passwords don't match!");
      return;
    }
    setIsLoading(true);
    const sendRequest = async function () {
      const response = await fetch(Url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newPassword,
          returnSecureToken: true,
        }),
      });
      const data = await response.json();
      setIsLoading(false);
      if (!response.ok) {
        setErrorMsg(data.error.message || "Authentication failed!");
        throw new Error(data.error.message);
      }
      setErrorMsg("ok");
      authCtx.login(data.idToken,data.expiresIn);
      Navigate("/", { replace: true });
    };
    try {
      sendRequest();
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordInputRef} />
        <br />
        <label htmlFor="new-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          ref={confirmPasswordInputRef}
        />
      </div>
      {errorMsg ? (
        <label style={{ color: "red" }}>{errorMsg}</label>
      ) : (
        <label> </label>
      )}
      <div className={classes.action}>
        {!isLoading ? (
          <button>Change Password</button>
        ) : (
          <button disabled> Loading... </button>
        )}
      </div>
    </form>
  );
};

export default ProfileForm;
