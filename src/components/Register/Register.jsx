import React, { useContext, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
const Register = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const conform = form.conform.value;
    console.log(name, email, password, conform);
    setError("");
    if (password !== conform) {
      setError("Password did not match");
      return;
    } else if (password.length < 6) {
      setError("password at least 6 characters");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Register</h1>
      <form onSubmit={handleRegister}>
        <div className="form-control">
          <label htmlFor="name" className="">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id=""
            placeholder="Your Name"
            required
          />
        </div>
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
        <div className="form-control">
          <label htmlFor="password" className="">
            Conform Password
          </label>
          <input
            type="password"
            name="conform"
            className="form-control"
            id=""
            placeholder="Your Valid Email"
            required
          />
        </div>
        <p className="text-error">{error}</p>
        <input
          type="submit"
          className="btn btn-submit "
          value="Register"
        ></input>
      </form>
      <p>
        <small>
          Already have an account?
          <Link to="/login">
            <span className="underline decoration-2 text-[green] underline-offset-4 font-bold mx-2">
              Login
            </span>
          </Link>
        </small>
      </p>
    </div>
  );
};

export default Register;
