import { useAuth } from "../store/authStore";

export const About = () => {
  const {user} = useAuth();

  return (
    <main>
      <section className="section-about">
        <div className="container grid grid-two-two-columns">
          <div className="about-content">
            <p>Welecome,{user ?`${user.username} to our website.`:`to our website`}</p>
            <br />
            <h1>Why Choose Us?</h1>
            <br />
            <p>
              Experties:Our team consist if exprienced IT professionals Who are
              passinoate about up-to-date with the indusrty trends.
            </p>
            <br />
            <br />
            <p>
              Customization:We userstand that every business is unique.That's
              wgy we celebrate solution that are tolrated to you specific need
              and goals.
            </p>
            <br />
            <br />
            <p>
              Customer:Centric Approach. We prioritize your statisfaction and
              provide top-notch supppourt to adress your IT concerns.
            </p>
            <br />
            <br />
            <p>
              Affordability:We offer competitive pricing without compromising on
              the quality of our services.
            </p>
            <br />
            <br />
            <p>
              Reliability:count on us to be there when your need us. We're
              committed to ensuring your IT environment is reliable and
              avialable for24/7
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn ">Connect Now</button>
              </a>
              <a href="/services">
                <button className="btn ">Learn More</button>
              </a>
            </div>
          </div>
          <div className="about-image">
            <img src="../images/1.png" alt="image is loading" />
          </div>
        </div>
      </section>
    </main>
  );
};
