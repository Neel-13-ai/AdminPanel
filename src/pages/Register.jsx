import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/authStore";
import { toast } from "react-toastify";

export const Register = () => {
  const navigate = new useNavigate();

  const { storeTokenInLS } = useAuth();

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
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
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      // console.log(response);

      const res_data = await response.json();
      console.log("response from server", res_data.extraDetails);
      if (response.ok) {
        toast.success("Rgister in Sucessfully.");
        setUser({ username: "", email: "", phone: "", password: "" });

        storeTokenInLS(res_data.token);

        // localStorage.setItem("token",res_data.token)

        navigate("/login");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.error("register", error);
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-columns  ">
              <div className="registration-image">
                <img
                  src="../public/images/2.png"
                  alt="image is loading"
                  width=""
                  height=""
                />
              </div>
              <div className="register-form">
                <h1 className="main-heading">Regisrtation Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username:</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Enter Your UserName"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Your Email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone:</label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="Enter Your PhoneNumber"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password:</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter Your Password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="btn-div">
                    <button type="submit" className=" btn">
                      Register Now
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
