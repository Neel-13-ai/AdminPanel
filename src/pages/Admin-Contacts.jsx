import { useEffect, useState } from "react";
import { useAuth } from "../store/authStore";
import { toast } from "react-toastify";

export const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      console.log("contact data", data);

      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log("error getting contacts", error);
    }
  };

  //   ******************************************************************Delete Contacts

  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data  = await  response.json()

      console.log("data afte after delete",data);

      if (response.ok) {
        toast.success("Contact Deleted Sucessfully.");
        getContactsData();
      } else {
        toast.error("error during deletion ");
      }
    } catch (error) {
      console.log("error during delation", error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <section className="admin-contact-section">
      <h1>Admin Contacts Data</h1>
      <div className="container admin-contact">
        {contactData.map((curEle, index) => {
          const { username, email, message, _id } = curEle;

          return (
            <div key={index} className="main-container grid grid-two-columns">
              <div className="contact-1">
                <p>{curEle.username}</p>
                <p className="email">{curEle.email}</p>
                <p className="message">{curEle.message}</p>
              </div>

              <div className="contact-2">
                <button onClick={() => deleteContact(_id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
