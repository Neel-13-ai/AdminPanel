import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/authStore";
import {toast} from 'react-toastify'

export const Login = () => {
  const navigate = new useNavigate();

  const { storeTokenInLS } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        toast.success("Log in Sucessfully.");
        storeTokenInLS(res_data.token);
        // localStorage.setItem("token",res_data.token)

        navigate("/");
      } else {
        toast.error (res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
      console.log(response);
    } catch (error) {
      console.error("login", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two-columns ">
              <div className="login-image">
                <img
                  src="../public/images/2.png"
                  alt="image is loading"
                  height=""
                  width=""
                />
              </div>
              <div className="login-form">
                <h1 className="main-heading">Login Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email:</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="off"
                      placeholder="Enter Your Email"
                      onChange={handleInput}
                      value={user.email}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password:</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      required
                      autoComplete="off"
                      placeholder="Enter Your Password"
                      onChange={handleInput}
                      value={user.password}
                    />
                  </div>
                  <div className="btn-div">
                    <button type="submit" className="btn ">
                      Log in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
