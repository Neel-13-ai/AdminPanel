import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useAuth } from "../store/authStore";
import { toast } from "react-toastify";
import { AdminLayout } from "../Layouts/Admin-Layout";

export const AdminUpdate = () => {
  const { authorizationToken } = useAuth();
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  console.log("single user params", params);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = await response.json();
      console.log(`single users data ${data}`);
      setData(data);
    } catch (error) {
      console.log("error getting user data", error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("Data Update Successfully.");
      } else {
        toast.error("Error Updation !");
      }
    } catch (error) {
      console.log("error during updation");
    }
  };

  return (
    <>
      <div className="admin-section-form">
        <h1 className="main-heading">Update UserData</h1>
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
              value={data.username}
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
              value={data.email}
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
              value={data.phone}
              onChange={handleInput}
            />
          </div>

          <div className="btn-div">
            <button type="submit" className=" btn">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
