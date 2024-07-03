import { useAuth } from "../store/authStore";

export const Services = () => {
  const { services } = useAuth();

  return (
    <>
      <section className="section-services">
        <h1 className="main-heading">Services</h1>
        <div className="container ">
          <div className=" container grid grid-three-columns  ">
            {Array.isArray(services) &&
              services.map((Ele, index) => {
                const { provider, service, price, description } = Ele;

                return (
                  <div className="card" key={index}>
                    <div className="card-image">
                      <img src="/images/services.png" alt="services loading" />
                    </div>
                    <div className="card-details">
                      <div className=" main">
                        <p>{provider}</p>
                        <p>{price}</p>
                      </div>
                      <h2>{service}</h2>
                      <p>{description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};
