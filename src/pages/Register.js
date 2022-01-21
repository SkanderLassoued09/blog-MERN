import React, { useRef } from "react";
import Card from "../card/Card";
import Styles from "../styles/register.module.css";

export default function Register() {
  const fname = useRef();
  const lname = useRef();
  const mail = useRef();
  const password = useRef();
  const rePassword = useRef();
  function userRegistration(e) {
    e.preventDefault();
    const userDate = {
      firstName: fname.current.value,
      lastName: lname.current.value,
      mail: mail.current.value,
      password: password.current.value,
      rePassword: rePassword.current.value,
    };
    console.log(userDate);
  }
  return (
    <div>
      <Card>
        <form className={Styles.form} onSubmit={userRegistration}>
          <div>
            <label>First name</label>
            <input type="text" ref={fname} required />
          </div>
          <div>
            <label>Last name</label>
            <input type="text" ref={lname} required />
          </div>
          <div>
            <label>Your E-mail</label>
            <input type="mail" ref={mail} required />
          </div>
          <div>
            <label>Password</label>
            <input type="password" ref={password} required />
          </div>
          <div>
            <label>Confirm password</label>
            <input type="password" ref={rePassword} required />
          </div>
          <div>
            <button>Sign in</button>
          </div>
        </form>
      </Card>
    </div>
  );
}
