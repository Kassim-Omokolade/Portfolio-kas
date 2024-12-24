import React from "react";
import phone from "../src/assets/phone.png"
import Branding from "../src/assets/Branding.png"
import UI from "../src/assets/ui.png"
import web from "../src/assets/web.png"

const Body2 = () => {
  return (
    <div className="container">
      <div className="body2 flex-column">
        <h5>My Skills</h5>
        <h1>My Expertise</h1>
      </div>
      <div className="d-flex gap-3 mb-5 me-4 row  mx-auto align-items-center justify-content-center">
        <div className="bg-body-secondary rounded p-3 col-lg">
          <img
            src={phone}
            alt="phone-logo"
            style={{ height: "79px", width: "79px" }}
          />
          <h4 className="mb-4 fs-5 fw-bolder">Responsive Design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            accusantium maiores deserunt aut, quos omnis iste cupiditate nobis
            quaerat eum?
          </p>
        </div>
        <div className="bg-body-secondary rounded p-3 col-lg">
          <img
            src={Branding}
            alt="phone-logo"
            style={{ height: "79px", width: "79px" }}
            className="me-4"
          />
          <h4 className="mb-4 fs-5 fw-bolder">Front-End Frameworks</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            explicabo nam itaque tempore ad, deserunt tenetur minima voluptate
            pariatur ex?
          </p>
        </div>
        <div className="bg-body-secondary rounded p-3 col-lg">
          <img
            src={UI}
            alt="phone-logo"
            style={{ height: "79px", width: "79px" }}
          />
          <h4 className="mb-4 fs-5 fw-bolder">Testing and Debugging</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos debitis et beatae ad ducimus facilis eaque repellendus
            libero quos eum!
          </p>
        </div>
        <div className="bg-body-secondary rounded p-3 col-lg">
          <img
            src={web}
            alt="phone-logo"
            style={{ height: "79px", width: "79px" }}
          />
          <h4 className="mb-4 fs-5 fw-bolder">Cloud Services</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos debitis et beatae ad ducimus facilis eaque repellendus
            libero quos eum!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body2;
