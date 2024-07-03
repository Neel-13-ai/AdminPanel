export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-columns ">
            <div className="hero-content">
              <p>We Are The World best IT company</p>
              <h1>Welecome To WebDev</h1>
              <p>
                Are you ready to take your business t o the next level with
                citting-edge It solutions? Look no further! At WebDev , we
                specialze in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn secondray-btn">Connect Now</button>
                </a>
                <a href="/services">
                  <button className="btn secondray-btn">Learn More</button>
                </a>
              </div>
            </div>
            <div className="hero-images">
              <img src="../public/images/1.png" alt="image is loading" />
            </div>
          </div>
        </section>

        <section className="section-analytics">
          <div className=" container grid grid-four-cols">
            <div className="div1">
              <h2>50+</h2>
              <p>registered copmpany</p>
            </div>
            <div className="div1">
              <h2>100,00+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="div1">
              <h2>500+</h2>
              <p>Well known Developers</p>
            </div>
            <div className="div1">
              <h2>24/7</h2>
              <p>Services</p>
            </div>
          </div>
        </section>

        {/* -------------------------sction-3  */}
        <section className="section-hero">
          <div className="container grid grid-two-columns ">
            <div className="hero-images">
              <img
                src="../public/images/1.png"
                alt="image is loading"
              />
            </div>
            <div className="hero-content">
              <p>We Are Hear To Help you</p>
              <h1>Welecome To WebDev</h1>
              <p>
                Ready to take first step towards a more and secure IT
                infrastructure ? Contact us today for a feww consultuant and
                let's discuss how WebDev can help your business thrive in
                degital age.
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
          </div>
        </section>
        {/* -------------------------sction-3  */}
      </main>
    </>
  );
};
