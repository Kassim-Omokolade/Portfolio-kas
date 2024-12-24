import React from "react";
import github from "../assets/github.png";
import Header from "../../single Components/Header";
import image3 from "../assets/image3.png";
import arrow from "../assets/Arrow.png";
import image from "../assets/image.png";
import image1 from "../assets/image1.png";
import stars from "../assets/Stars.png"
import avatar from "../assets/Avatar1.png"
import avatar2 from "../assets/Avatar2.png"
import avatar3 from "../assets/avatar3.png"
import Footer from "../../single Components/Footer";



const Portfolio = () => {
  return (
    <div>
      <Header />
      <div className="bg-body-secondar pt-4">
        <div className="container justify-content-between d-flex  ">
          <div>
            <h4>Recent Projects</h4>
            <h1>My Portfolio</h1>
          </div>
          <div>
            <a href="https://github.com/dashboard">
              {" "}
              <button className="button border-0 rounded p-2 text-white">
                {" "}
                <img src={github} alt="logo" /> Visit My GitHub{" "}
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between  align-items-center container port gap-3 flex-wrap">
        <div
          className="rounded border border shadow  "
          style={{ width: "350px" }}
        >
          <img src={image3} alt="logo" style={{ width: "350px" }} />
          <div className="p-3">
            <h4>Ahuse</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              dignissimos reprehenderit officia quia expedita inventore.
            </p>
            <h6>
              View website{" "}
              <img
                src={arrow}
                alt=""
                className="ms-2"
                style={{ width: "16px", height: "16px" }}
              />
            </h6>
          </div>
        </div>
        <div
          className="rounded border border shadow"
          style={{ width: "350px" }}
        >
          <img src={image} alt="logo" style={{ width: "350px" }} />
          <div className="p-3">
            <h4>App Dashboard</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              dignissimos reprehenderit officia quia expedita inventore.
            </p>
            <h6 className="">
              View Project{" "}
              <img
                src={arrow}
                alt=""
                className="ms-2"
                style={{ width: "16px", height: "16px" }}
              />
            </h6>
          </div>
        </div>
        <div
          className="rounded border border shadow"
          style={{ width: "350px" }}
        >
          <img src={image1} alt="logo" style={{ width: "350px" }} />
          <div className="p-3">
            <h4>Easy Rent</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              dignissimos reprehenderit officia quia expedita inventore.
            </p>
            <h6>
              View website{" "}
              <img
                src={arrow}
                alt=""
                className="ms-2"
                style={{ width: "16px", height: "16px" }}
              />
            </h6>
          </div>
        </div>
      </div>

      <div className="bg-body-secondary">
        <div className="container pt-5 pb-5 ">
          <div className="mb-5">
            <h5>Clients Feedback</h5>
            <h2>Customer testimonials</h2>
          </div>
          <div className="d-flex  justify-content-between  gap-3 row mx-4">
            <div className="border border-info rounded p-3 col-lg ">
              <img
                src={stars}
                alt=""
                style={{ width: "120px", height: "27px" }}
                className="mb-4"
              />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique at inventore officia debitis dolorum.
              </p>
              <div className="d-flex ">
                <img
                  src={avatar}
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="ms-2">
                  <h6>Dianne Russell</h6>
                  <p>Starbucks</p>
                </div>
              </div>
            </div>
            <div className="border border-info rounded p-3 col-lg ">
              <img
                src={stars}
                alt=""
                style={{ width: "120px", height: "27px" }}
                className="mb-4"
              />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique at inventore officia debitis dolorum.
              </p>
              <div className="d-flex">
                <img
                  src={avatar2}
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="ms-2">
                  <h6>Kristin Watson</h6>
                  <p>Louis Vuitton</p>
                </div>
              </div>
            </div>
            <div className="border border-info rounded p-3 col-lg">
              <img
                src={stars}
                alt=""
                style={{ width: "120px", height: "27px" }}
                className="mb-4"
              />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Similique at inventore officia debitis dolorum.
              </p>
              <div className="d-flex">
                <img
                  src={avatar3}
                  alt=""
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="ms-2">
                  <h6>Kathryn Murphy</h6>
                  <p>McDonald's</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container col-lg-6 port" style={{ }} >
        <div className="text-center mb-5">
          <h5>Get In Touch</h5>
          <h1>Contact me</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>
        <form>
          <div className="row  justify-content-center gap-3 mb-3">
            <div className="col-lg">
              <label htmlFor="name" className="form-label">
                First name
              </label>
              <input type="text" className="form-control w-100" id="name" />
            </div>

            <div className="col-lg">
              <label htmlFor="last" className="form-label">
                Last name
              </label>
              <input type="text" className="form-control w-100" id="last" />
            </div>
          </div>

          <div className="row  justify-content-center gap-3 mb-3">
            <div className="col-lg">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control w-100" id="name" />
            </div>

            <div className="col-lg">
              <label htmlFor="phone" className="form-label w-100">
                Phone Number
              </label>
              <input type="tel" className="form-control" id="last" />
            </div>
          </div>
          <div className=" mb-2">
            <label htmlFor="message" className="mb-2">Message</label> <br />
            <textarea
              id="message"
              placeholder="Type your messages..."
              rows={5}
              className="rounded p-2 w-100 h-75"
            ></textarea>
          </div>
          <div className="d-flex  ">
            <input type="checkbox" id="terms" />
            <label for="terms" className="ms-2">I accept the terms</label>
          </div>
          <button typeof="submit" className="button mt-2 border-0 rounded w-100 p-2 text-white"> Submit </button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Portfolio;
