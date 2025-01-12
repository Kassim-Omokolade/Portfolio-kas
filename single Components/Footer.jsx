import React from "react";
import footer from "../src/assets/footer.png";
import facebook from "../src/assets/Facebook.png";
import Instagram from "../src/assets/Instagram.png";
import LinkedIn from "../src/assets/LinkedIn.png";
import Vector from "../src/assets/Vector.png";
const Footer = () => {
  return (
    <div className="bg-body-secondary mt-5 align-items-center">
      <div className="container pt-5">
        <div className=" d-lg-flex justify-content-between align-items-center mb-3  ">
          <div className="col-2  ">
            <img src={footer} alt="logo" />
          </div>

          <div className=" col-12 col-md-5 d-lg-flex gap-3 ms-md-6 mt-4">
            <h6 className="fs-6 ">Home</h6>
            <h6 className="fs-6">Portfolio</h6>
            <h6 className="fs-6">About me</h6>
            <h6 className="fs-6">Contact</h6>
            <h6 className="fs-6">Testimonial</h6>
          </div>
          <div className="col-12 col-md-2 d-flex justify-content-between">
            <img
              src={facebook}
              alt="logo"
              style={{ width: "32px", height: "32px" }}
              className="me-2"
            />
            <img
              src={Instagram}
              alt="logo"
              style={{ width: "32px", height: "32px" }}
              className="me-2"
            />
            <img
              src={Vector}
              alt="logo"
              style={{ width: "32px", height: "32px" }}
              className="me-2"
            />
            <img
              src={LinkedIn}
              alt="logo"
              style={{ width: "32px", height: "32px" }}
              className="me-2"
            />
          </div>
        </div>
        <hr className="container" />
        <div
          className="d-flex flex-column flex-md-row justify-content-between mt-4 "
          style={{ height: "70px" }}
        >
          <div className="mb-1">
            <h6>Made with 💖 by Kassim</h6>
          </div>
          <div className="d-flex gap-3 ">
            <h6>Privacy Policy</h6>
            <h6>Terms of Service</h6>
            <h6>Cookies Settings</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
