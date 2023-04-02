import React from "react";
import "../css/style-login.css";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  setParams = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  login = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", this.state.email);
    urlencoded.append("password", this.state.password);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      "http://localhost:3001/api/auth/login",
      requestOptions
    )
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw Error(response.success);
      })
      .then((result) => {
        console.log(result);
        localStorage.setItem("success", result.success);
        if (result.success == true) {
          alert("Thanh cong");
        } else {
          alert("email, password are wrong");
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("email, password are wrong");
      });
  };

  render() {
    return (
      <form>
        <h1>BIGCORP</h1>
        <h1>Sign in</h1>
        <div class="social-container">
          <a href="#" class="social">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="social">
            <i class="fab fa-google-plus-g"></i>
          </a>
          <a href="#" class="social">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
        <span>or use your account</span>
        <div class="user-box">
          <label>email:</label>
          <input type="text" name="email" onChange={this.setParams} />
        </div>
        <div class="user-box">
          <label>password:</label>
          <input type="password" name="password" onChange={this.setParams} />
        </div>
        <div>
          <button type="button" name="email" onClick={this.login}>
            Login
          </button>
        </div>
        <span> Register </span>
      </form>
    );
  }
}
