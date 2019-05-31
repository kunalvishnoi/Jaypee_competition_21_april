import React from "react";
import { NavLink } from "react-router-dom";

class Side extends React.Component {
  render() {
    return (
      <div
        className="col-md-3 pt-5"
        style={{
          backgroundColor: "#03A9F5",
          height: "70vh",
          borderTopLeftRadius: "30px",
          borderBottomLeftRadius: "30px"
        }}
      >
        <h3 className="text-center">Traveligo</h3>
        <div className="pt-5 text-center">
          <NavLink
            to="/"
            style={{
              textDecoration: "none"
            }}
          >
            <img
              width="25px"
              src="https://kunalvishnoi.github.io/SkillTern_Assignment/search.svg"
            />
            <span className="px-5 text-white">Explore</span>
          </NavLink>
          <br />
          <br />
          <NavLink
            to="/login"
            style={{ textDecoration: "none", paddingLeft: "20px" }}
          >
            <img
              width="20px"
              src="https://kunalvishnoi.github.io/SkillTern_Assignment/home (1).svg"
            />
            <span className="px-5 text-white">Bookings</span>
          </NavLink>
          <br />
          <br />
          <NavLink to="/login" style={{ textDecoration: "none" }}>
            <img
              width="25px"
              src="https://kunalvishnoi.github.io/SkillTern_Assignment/airplane.svg"
            />
            <span className="px-5 text-white">Hotels</span>
          </NavLink>
          <br />
          <br />
          <NavLink to="/login" style={{ textDecoration: "none" }}>
            <img
              width="25px"
              src="https://kunalvishnoi.github.io/SkillTern_Assignment/airplane.svg"
            />
            <span className="px-5 text-white">Food</span>
          </NavLink>
          <br />
          <br />
          <br />
          <NavLink
            to="/login"
            className="btn btn-primary mt-3 px-4"
            style={{
              textDecoration: "none",
              borderRadius: "2rem",
              width: "100px"
            }}
          >
            Login
          </NavLink>
          <br />

          <NavLink
            to="/signup"
            className="btn btn-default px-4 mt-1"
            style={{
              textDecoration: "none",
              borderRadius: "2rem",
              width: "100px"
            }}
          >
            Signup
          </NavLink>
        </div>
      </div>
    );
  }
}
export default Side;
