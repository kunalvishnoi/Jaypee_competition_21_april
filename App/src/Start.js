import React from "react";
import Side from "./Side";
class Start extends React.Component {
  render() {
    const detail = [
      {
        id: 1,
        place: "Delhi India",
        date: "21 April 2019"
      },
      {
        id: 2,
        place: "Delhi India",
        date: "21 April 2019"
      },
      {
        id: 3,
        name: "Delhi India",
        date: "21 April 2019"
      }
    ];
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
                <div>
                  <h1 className="find">Find Ticket</h1>
                  <div className="flight-tab">
                    <div className="persent-one">
                      <i className="fa fa-map-marker" aria-hidden="true" />
                      <input
                        type="text"
                        name="dep"
                        className="textboxstyle"
                        id="dep"
                        placeholder="From"
                      />
                    </div>
                    <div className="persent-one">
                      <i className="fa fa-map-marker" aria-hidden="true" />
                      <input
                        type="text"
                        name="dep"
                        className="textboxstyle"
                        id="arival"
                        placeholder="Destination"
                      />
                    </div>
                    <div className="persent-one less-per">
                      <i className="fa fa-calendar" aria-hidden="true" />
                      <input
                        type="text"
                        name="dep"
                        className="textboxstyle"
                        id="from-date1"
                        placeholder="Departure"
                      />
                    </div>
                    <div className="persent-one less-per">
                      <i className="fa fa-calendar" aria-hidden="true" />
                      <input
                        type="text"
                        name="dep"
                        className="textboxstyle"
                        id="to-date"
                        placeholder="Return"
                      />
                    </div>
                    <div className="persent-one less-btn">
                      <input
                        type="Submit"
                        name="submit"
                        value="Search"
                        className="btn btn-info cst-btn"
                        id="srch"
                      />
                    </div>
                  </div>

                  <div className="container mt-5 pt-5">
                    {detail.map(data => {
                      return (
                        <div className="row row_new" key={data.id}>
                          <div className="col-sm">{data.date}</div>
                          <div className="col-sm">{data.name}</div>
                          <div className="col-sm" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Start;
