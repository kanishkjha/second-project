import React, { useContext } from "react";
import { SignupContext } from "../contexts/SignupModalState";
import "../styles/SignupModal.css";

export default function SignupModal() {
  const { state, dispatch } = useContext(SignupContext);
  console.log(state);

  if (state) {
    return (
      <div className="overlay">
        <div className="modal-content">
          <div onClick={() => dispatch({ type: "HIDE" })}>X</div>
          <div>
            <h2>Welcome</h2>
            <h4>Login using your credentials</h4>
            <form action="">
              <input type="email" name="email" placeholder="email" />
              <input type="password" name="password" />

              <span>Forgot Password?</span>
            </form>
            <button>Login</button>

            <div>
              <h2>New to NotOut60?</h2>
              <p>
                Create your own profile and be visible to the top recruiters.
              </p>
              <button>Register with us</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
