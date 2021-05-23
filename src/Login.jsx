import React from "react";

//  form for Register and Login
const Login = () => {
  function submitHandler(e) {
    e.preventDefault();
    var username = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
    var cpass = document.getElementById("cpassword").value;

    // Form Validation

    if (!username || !pass || !cpass) {
      alert("Enter all the input fields");
    } else if (pass !== cpass) {
      document.getElementById("error").innerHTML = "Passwords are not matching";
    } else {
      document.getElementById("forms").innerHTML = "Enjoy Shopping";
    }
  }

  return (
    <>
      <form class="form" onSubmit={submitHandler}>
        <div className="container" id="forms">
          <h3>Login to Shop</h3>
          <div className="container__input">
            <label for="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              id="user"
              required
            />

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="password"
            />
            <label for="psw">
              <b> Confirm Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="cpsw"
              id="cpassword"
            />
            <p id="error"></p>

            <button type="submit" id="button">
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
