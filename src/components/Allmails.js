import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import headers from "./headers.png";
import footers from "./footers.png";
import foot from "./foot.png";
import approval from "./approval.png";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { MDBAnimation } from "mdbreact";
import { useIdleTimer } from "react-idle-timer";
import axios from "axios";

function Allmails(props) {
  const [returnedMail, setReturnedMail] = useState("");
  const [isTimedOut, setIsTimeOut] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      props.history.push("/");
    }
    getTask();
  }, []);

  // IDLE TIMER
  const handleOnIdle = (event) => {
    if (isTimedOut) {
      localStorage.clear();
      props.history.push("/");
    } else {
      setIsTimeOut(true);

      if (window.confirm("Would you want to be logged Out?")) {
        localStorage.clear();
        props.history.push("/");
      } else {
        //remember to pull out this function from the
        //useIdleTimer object below
        if (getElapsedTime() >= 180000) {
          localStorage.clear();
          props.history.push("/");
        }
        reset();
      }
    }
  };

  const handleOnActive = (event) => {};

  const handleOnAction = (e) => {};

  const {
    getRemainingTime,
    getLastActiveTime,
    reset,
    getElapsedTime,
  } = useIdleTimer({
    timeout: 1000 * 60 * 2,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onAction: handleOnAction,
    debounce: 500,
  });

  const homeCall = (e) => {
    e.preventDefault();
    props.history.push("/selectmail");
  };

  //get all mails
  const getTask = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      "https://auto-response-mail-backend.herokuapp.com/mails",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // console.log(response.data.mail);
    const mailDiv = response.data.mail.map((mail) => {
      return (
        <tbody style={{ marginTop: "5%" }}>
          <tr style={{}}>
            {" "}
            <td
              className=""
              style={{
                backgroundColor: "white",
              }}
            >
              <MDBAnimation type="fadeIn">
                {" "}
                <p
                  className="card-text"
                  style={{
                    textAlign: "left",
                    marginLeft: "0%",
                  }}
                >
                  To: {mail.receiverEmail}
                </p>
              </MDBAnimation>
            </td>
            <td
              className="justify-content-center"
              style={{
                backgroundColor: "white",
              }}
            >
              <MDBAnimation type="fadeIn">
                {" "}
                <p
                  style={{
                    textAlign: "center",
                    marginLeft: "0%",
                  }}
                >
                  {mail.mailType}
                </p>
              </MDBAnimation>
            </td>
            <td
              style={{
                backgroundColor: "white",
              }}
            >
              <MDBAnimation type="fadeIn">
                {" "}
                <p
                  style={{
                    textAlign: "center",
                    marginLeft: "0%",
                  }}
                >
                  {mail.date}
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

  const logmeOut = () => {
    props.history.push("/");
  };

  return (
    <div
      className="container-fluid selectmail"
      style={{
        backgroundSize: "cover",
      }}
    >
      <div className="row no-gutters" style={{}}>
        <nav className="clearfix" style={{ position: "fixed", zIndex: "1" }}>
          <Link to="/selectmail">
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
                  id="homeIcon"
                  onClick={homeCall}
                  style={{ color: "white" }}
                >
                  Home
                </a>
              </li>

              <li className="homesf " onClick={logmeOut}>
                <a
                  href="#"
                  style={{
                    color: "white",
                    border: "1px solid #C14C08",
                    padding: "0.4rem",
                    borderRadius: "0.3rem",
                  }}
                  id="home"
                  className="positionWl"
                >
                  LOGOUT
                </a>
              </li>
            </ul>
            {/* <input type="search" className="srmv" /> */}
          </div>
        </nav>
      </div>

      {/* major row */}

      <div className="row d-flex justify-content-center mt-5" style={{}}>
        <div
          className="col-11 col-md-10 table-responsive-md"
          style={{
            fontSize: "1rem",
            borderRadius: "2px",
            color: "black",
            textAlign: "center",
          }}
        >
          <table class="table table-borderless mx-auto mt-3">
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
          </table>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Allmails);
