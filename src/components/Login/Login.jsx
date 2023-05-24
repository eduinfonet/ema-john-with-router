import React, { useContext } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id=""
            placeholder="Your Valid Email"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id=""
            placeholder="Your Valid Email"
            required
          />
        </div>

        <input type="submit" className="btn btn-submit " value="Login"></input>
      </form>
      <p>
        <small>
          New to Ema-John?{" "}
          <Link to="/register">
            <span className="underline decoration-2 text-[green] underline-offset-4 font-bold mx-2">
              Register
            </span>
          </Link>
        </small>
      </p>
    </div>
  );
};

export default Login;
