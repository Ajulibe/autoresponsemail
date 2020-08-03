import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "../index.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Signup from "./Signup";

import App from "../App";
import { withRouter } from "react-router-dom";
import logo from "./logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export class Loginpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      password: "",
      authenticated: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    console.log("You are submitting " + this.state);
    //posting state data
    const { Username, password } = this.state;
    axios
      .post("https://nodebackenddb.herokuapp.com/signin", {
        Username: Username,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data === "logged in") {
          this.props.history.push("/navbar");
        }
      })

      .catch((error) => {
        console.log("We are getting this error:");
        console.log(error.response);
      });
  };

  handleChange(event) {
    event.stopPropagation();
    let name = event.target.name;
    let value = event.target.value;

    //setting the new state
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="background">
        <Container style={{ position: "relative" }}>
          <Row>
            <Col xs></Col>
            <Col xs={{ order: 12 }}></Col>
            <Col xs={{ order: 1 }}>
              {/* main form */}
              <div id="newstyle">
                <Form onSubmit={this.mySubmitHandler} style={{}}>
                  <Form.Label
                    style={{
                      fontSize: "15px",
                      position: "relative",
                      width: "100%",
                      textAlign: "left",
                      top: "10%",
                      display: "inline-block",
                    }}
                  >
                    <div
                      style={{
                        color: "#707070",
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
                        style={{
                          width: "20%",
                          position: "absolute",
                          top: "-30%",
                          left: "80%",
                        }}
                      />
                    </div>
                  </Form.Label>
                  <br />
                  <br />
                  <i class="fas fa-envelope"></i>
                  <br />
                  <Form.Group
                    controlId="formBasicEmail"
                    style={{ border: "1px solid rgb(217,78,0) !important" }}
                  >
                    <Form.Control
                      className="borderss"
                      value={this.state.Username}
                      name="Username"
                      type="Username"
                      placeholder="Username"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <br />
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      className="borderss"
                      value={this.state.password}
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <br />
                  <br />
                  <Form.Group
                    controlId="formBasicCheckbox"
                    style={{ textAlign: "left" }}
                  >
                    <Form.Check
                      className="checkers"
                      className="remember"
                      type="checkbox"
                      label="Remember me"
                    />
                  </Form.Group>
                  <Form.Group style={{ paddingTop: "5px" }}>
                    <Button
                      className="white"
                      size="sm"
                      type="submit"
                      style={{ float: "left" }}
                    >
                      Login
                    </Button>
                    <Button
                      className="orange"
                      size="sm"
                      type="submit"
                      style={{ float: "right" }}
                    >
                      Register
                    </Button>
                  </Form.Group>
                </Form>
              </div>
              <br />
              <div></div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Loginpage);
