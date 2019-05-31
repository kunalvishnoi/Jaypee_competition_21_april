import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Person extends Component {
  render() {
    const styles = {
      color: "#fff",
      textDecoration: "none",
      backgroundColor: "#007bff",
      padding: "10px"
    };
    const style = {
      textAlign: "center"
    };
    return (
      <div style={style}>
        <h1>Hi {this.props.match.params.name}</h1>
        <NavLink className="btn btn-primary" style={styles} to="/">
          Back
        </NavLink>
      </div>
    );
  }
}
export default Person;
