import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

import axios from "axios";

import { withRouter } from "react-router-dom";
import logo from "./logo.svg";

export class Loginpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      password: "",
      confirmPassword: "",
      token: "",
      authenticated: false,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.mySubmitHandler = this.mySubmitHandler.bind(this);
    this.registerRoute = this.registerRoute.bind(this);
  }

  // mySubmitHandler = (event) => {
  //   event.preventDefault();
  //   console.log("You are submitting " + this.state);
  //   //posting state data
  //   const { Username, password } = this.state;
  //   axios
  //     .post("https://nodebackenddb.herokuapp.com/signin", {
  //       Username: Username,
  //       password: password,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       if (response.data === "logged in") {
  //         this.props.history.push("/navbar");
  //       }
  //     })

  //     .catch((error) => {
  //       console.log("We are getting this error:");
  //       console.log(error.response);
  //     });
  // };

  componentDidMount() {
    localStorage.clear();
  }

  handleChange(event) {
    event.stopPropagation();
    let name = event.target.name;
    let value = event.target.value;

    //setting the new state
    this.setState({
      [name]: value,
    });
  }

  toogleDisplay = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({ Username: "", password: "" });
    const login = document.getElementById("myform");
    const register = document.getElementById("myform2");
    login.classList.toggle("hideme");
    register.classList.toggle("hideme");
  };

  loginRoute = (event) => {
    event.preventDefault();

    const { Username, password } = this.state;
    const token = localStorage.getItem("token");
    axios
      .post(
        "https://auto-response-mail-backend.herokuapp.com/signin",
        {
          username: Username,
          password: password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        const token = response.data.token;

        if (response.data.message === "success") {
          localStorage.setItem("token", token);
          this.setState({ authenticated: true });
          this.props.history.push("/selectmail");
        }
      })

      .catch((error) => {});
  };

  registerRoute(event) {
    event.preventDefault();

    const { Username, password } = this.state;
    if (this.state.password !== this.state.confirmPassword) {
      alert("Password and Confirm Password are not Identical");
    }
    axios
      .post("https://auto-response-mail-backend.herokuapp.com/signup", {
        username: Username,
        password: password,
      })
      .then((response) => {
        // console.log(response.data);
        const token = response.data.token;
        // this.setState({token:token})
        if (response.data.message === "success") {
          localStorage.setItem("token", token);
          // this.props.history.push("/selectmail");
        }
      })

      .catch((error) => {
        // console.log(error.response);
      });
  }

  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="row d-flex justify-content-center ">
            <div className="col-10 col-sm-6 col-md-5">
              {/* login */}
              <form
                id="myform"
                className="formsignup hideme"
                style={{
                  // backgroundColor: "white",
                  // boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
                  paddingBottom: "3rem",
                }}
              >
                <label
                  className="control-label"
                  style={{
                    fontSize: "15px",
                    position: "relative",
                    width: "100%",
                    textAlign: "left",
                    top: "25%",
                    display: "inline-block",
                  }}
                >
                  <div
                    style={{
                      color: "#2f2f2f",
                      fontFamily: "Poppins",
                    }}
                    className="robot"
                  >
                    <p>GTBank API Connect</p>
                    <p>Email Service Platform</p>
                  </div>
                  <div>
                    <img
                      src={logo}
                      alt="gtlogo"
                      style={{
                        width: "20%",
                        position: "absolute",
                        top: "-8%",
                        left: "80%",
                      }}
                    />
                  </div>
                </label>
                <br />
                <br />
                <br />
                <div
                  className="form-group transmove"
                  // style={{ border: "1px solid rgb(217,78,0) !important" }}
                >
                  <div className="input-group">
                    <div
                      className="input-group-addon borderss"
                      style={{
                        borderRight: "0",
                        backgroundColor: "#eeeeee",
                        borderBottomLeftRadius: "0",
                      }}
                    >
                      <i className="fa fa-envelope-o"></i>
                    </div>
                    <Form.Control
                      className="borderss stbnbd"
                      value={this.state.Username}
                      name="Username"
                      type="Username"
                      placeholder="johnjane@example.com"
                      onChange={this.handleChange}
                      style={{
                        borderLeft: "0",
                        borderBottomRightRadius: "0",
                        backgroundColor: "#eeeeee",
                      }}
                    />
                  </div>

                  <div className="input-group">
                    <div
                      className="input-group-addon borderss borderNone"
                      style={{
                        borderRight: "0",
                        borderRadius: "0",
                        backgroundColor: "#eeeeee",
                      }}
                    >
                      <i className="fa fa-key"></i>
                    </div>

                    <Form.Control
                      className="borderss borderNone"
                      value={this.state.password}
                      name="password"
                      type="password"
                      placeholder="******************"
                      onChange={this.handleChange}
                      style={{
                        borderLeft: "0",
                        borderRadius: "0",
                        backgroundColor: "#eeeeee",
                        borderTop: "0",
                      }}
                    />
                  </div>
                  <div className="input-group">
                    <div
                      className="input-group-addon borderss borderNone"
                      style={{
                        borderRight: "0",
                        backgroundColor: "#eeeeee",
                        borderTopLeftRadius: "0",
                      }}
                    >
                      <i className="fa fa-key"></i>
                    </div>

                    <Form.Control
                      className="borderss borderNone stbnbd2"
                      value={this.state.confirmPassword}
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      onChange={this.handleChange}
                      style={{
                        borderLeft: "0",
                        fontSize: "1rem",
                        borderTopRightRadius: "0",
                        backgroundColor: "#eeeeee",
                        borderTop: "0",
                      }}
                    />
                  </div>
                </div>
                <br />

                <Form.Group style={{ paddingTop: "5px" }}>
                  <Button
                    className="loginbut"
                    size="sm"
                    style={{
                      float: "left",
                    }}
                    onClick={this.toogleDisplay}
                  >
                    Login
                  </Button>
                  {/* <Link to="/selectmail"> */}
                  <Button
                    type="submit"
                    onClick={this.registerRoute}
                    className="orange"
                    size="sm"
                    style={{ float: "right" }}
                  >
                    Create Account
                  </Button>
                  {/* </Link> */}
                </Form.Group>
              </form>
              {/* loginform */}
              <form
                id="myform2"
                className="formsignup"
                style={{
                  // backgroundColor: "white",
                  // boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
                  paddingBottom: "3rem",
                }}
              >
                <label
                  className="control-label"
                  style={{
                    fontSize: "15px",
                    position: "relative",
                    width: "100%",
                    textAlign: "left",
                    top: "25%",
                    display: "inline-block",
                  }}
                >
                  <div
                    style={{
                      color: "#2f2f2f",
                      fontFamily: "Poppins",
                    }}
                    className="robot titleSize"
                  >
                    <p>GTBank API Connect</p>
                    <p>Email Service Platform</p>
                  </div>
                  <div>
                    <img
                      src={logo}
                      alt="gtlogo"
                      style={{
                        width: "20%",
                        position: "absolute",
                        top: "-8%",
                        left: "80%",
                      }}
                    />
                  </div>
                </label>
                <br />
                <br />
                <br />
                <div
                  className="form-group transmove"
                  // style={{ border: "1px solid rgb(217,78,0) !important" }}
                >
                  <div className="input-group">
                    <div
                      className="input-group-addon borderss"
                      style={{
                        borderRight: "0",
                        backgroundColor: "#eeeeee",
                        borderBottomLeftRadius: "0",
                      }}
                    >
                      <i className="fa fa-envelope-o"></i>
                    </div>
                    <Form.Control
                      className="borderss stbnbd"
                      value={this.state.Username}
                      name="Username"
                      type="Username"
                      placeholder="johnjane@example.com"
                      onChange={this.handleChange}
                      style={{
                        borderLeft: "0",
                        borderBottomRightRadius: "0",
                        backgroundColor: "#eeeeee",
                      }}
                    />
                  </div>

                  <div className="input-group">
                    <div
                      className="input-group-addon borderss borderNone"
                      style={{
                        borderRight: "0",
                        borderTopLeftRadius: "0",
                        backgroundColor: "#eeeeee",
                      }}
                    >
                      <i className="fa fa-key"></i>
                    </div>

                    <Form.Control
                      className="borderss borderNone"
                      value={this.state.password}
                      name="password"
                      type="password"
                      placeholder="***************"
                      onChange={this.handleChange}
                      style={{
                        borderLeft: "0",
                        borderTopRightRadius: "0",
                        backgroundColor: "#eeeeee",
                        borderTop: "0",
                      }}
                    />
                  </div>
                </div>
                <br />

                <Form.Group style={{ paddingTop: "5px" }}>
                  <Button
                    className="orange"
                    size="sm"
                    type="submit"
                    style={{
                      float: "left",
                    }}
                    onClick={this.loginRoute}
                  >
                    Login
                  </Button>
                  <Button
                    className="loginbut"
                    size="sm"
                    type="submit"
                    style={{ float: "right" }}
                    onClick={this.toogleDisplay}
                  >
                    Create Account
                  </Button>
                </Form.Group>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Loginpage);
