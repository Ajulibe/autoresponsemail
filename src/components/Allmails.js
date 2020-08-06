import React, { useState } from "react";
import logo from "./logo.svg";
import headers from "./headers.png";
import footers from "./footers.png";
import foot from "./foot.png";
import approval from "./approval.png";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { MDBAnimation } from "mdbreact";
import axios from "axios";

function Allmails(props) {
  const [returnedMail, setReturnedMail] = useState("");

  const homeCall = (e) => {
    e.preventDefault();
    props.history.push("/selectmail");
  };

  //get all mails
  const getTask = async () => {
    // get request
    const response = await axios.get("");

    // console.log(response.data);
    const mailDiv = response.data.map((task) => {
      return (
        <tbody style={{ marginTop: "5%" }}>
          <tr style={{ marginTop: "8%" }}>
            {" "}
            <td
              className="justify-content-center"
              style={{
                height: "110%",
                backgroundColor: "#263145",
              }}
            >
              <MDBAnimation type="fadeIn">
                {" "}
                <p
                  className="card-text"
                  style={{
                    textAlign: "center",
                    marginLeft: "0%",
                    color: "white",
                  }}
                >
                  <button
                    className="btn"
                    style={{
                      textAlign: "center",
                      marginLeft: "0%",
                      color: "white",
                      border: "1px solid grey",
                    }}
                  >
                    {/* <b className="fontStuff4">{task.title}</b> */}
                  </button>
                </p>
              </MDBAnimation>
            </td>
            {/* //staff in charge */}
            <td
              className="justify-content-center"
              style={{
                height: "110%",
                backgroundColor: "#263145",
              }}
            >
              <MDBAnimation type="fadeIn">
                {" "}
                <p
                  style={{
                    textAlign: "center",
                    marginLeft: "0%",
                    color: "white",
                  }}
                >
                  {/* <b className="fontStuff4">{task.staff}</b> */}
                </p>
              </MDBAnimation>
            </td>
            {/* //delivery date in charge */}
            <td
              style={{
                height: "110%",
                backgroundColor: "#263145",
              }}
            >
              <MDBAnimation type="fadeIn">
                {" "}
                <p
                  style={{
                    textAlign: "center",
                    marginLeft: "0%",
                    color: "white",
                  }}
                >
                  {/* <b className="fontStuff4">{task.selecteddate}</b> */}
                </p>
              </MDBAnimation>
            </td>
          </tr>
        </tbody>
      );
    });

    refreshUser(mailDiv);
  };

  //set the state for returned mails

  const refreshUser = (mailDiv) => {
    setReturnedMail(mailDiv);
  };

  return (
    <div className="container-fluid selectmail" style={{ height: "100vh" }}>
      <div className="row no-gutters" style={{}}>
        <nav className="clearfix">
          <Link
            onClick={() => {
              window.location.reload();
            }}
          >
            {" "}
            <div
              style={{
                float: "left",
                marginLeft: "1rem",
                marginTop: "1rem",
              }}
              className="buttons2"
            >
              <i
                className="fa fa-envelope-o"
                id="mailLogo"
                style={{
                  color: "white",
                  backgroundColor: "#2f2f2f",
                  float: "left",
                  marginRight: "1rem",
                  marginTop: "0.3rem",
                }}
              ></i>

              <div
                className="GtDiv reloadPg"
                style={{
                  boxSizing: "border-box",
                  float: "left",
                  height: "1rem",
                  color: "white",
                  fontSize: "1rem",
                  textAlign: "left",
                }}
              >
                GTBank API Connect <br />
                Email Service Platform
              </div>
            </div>
          </Link>
          <div className="buttons">
            <ul className="navigation">
              <li className="homesf ">
                <a
                  href="#"
                  className="homeRed"
                  id="homeIcon"
                  onClick={homeCall}
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" id="mailcolor ">
                  All Mails
                </a>
              </li>
            </ul>
            <input type="search" className="srmv" />
          </div>
        </nav>
      </div>

      {/* major row */}

      <div className="row d-flex justify-content-center mt-5" style={{}}>
        <div
          className="col-11 col-md-10 "
          style={{
            fontSize: "1rem",
            borderRadius: "2px",
            color: "black",
            textAlign: "center",
            border: "0",
          }}
        >
          <table class="table table-borderless table-responsive-md mt-3">
            <thead>
              <tr>
                <td>
                  <button
                    className="btn btn-small"
                    style={{
                      fontSize: "1rem",
                      backgroundColor: "white",
                      width: "100%",
                    }}
                  >
                    All Emails
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-small"
                    style={{
                      fontSize: "1rem",
                      backgroundColor: "white",
                      width: "100%",
                    }}
                  >
                    Type of Mail
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-small"
                    style={{
                      fontSize: "1rem",
                      backgroundColor: "white",
                      width: "100%",
                    }}
                  >
                    Date
                  </button>
                </td>
              </tr>
            </thead>
            {returnedMail}
            <tbody>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Allmails);
