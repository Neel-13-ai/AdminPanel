import { useState } from "react";
import { useAuth } from "../store/authStore";
import { toast } from "react-toastify";

const defaultContactForm = {
  username: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [contact, setContact] = useState(defaultContactForm);

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        toast.success("Message send Sucessfully.")
        setContact(defaultContactForm);

        const data = await response.json(data);
        console.log(data);
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-contact">
            <div className="container grid grid-two-columns  ">
              <div className="registration-image">
                <img
                  src="/images/6.png"
                  alt="image is loading"
                  width=""
                  height=""
                />
              </div>
              <div className="Contact-form">
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
                      value={contact.username}
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
                      value={contact.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="message">Meassage:</label>
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      cols="55"
                      required
                      autoComplete="off"
                      placeholder="What can we help with? "
                      onChange={handleInput}
                      value={contact.message}
                    />
                  </div>
                  <div className="btn-div">
                    <button type="submit" className=" btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241191.93493625155!2d72.61343334365661!3d19.1679299!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c95f75ddffd7%3A0x9a4198d3529e7586!2sWebDev%20-%20Website%20Development%20Company!5e0!3m2!1sen!2sin!4v1719190240651!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </main>
      </section>
    </>
  );
};
