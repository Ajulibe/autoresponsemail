import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import "../index.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      // confirmPassword: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    console.log("submitted");
    console.log("You are submitting " + this.state.email);

    //posting registration data
    const { name, email, password } = this.state;
    axios
      .post("https://nodebackenddb.herokuapp.com/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data === "registered") {
          alert("registered");

          this.props.history.push("/");
        }
      })

      .catch((error) => {
        console.log("We are getting this error:");
        console.log(error.response);
      });
  };

  //
  handleChange(event) {
    event.stopPropagation();
    let name = event.target.name;
    let value = event.target.value;

    //setting thwe new state
    this.setState({ [name]: value });
  }
  render() {
    const message = (
      <div style={{ display: "inline" }}>
        <i>I accept the</i>
        <a href=""> Terms and Conditions</a>{" "}
      </div>
    );

    return (
      <div className="background2">
        <Container>
          <Row>
            <Col xs></Col>
            <Col xs={{ order: 12 }}></Col>
            <Col xs={{ order: 1 }}>
              <div id="newstyle">
                <Form onSubmit={this.mySubmitHandler}>
                  <div style={{ borderBottom: "1px solid #dee3e2" }}>
                    <Form.Label
                      style={{ fontWeight: "Bold", fontSize: "20px" }}
                    >
                      SIGN UP{" "}
                    </Form.Label>
                    <br />
                    <Form.Label
                      style={{ fontWeight: "Normal", Color: "#dee3e2" }}
                    >
                      Please fill in this form to create an account!{" "}
                    </Form.Label>
                  </div>
                  <br />

                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="name"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                    <br />
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                    <br />
                    {/* <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={this.state.confirmPassword}
                      onChange={this.handleChange}
                    /> */}
                  </Form.Group>
                  <Form.Group
                    controlId="formBasicCheckbox"
                    style={{ textAlign: "left" }}
                  >
                    <Form.Check
                      type="checkbox"
                      label={message}
                      style={{ fontSize: "10px" }}
                    />
                  </Form.Group>
                  <Form.Group style={{ paddingTop: "5px" }}>
                    <Button type="submit" size="sm" block>
                      SIGN UP
                    </Button>
                  </Form.Group>
                  <Form.Label
                    style={{ fontWeight: "Normal", Color: "#dee3e2" }}
                  >
                    Already a user? <Link to="/">Login</Link>
                  </Form.Label>
                </Form>
              </div>
              <br />
              <div>
                {/* <Form.Group controlId="formBasicEmail">
                  <Link to="/navbar">
                    <Button size="sm" block style={{ borderRadius: "2%" }}>
                      SEARCH
                    </Button>
                  </Link>
                </Form.Group> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Signup);
