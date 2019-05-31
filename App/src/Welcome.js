import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import Side from "./Side";

class Login extends React.Component {
  render() {
    return (
      <div className="head_contain" style={{ height: "100vh", width: "100vw" }}>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "100vh",
            zIndex: "999"
          }}
        >
          <div
            className="container"
            style={{ height: "70vh", borderRadius: "50px!important" }}
          >
            <div className="row">
              <Side />
              <div
                className="col-md-9 text-center pt-5"
                style={{
                  backgroundColor: "#fff",
                  borderTopRightRadius: "30px",
                  borderBottomRightRadius: "30px"
                }}
              >
                <h1 style={{ color: "#2076FF" }}>
                  Welcome To
                  <br />
                  Tra<span style={{ color: "#E0EEFF" }}>veli</span>go
                </h1>
                <img
                  src="https://kunalvishnoi.github.io/SkillTern_Assignment/airplane-boarding-passes-edit1.jpg"
                  style={{ width: "30vw", height: "40vh" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
