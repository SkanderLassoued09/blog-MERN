import React, { useRef } from "react";
import Card from "../card/Card";
import Styles from "../styles/login.module.css";

export default function Login() {
  const mail = useRef();
  const password = useRef();
  function userDateSignIn(e) {
    e.preventDefault();
    const userData = {
      mail: mail.current.value,
      password: password.current.value,
    };
    console.log(userData);
  }

  return (
    <div>
      <Card>
        <form className={Styles.form} onSubmit={userDateSignIn}>
          <div>
            <label>Your E-mail</label>
            <input type="mail" ref={mail} required />
          </div>
          <div>
            <label>Your password</label>
            <input type="password" ref={password} required />
          </div>
          <div>
            <button>Sign in</button>
          </div>
        </form>
      </Card>
    </div>
  );
}
