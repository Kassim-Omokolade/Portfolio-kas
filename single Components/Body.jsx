import React from 'react'
import user from "../src/assets/user.png"

const Body = () => {
  return (
    
      <div className="bg-body-secondary">
        <div className="container " style={{}}>
          <div className="d-flex justify-content-between align-items-center row p-3">
            <div className="col-lg-5 ">
              <h5 className="fs-6">Hey, i'm al-hameen</h5>
              <h1 className="fw-bolder fs-1">
                I develop dynamic and User-Centered Web Applications
              </h1>
              <p className="fs-6">
                My expertise spans both front-end and back-end development,
                enabling me to build comprehensive solutions that meet diverse
                client needs.
              </p>
              <button
                typeof="button"
                className="p-2 rounded border-0 text-white button"
              >
                {" "}
                Get In Touch
              </button>
            </div>

            <div className="col-6 d-none d-lg-block">
              <img src={user} alt="user logo" className="user-pic" />
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default Body