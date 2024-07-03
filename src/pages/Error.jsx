import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className="content">
          <h2 className="header">404</h2>
          <h4>sorry! page not found</h4>
          <p>
            oops!! it seems like the page you're trying to acess doesn't exist.
            If you belive there's an issue, feel free to report it, we'll look
            into it.{" "}
          </p>
        </div>
        <div className="btns">
          <button className="btn">
            <NavLink to="/" className="nav-link" >return Home</NavLink>
          </button>
          <button className="btn">
            <NavLink to="/contact" className="nav-link" >report problem</NavLink>
          </button>
        </div>
      </section>
    </>
  );
};
