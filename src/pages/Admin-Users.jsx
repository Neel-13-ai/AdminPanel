import { useState, useEffect } from "react";
import { useAuth } from "../store/authStore";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const AdminUsers = () => {
  const { authorizationToken, user } = useAuth();
  const [users, setUsers] = useState([]);

  const getAllUserData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();

      console.log("user", data);

      setUsers(data);
    } catch (error) {
      console.log("error getting users", error);
    }
  };

  // if(user.isAdmin === true){
  //   toast.error("Admin Can't Delete It Self !")
  // }else{
  //   deleteUser();
  // }

  console.log("check admin", user.isAdmin);
  const deleteUser = async (id) => {
    // console.log(id);

    if (user.isAdmin === true && user._id === id) {
      toast.error("Admin Cant't Delete Itself!");
      return;
    }

    const response = await fetch(
      `http://localhost:5000/api/admin/users/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      }
    );

    if (response.ok) {
      toast.success("User Deleted Sucessfully...");
    }
    getAllUserData();
    const data = await response.json();
    console.log("User  After  Delete", data);
  };

  useEffect(() => {
    getAllUserData();
  }, []);

  return (
    <>
      <section className="admin-users-section">
        <div className="heading">
          <h2> Users Data</h2>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser, index) => {
                return (
                  <tr key={index}>
                    <td>{curUser.username}</td>
                    <td>{curUser.email}</td>
                    <td>{curUser.phone}</td>
                    <td className="edit">
                      <Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link>
                    </td>
                    <td>
                      <button onClick={() => deleteUser(curUser._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
