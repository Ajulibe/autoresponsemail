import React, { useState } from "react";
import logo from "./logo.svg";
import headers from "./headers.png";
import footers from "./footers.png";
import foot from "./foot.png";

export default function Selectmail() {
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
    <div class="container-fluid selectmail" style={{ height: "100vh" }}>
      <div className="row no-gutters" style={{}}>
        <nav class="clearfix">
          <div
            style={{
              float: "left",
              marginLeft: "1rem",
              marginTop: "1rem",
            }}
            class="buttons2"
          >
            <i
              class="fa fa-envelope-o"
              id="mailLogo"
              style={{
                color: "white",
                backgroundColor: "#2f2f2f",
                float: "left",
                marginRight: "1rem",
                marginTop: "0.3rem",
              }}
            ></i>
            {/* <ul class="navigation2">
              <li>
                <a href="#">EFEF</a>
              </li>
              <li>
                <a href="#">All Mails</a>
              </li>
            </ul> */}
            <div
              className="GtDiv"
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
          <div class="buttons">
            <ul class="navigation">
              <li class="homesf">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">All Mails</a>
              </li>
            </ul>
            <input type="search" class="srmv" />
          </div>
        </nav>
      </div>

      <div>
        {/* major row */}
        <div class="row" style={{}}>
          <div class="row d-flex logoTop" style={{ marginLeft: "70%" }}>
            <div class="col-12 col-md-12 ">
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
            class="col-12 col-md-12 d-flex justify-content-md-center justify-content-center"
            style={{}}
          >
            <form
              style={{
                marginTop: "0%",
              }}
              className="formUp"
            >
              <label style={{ fontSize: "1.2rem" }}>Developer's Details</label>
              {/* <br /> */}

              <div class="form-group">
                {/* <label class="control-label" for="email">
                  Email
                </label> */}
                <div class="input-group">
                  <div class="input-group-addon">@</div>
                  <input
                    class="form-control"
                    name="username"
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={usernamehandleChange}
                  />
                </div>
              </div>
              <div class="form-group ">
                <div class="input-group">
                  <div class="input-group-addon">
                    <i class="fa fa-envelope-o"></i>
                  </div>
                  <input
                    class="form-control"
                    id="email"
                    name="email"
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={emailhandleChange}
                  />
                </div>
              </div>
              <div
                className="row d-flex justify-content-between align-items-md-center"
                style={{ padding: "0px" }}
              >
                <div className="col-md-4" style={{ padding: "0px" }}>
                  <div
                    className="row d-flex justify-content-md-left"
                    style={{}}
                  >
                    <div className="col-12 small-button">
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        class="btn btn-primary btn-sm orange buttonwidth"
                        style={{
                          textAlign: "center",
                          fontSize: "0.9rem",
                          // borderRadius: "0",
                        }}
                      >
                        Auto Response
                      </button>
                      {/* modal */}
                      <div
                        class="modal fade"
                        id="exampleModalCenter"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalCenterTitle"
                        aria-hidden="true"
                      >
                        <div
                          class="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5
                                class="modal-title"
                                id="exampleModalCenterTitle"
                              >
                                EMAIL PREVIEW
                              </h5>
                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <div
                                class="row d-flex justify-content-md-center previewDiv"
                                style={{}}
                              >
                                <div class="col-12 col-md-8">
                                  <img
                                    src={headers}
                                    style={{ maxWidth: "100%" }}
                                    class="previewImg"
                                  ></img>
                                </div>
                                <div
                                  class="col-12 col-md-8"
                                  style={{
                                    fontSize: "1rem",
                                    textAlign: "left",
                                  }}
                                  // class="previewImg"
                                >
                                  <p>Hello {username} </p>
                                  Thank you for you interest in GTBank APIs. We
                                  are currently working on some finishing
                                  touches before our final launch of the
                                  developer portal. This would be done as soon
                                  as possible. Kindly exercise patience as we
                                  put things in place.
                                  <br />
                                  <br />
                                  We will inform you when the developer portal
                                  is finally up for use.
                                  <br />
                                  <br />
                                  Thank you
                                </div>
                                <br />
                                <div class="col-12 col-md-8 mt-2">
                                  <img
                                    src={footers}
                                    style={{ maxWidth: "100%" }}
                                    class="previewImg"
                                  ></img>
                                </div>
                              </div>
                            </div>

                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn  white"
                                data-dismiss="modal"
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                class="btn  orange"
                                onClick={sendAutoresponseMail}
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
                <br />
                <br />
                <div
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
                        class="btn btn-primary btn-sm orange buttonwidth"
                        style={{
                          fontSize: "0.9rem",
                        }}
                      >
                        Invitation
                      </button>
                      {/* modal */}
                      <div
                        class="modal fade"
                        id="exampleModalCenter2"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalCenterTitle2"
                        aria-hidden="true"
                      >
                        <div
                          class="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5
                                class="modal-title"
                                id="exampleModalCenterTitle2"
                              >
                                Modal title
                              </h5>
                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              {" "}
                              <div class="modal-body">
                                <div
                                  class="row d-flex justify-content-md-center previewDiv"
                                  style={{}}
                                >
                                  <div class="col-12 col-md-8">
                                    <img
                                      src={headers}
                                      style={{ maxWidth: "100%" }}
                                      class="previewImg"
                                    ></img>
                                  </div>
                                  <div
                                    class="col-12 col-md-8"
                                    style={{
                                      fontSize: "1rem",
                                      textAlign: "left",
                                    }}
                                    // class="previewImg"
                                  >
                                    <p>Dear {username} </p>
                                    <span>
                                      GTBank API developer portal is built to
                                      allow third party developers integrate
                                      with our APIs easily.
                                    </span>
                                    <br />
                                    <br />
                                    Take advantage of our API offerings grouped
                                    into Payments,Accounts,Identity and build
                                    best in class products and solutions that
                                    speak to your customers' needs.
                                    <br />
                                    <br />
                                    We are hereby specially inviting you and
                                    your team to join the pilot test of the
                                    sandbox before we launch. Kindly share the
                                    email address of the person/persons to test
                                    the APIs so we can approve after an account
                                    has been created.
                                  </div>
                                  <br />
                                  <div class="col-12 col-md-8 mt-2">
                                    <img
                                      src={foot}
                                      style={{ maxWidth: "100%" }}
                                      class="previewImg"
                                    ></img>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn  white"
                                data-dismiss="modal"
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                class="btn  orange"
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
                </div>
                <br />
                <br />
                <div className="col-md-4" style={{ padding: "0px" }}>
                  <div className="row d-flex justify-content-md-right">
                    <div className="col-12  small-button">
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#exampleModalCenter3"
                        class="btn btn-primary btn-sm orange buttonwidth"
                        style={{
                          fontSize: "0.9rem",
                        }}
                      >
                        Approval
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModalCenter3"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalCenterTitle3"
                        aria-hidden="true"
                      >
                        <div
                          class="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5
                                class="modal-title"
                                id="exampleModalCenterTitle3"
                              >
                                Modal title
                              </h5>
                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">...</div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn  white"
                                data-dismiss="modal"
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                class="btn  orange"
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
                </div>
              </div>
            </form>
          </div>
          <div className="col-12"></div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div class="row">
        <div class="col-md-3"></div>
        <div
          class="col-12 col-md-6"
          style={{
            fontSize: "1rem",
            color: "white",
            backgroundColor: "grey",
            opacity: "0.6",
            borderRadius: "0.5rem",
          }}
        >
          This email service platform allows you to personalize already written
          mails to developers registered on the GTBank developers portal
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  );
}
