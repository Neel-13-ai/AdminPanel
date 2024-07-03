import {NavLink , Navigate, Outlet } from "react-router-dom";
import { HiUsers } from "react-icons/hi";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { MdDesignServices,  } from "react-icons/md";
import { useAuth } from "../store/authStore";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (!user.isAdmin) {
    console.log("user navigation to home page");
    return <Navigate to="/" />;
  }

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                  <HiUsers />
                  users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">
                  <RiContactsBook2Fill />
                  contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/services">
                  <MdDesignServices />
                  services
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <IoHome />
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
