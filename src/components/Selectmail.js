import React, { useState } from "react";
import logo from "./logo.svg";
import headers from "./headers.png";
import footers from "./footers.png";
import foot from "./foot.png";
import approval from "./approval.png";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

function Selectmail() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const usernamehandleChange = (event) => {
    setUsername(event.target.value);
  };

  const emailhandleChange = (event) => {
    setEmail(event.target.value);
  };

  const sendApprovalMail = () => {
    console.log(username);
    alert("Approval Mail Sent");
    window.location.reload();
  };

  const sendAutoresponseMail = () => {
    console.log(username);
    alert("Auto Response Mail Sent");
    window.location.reload();
  };

  const sendInvitationMail = () => {
    console.log(username);
    alert("Invitation Mail Sent");
    window.location.reload();
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
              <li className="homesf">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">All Mails</a>
              </li>
            </ul>
            <input type="search" className="srmv" />
          </div>
        </nav>
      </div>

      {/* major row */}

      <div className="row d-flex logoTop" style={{ marginLeft: "70%" }}>
        <div className="col-12 col-md-12 ">
          {" "}
          <img
            src={logo}
            className="gtlogs"
            style={{
              width: "5rem",
              marginTop: "13%",
            }}
          ></img>
        </div>
      </div>
      {/* second column */}
      <div
        className="col-12 col-md-12 d-flex justify-content-md-center justify-content-center"
        style={{}}
      >
        <form
          style={{
            marginTop: "0%",
          }}
          className="formUp"
        >
          <label style={{ fontSize: "1.2rem" }}>Developer's Details</label>

          <div className="form-group">
            <div className="input-group">
              <div
                className="input-group-addon"
                style={{ borderRight: "0", borderBottomLeftRadius: "0" }}
              >
                @
              </div>
              <input
                className="form-control"
                name="username"
                type="text"
                value={username}
                placeholder="Username"
                onChange={usernamehandleChange}
                style={{
                  borderLeft: "0",
                  borderBottomRightRadius: "0",
                  fontSize: "1rem",
                }}
              />
            </div>
          </div>
          <div className="form-group ">
            <div className="input-group">
              <div
                className="input-group-addon"
                style={{ borderRight: "0", borderTopLeftRadius: "0" }}
              >
                <i className="fa fa-envelope-o"></i>
              </div>
              <input
                className="form-control"
                id="email"
                name="email"
                type="text"
                value={email}
                placeholder="johnjane@example.com"
                onChange={emailhandleChange}
                style={{
                  borderLeft: "0",
                  fontSize: "1rem",
                  borderTopRightRadius: "0",
                }}
              />
            </div>
          </div>
          {/* <div
            className="row d-flex justify-content-between align-items-md-center"
            style={{ padding: "0px" }}
          >
            <div className="col-md-4" style={{ padding: "0px" }}>
              <div className="row d-flex justify-content-md-left" style={{}}>
                <div className="col-12 small-button">
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    className="btn btn-primary btn-sm orange buttonwidth"
                    style={{
                      textAlign: "center",
                      fontSize: "0.9rem",
                    }}
                  >
                    Auto Response
                  </button> */}

          {/* <div
                    className="modal fade"
                    id="exampleModalCenter"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="exampleModalCenterTitle"
                          >
                            EMAIL PREVIEW
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div
                            className="row d-flex justify-content-md-center previewDiv"
                            style={{}}
                          >
                            <div className="col-12 col-md-8">
                              <img
                                src={headers}
                                style={{ maxWidth: "100%" }}
                                className="previewImg"
                              ></img>
                            </div>
                            <div
                              className="col-12 col-md-8"
                              style={{
                                fontSize: "1rem",
                                textAlign: "left",
                              }}
                            >
                              <p>Hello {username} </p>
                              Thank you for you interest in GTBank APIs. We are
                              currently working on some finishing touches before
                              our final launch of the developer portal. This
                              would be done as soon as possible. Kindly exercise
                              patience as we put things in place.
                              <br />
                              <br />
                              We will inform you when the developer portal is
                              finally up for use.
                              <br />
                              <br />
                              Thank you
                            </div>
                            <br />
                            <div className="col-12 col-md-8 mt-2">
                              <img
                                src={footers}
                                style={{ maxWidth: "100%" }}
                                className="previewImg"
                              ></img>
                            </div>
                          </div>
                        </div>

                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn  white"
                            data-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="btn  orange"
                            onClick={sendAutoresponseMail}
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> */}
          {/* </div>{" "}
              </div>
            </div>
            <br />
            <br /> */}
          {/* <div
              className="col-md-4 deletePad"
              style={{
                paddingRight: "0.5rem",
              }}
            >
               <div className="row d-flex justify-content-md-center">
                <div className="col-12  small-button">
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalCenter2"
                    className="btn btn-primary btn-sm orange buttonwidth"
                    style={{
                      fontSize: "0.9rem",
                    }}
                  >
                    Invitation
                  </button>
                  
                  <div
                    className="modal fade"
                    id="exampleModalCenter2"
                   
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle2"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="exampleModalCenterTitle2"
                          >
                            Modal title
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          {" "}
                          <div className="modal-body">
                            <div
                              className="row d-flex justify-content-md-center previewDiv"
                              style={{}}
                            >
                              <div className="col-12 col-md-8">
                                <img
                                  src={headers}
                                  style={{ maxWidth: "100%" }}
                                  className="previewImg"
                                ></img>
                              </div>
                              <div
                                className="col-12 col-md-8"
                                style={{
                                  fontSize: "1rem",
                                  textAlign: "left",
                                }}
                                
                              >
                                <p>Dear {username} </p>
                                <span>
                                  GTBank API developer portal is built to allow
                                  third party developers integrate with our APIs
                                  easily.
                                </span>
                                <br />
                                <br />
                                Take advantage of our API offerings grouped into
                                Payments,Accounts,Identity and build best in
                                class products and solutions that speak to your
                                customers' needs.
                                <br />
                                <br />
                                We are hereby specially inviting you and your
                                team to join the pilot test of the sandbox
                                before we launch. Kindly share the email address
                                of the person/persons to test the APIs so we can
                                approve after an account has been created.
                              </div>
                              <br />
                              <div className="col-12 col-md-8 mt-2">
                                <img
                                  src={foot}
                                  style={{ maxWidth: "100%" }}
                                  className="previewImg"
                                ></img>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn  white"
                            data-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="btn  orange"
                            onClick={sendInvitationMail}
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            </div>*/}
          {/* <br />
            <br /> */}
          {/* <div className="col-md-4" style={{ padding: "0px" }}>
              <div className="row d-flex justify-content-md-right">
                <div className="col-12  small-button">
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalCenter3"
                    className="btn btn-primary btn-sm orange buttonwidth"
                    style={{
                      fontSize: "0.9rem",
                    }}
                  >
                    Approval
                  </button>
                  <div
                    className="modal fade"
                    id="exampleModalCenter3"
                  
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle3"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="exampleModalCenterTitle3"
                          >
                            Modal title
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn  white"
                            data-dismiss="modal"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="btn  orange"
                            onClick={sendApprovalMail}
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          {/* // </div> */}
        </form>
      </div>
      {/* newstuffffffffffff */}
      <br />
      <br />
      <div
        className="row d-flex w-50 justify-content-center mx-auto justify-content-md-between align-content-around"
        // style={{ border: "1px solid black" }}
      >
        <div className="col-7 col-md-3 d-flex align-self-center justify-content-center px-0 mt-md-5">
          <button
            type="button"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            className="btn btn-primary  btn-sm orange"
            style={{
              fontSize: "0.9rem",
              width: "100%",
            }}
          >
            Auto Response
          </button>
          {/* modal */}
          <div
            className="modal fade"
            id="exampleModalCenter"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">
                    EMAIL PREVIEW
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div
                    className="row d-flex justify-content-md-center previewDiv"
                    style={{}}
                  >
                    <div className="col-12 col-md-8">
                      <img
                        src={headers}
                        style={{ maxWidth: "100%" }}
                        className="previewImg"
                      ></img>
                    </div>
                    <div
                      className="col-12 col-md-8"
                      style={{
                        fontSize: "1rem",
                        textAlign: "left",
                      }}
                    >
                      <p>Hello {username} </p>
                      <div style={{ textAlign: "justify" }}>
                        Thank you for you interest in GTBank APIs. We are
                        currently working on some finishing touches before our
                        final launch of the developer portal. This would be done
                        as soon as possible. Kindly exercise patience as we put
                        things in place.
                        <br />
                        <br />
                        We will inform you when the developer portal is finally
                        up for use.
                        <br />
                        <br />
                        Thank you
                      </div>
                    </div>
                    <br />
                    <div className="col-12 col-md-8 mt-2">
                      <img
                        src={footers}
                        style={{ maxWidth: "100%" }}
                        className="previewImg"
                      ></img>
                    </div>
                  </div>
                </div>

                <div className="modal-footer d-fex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-sm white"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm  orange"
                    onClick={sendAutoresponseMail}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second column */}
        <div className="col-7 col-md-3 d-flex align-self-center justify-content-center mt-3 mt-md-5 px-0">
          <button
            type="button"
            data-toggle="modal"
            data-target="#exampleModalCenter2"
            className="btn btn-primary btn-sm orange"
            style={{
              fontSize: "0.9rem",
              width: "100%",
            }}
          >
            Invitation
          </button>
          <div
            className="modal fade"
            id="exampleModalCenter2"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle2"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle2">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {" "}
                  <div className="modal-body">
                    <div
                      className="row d-flex justify-content-md-center previewDiv"
                      style={{}}
                    >
                      <div className="col-12 col-md-8">
                        <img
                          src={headers}
                          style={{ maxWidth: "100%" }}
                          className="previewImg"
                        ></img>
                      </div>
                      <div
                        className="col-12 col-md-8"
                        style={{
                          fontSize: "1rem",
                          textAlign: "left",
                        }}
                      >
                        <p>Dear {username} </p>
                        <div style={{ textAlign: "justify" }}>
                          GTBank API developer portal is built to allow third
                          party developers integrate with our APIs easily.
                          <br />
                          <br />
                          Take advantage of our API offerings grouped into
                          Payments,Accounts,Identity and build best in class
                          products and solutions that speak to your customers'
                          needs.
                          <br />
                          <br />
                          We are hereby specially inviting you and your team to
                          join the pilot test of the sandbox before we launch.
                          Kindly share the email address of the person/persons
                          to test the APIs so we can approve after an account
                          has been created.
                        </div>
                      </div>
                      <br />
                      <div className="col-12 col-md-8 mt-2">
                        <img
                          src={foot}
                          style={{ maxWidth: "100%" }}
                          className="previewImg"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer d-fex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-sm white"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm  orange"
                    onClick={sendInvitationMail}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-7 col-md-3 d-flex align-self-center justify-content-center mt-3 mt-md-5 px-0">
          <button
            type="button"
            data-toggle="modal"
            data-target="#exampleModalCenter3"
            className="btn btn-primary btn-sm  orange"
            style={{
              fontSize: "0.9rem",
              width: "100%",
            }}
          >
            Approval
          </button>
          <div
            className="modal fade"
            id="exampleModalCenter3"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle3"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle3">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {" "}
                  <div className="modal-body">
                    <div
                      className="row d-flex justify-content-md-center previewDiv"
                      style={{}}
                    >
                      <div className="col-12 col-md-8">
                        <img
                          src={headers}
                          style={{ maxWidth: "100%" }}
                          className="previewImg"
                        ></img>
                      </div>
                      <div
                        className="col-12 col-md-8"
                        style={{
                          fontSize: "1rem",
                          textAlign: "left",
                        }}
                      >
                        <p>Dear {username} </p>
                        <div style={{ textAlign: "justify" }}>
                          Your request to migrate from production plan to
                          development plan has been carefully reviewed
                          <br />
                          <br />
                          We are happy to inform you that your request has been
                          granted and your application ... has been successfully
                          migrated from the sandbox to the live plan.
                          <br />
                          <br />
                          Kindly note that a lien has been placed on the
                          organisation bank acoount you filled on the Go-live
                          form and an email on your daily consumption will be
                          shared with you.
                          <br />
                          <br />
                          Welcome to the GTBank API Community
                        </div>
                      </div>
                      <br />
                      <div className="col-12 col-md-8 mt-2">
                        <img
                          src={approval}
                          style={{ maxWidth: "100%" }}
                          className="previewImg"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer d-fex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-sm white"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm orange"
                    onClick={sendInvitationMail}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="row d-flex justify-content-center mt-md-5" style={{}}>
        <div
          className="col-11 col-md-7 "
          style={{
            fontSize: "1rem",
            backgroundColor: "grey",
            borderRadius: "2px",
            opacity: "0.7",
            color: "black",
          }}
        >
          This Email Service Platform allows you to personalize already written
          mails to developers registered on the GTBank developers portal
        </div>
      </div>
    </div>
  );
}
export default withRouter(Selectmail);
