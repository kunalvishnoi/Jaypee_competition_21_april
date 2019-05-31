import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import Side from "./Side";
import Start from "./Start";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      pass: "",
      aunthenticated: ""
    };
  }
  componentDidMount() {
    localStorage.setItem("authenticated", false);
  }
  handleChange = e => {
    const elem = e.target;
    this.setState({
      [elem.name]: elem.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("authenticated", true);
  };
  render() {
    const { username, password } = this.state;
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
                className="col-md-4 text-center pt-5"
                style={{ backgroundColor: "#fff" }}
              >
                <h3 style={{ color: "#E0EEFF" }} className="pt-5">
                  Login
                </h3>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="username"
                    className="input-group-text mx-auto mt-5"
                    placeholder="Username"
                    onChange={this.handleChange}
                    value={this.state.user}
                  />
                  <input
                    type="text"
                    name="password"
                    className="input-group-text mx-auto mt-5"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary mt-5 px-4"
                    style={{ textDecoration: "none", borderRadius: "2rem" }}
                  >
                    Login
                  </button>
                </form>
              </div>
              <div
                className="col-md-5 text-center pt-5"
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
