import React from 'react'
import About from "../src/assets/AboutMe.png"
const Body3 = () => {
  return (
    <div className="container">
      <div className=" d-flex align-items-center justify-content-between gap-5 row  ">
        <div className="col-lg-4">
          <img
            src={About}
            alt="logo"
            style={{ width: "500px", height: "100%" }}
            className="d-none d-lg-block "
          />
        </div>
        <div className="col-lg-6">
          <h4>About</h4>
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius faucibus massa sollicitudin amet augue. Nibh metus a semper
            purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
            scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit
            turpis pretium eget maecenas. Vestibulum dolor mattis consectetur
            eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a,
            euismod risus r.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius faucibus massa sollicitudin amet augue. Nibh metus a semper
            purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
            scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit
            turpis pretium eget maecenas. Vestibulum dolor mattis consectetur
            eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a,
            euismod risus r.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body3